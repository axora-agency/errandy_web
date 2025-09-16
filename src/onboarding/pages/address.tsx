import { useEffect, useRef, useState } from "react";
import { useOnBoardingStore } from "@/store/onBoardingStore";
import { Input } from "@/components/ui/input";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SUGGEST_ADDRESSES } from "@/graphql/queries/address/suggest-addresses";
import { ADD_USER_ADDRESS } from "@/graphql/mutations/user/add-user-address";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Minimal shape for selected place details we care about
type SelectedPlace = {
  description: string;
  placeId: string;
  lat?: number;
  lng?: number;
};

// suggestions come from backend now

export default function OnboardingAddressPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Array<any>>([]);
  const [selected, setSelected] = useState<SelectedPlace | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setSelectedAddress = useOnBoardingStore((s) => s.setSelectedAddress);
  const setUser = useUserStore((s) => s.setUser);
  const navigate = useNavigate();

  const [fetchSuggestions, { data: suggestData }] = useLazyQuery(
    SUGGEST_ADDRESSES,
    { fetchPolicy: "no-cache" }
  );

  const [addAddress] = useMutation(ADD_USER_ADDRESS, {
    onCompleted(d) {
      if (d?.addUserAddress) {
        setUser(d.addUserAddress);
        toast.success("Address saved");
        navigate("/onboarding/completed");
      }
    },
    onError(err) {
      console.error(err);
      toast.error("Failed to save address");
    },
  });
  const [savingCurrent, setSavingCurrent] = useState(false);

  // fetch backend suggestions when query changes
  useEffect(() => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    fetchSuggestions({ variables: { q: query } });
  }, [query]);

  useEffect(() => {
    if (suggestData?.suggestAddresses) {
      setSuggestions(suggestData.suggestAddresses || []);
    }
  }, [suggestData]);

  const pickSuggestion = (s: any) => {
    const placeId = s.placeId || s.place_id;
    const description = s.description || s.formatted_address || s.name || "";
    setSelected({ description, placeId });
    setQuery(description);
    setSuggestions([]);
    // persist to onboarding store
    setSelectedAddress({ placeId, address: description });
    // If the backend returns lat/lng with suggestions, persist them
    if (s.latitude && s.longitude) {
      setSelected((prev) => (prev ? { ...prev, lat: s.latitude, lng: s.longitude } : prev));
      setSelectedAddress({ placeId, address: description, latitude: s.latitude, longitude: s.longitude });
    }
  };

  const handleUseCurrentLocation = () => {
    // Ask backend to use the user's current location (server should infer from IP or request context)
    setSavingCurrent(true);
    const dto: any = { useCurrentLocation: true };
    addAddress({ variables: { dto } })
      .catch(() => {
        // onError will show toast
      })
      .finally(() => setSavingCurrent(false));
  };

  // address persistence is handled by OnboardingLayout's Next button

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Add your address</h2>
      <p className="text-sm text-gray-600 mb-6">
        Start typing and choose your address.
      </p>

      <div className="max-w-xl bg-white border rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(null);
            }}
            placeholder="Search address"
          />

          <Button variant="outline" size="sm" onClick={() => { setQuery(""); setSuggestions([]); }}>
            Clear
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Or</div>
          <Button variant="secondary" size="sm" onClick={handleUseCurrentLocation} disabled={savingCurrent}>
            {savingCurrent ? "Registering location..." : "Use my current location"}
          </Button>
        </div>

        <div className="mt-4">
          {suggestions.length > 0 ? (
            <ul className="divide-y rounded overflow-hidden border bg-white">
              {suggestions.map((s: any) => (
                <li key={s.place_id || s.placeId || s.id}>
                  <button
                    onClick={() => pickSuggestion(s)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50"
                    type="button"
                  >
                    <div className="text-sm font-medium">{s.description || s.formatted_address || s.name}</div>
                    {s.subText && <div className="text-xs text-gray-500">{s.subText}</div>}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-sm text-gray-500">No suggestions yet. Start typing above.</div>
          )}
        </div>

        {selected && (
          <div className="mt-4 border-t pt-3">
            <div className="text-sm font-medium">Selected</div>
            <div className="text-sm text-gray-700">{selected.description}</div>
            {selected.lat && selected.lng && (
              <div className="text-xs text-gray-500 mt-1">{selected.lat.toFixed(5)}, {selected.lng.toFixed(5)}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
