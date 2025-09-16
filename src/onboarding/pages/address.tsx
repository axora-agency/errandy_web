import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER_ADDRESS } from "@/graphql/mutations/user/add-user-address";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Minimal shape for selected place details we care about
type SelectedPlace = {
	description: string;
	placeId: string;
	lat?: number;
	lng?: number;
};

const loadGoogleMaps = (key: string) => {
	if (typeof window === "undefined") return Promise.reject("no-window");
	if ((window as any).google && (window as any).google.maps) return Promise.resolve();

	return new Promise<void>((resolve, reject) => {
		const existing = document.getElementById("google-maps-script");
		if (existing) {
			existing.addEventListener("load", () => resolve());
			return;
		}

		const script = document.createElement("script");
		script.id = "google-maps-script";
		script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
		script.async = true;
		script.defer = true;
		script.onload = () => resolve();
		script.onerror = (e) => reject(e);
		document.head.appendChild(script);
	});
};

export default function OnboardingAddressPage() {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState<Array<any>>([]);
	const [selected, setSelected] = useState<SelectedPlace | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate();
	const setUser = useUserStore((s) => s.setUser);

	const [addAddress, { loading }] = useMutation(ADD_USER_ADDRESS, {
		onCompleted(data) {
			if (data?.addUserAddress) {
				setUser(data.addUserAddress);
				toast.success("Address saved");
				navigate("/onboarding/completed");
			}
		},
		onError(err) {
			console.error(err);
			toast.error("Failed to save address");
		},
	});

	useEffect(() => {
		const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
		if (!key) return;
		let mounted = true;
		loadGoogleMaps(key)
			.then(() => {
				if (!mounted) return;
				// nothing else here - we'll use PlacesService on demand
			})
			.catch((e) => {
				console.warn("Failed to load Google Maps script", e);
			});

		return () => {
			mounted = false;
		};
	}, []);

	// Simple debounce
	useEffect(() => {
		if (!query || query.length < 2) {
			setSuggestions([]);
			return;
		}

		const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
		if (!key) return;

		let cancelled = false;
		const timer = setTimeout(() => {
			const service = new (window as any).google.maps.places.AutocompleteService();
			service.getPlacePredictions({ input: query }, (preds: any[], status: any) => {
				if (cancelled) return;
				if (status === (window as any).google.maps.places.PlacesServiceStatus.OK) {
					setSuggestions(preds || []);
				} else {
					setSuggestions([]);
				}
			});
		}, 250);

		return () => {
			cancelled = true;
			clearTimeout(timer);
		};
	}, [query]);

	const pickSuggestion = (s: any) => {
		const placeId = s.place_id || s.placeId || s.placeId;
		const description = s.description || s.formatted_address || s.name || "";
		setSelected({ description, placeId });
		setQuery(description);
		setSuggestions([]);

		// fetch lat/lng
		try {
			const ps = new (window as any).google.maps.places.PlacesService(
				document.createElement("div")
			);
			ps.getDetails({ placeId }, (place: any, status: any) => {
				if (status === (window as any).google.maps.places.PlacesServiceStatus.OK) {
					const loc = place.geometry?.location;
					if (loc) {
						setSelected((prev) =>
							prev ? { ...prev, lat: loc.lat(), lng: loc.lng() } : prev
						);
					}
				}
			});
		} catch (e) {
			// ignore
		}
	};

	const onNext = () => {
		if (!selected) {
			toast.error("Please select an address");
			return;
		}

		const dto = {
			placeId: selected.placeId,
			address: selected.description,
			latitude: selected.lat,
			longitude: selected.lng,
		} as any;

		addAddress({ variables: { dto } });
	};

	return (
		<div className="py-8">
			<h2 className="text-2xl font-semibold mb-4">Add your address</h2>
			<p className="text-sm text-gray-600 mb-6">
				Start typing and choose your address from Google suggestions.
			</p>

			<div className="max-w-xl">
				<Input
					ref={inputRef}
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						setSelected(null);
					}}
					placeholder="Search address"
				/>

				{suggestions.length > 0 && (
					<div className="mt-2 bg-white border rounded shadow-sm">
						{suggestions.map((s: any) => (
							<button
								key={s.place_id || s.placeId || s.id}
								onClick={() => pickSuggestion(s)}
								className="w-full text-left px-4 py-2 hover:bg-gray-50"
								type="button"
							>
								{s.description || s.formatted_address || s.name}
							</button>
						))}
					</div>
				)}

				{selected && (
					<div className="mt-4 text-sm text-gray-700">
						<div className="font-medium">Selected address</div>
						<div>{selected.description}</div>
						{selected.lat && selected.lng && (
							<div className="text-xs text-gray-500">
								{selected.lat.toFixed(5)}, {selected.lng.toFixed(5)}
							</div>
						)}
					</div>
				)}

				<div className="mt-6 flex justify-end">
					<Button onClick={onNext} disabled={loading}>
						{loading ? "Saving..." : "Save & Continue"}
					</Button>
				</div>
			</div>
		</div>
	);
}

