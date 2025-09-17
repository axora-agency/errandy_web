import { useEffect, useRef, useState } from "react";
import { useOnBoardingStore } from "@/store/onBoardingStore";
import { Input } from "@/components/ui/input";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SUGGEST_ADDRESSES } from "@/graphql/queries/address/suggest-addresses";
import { PLACE_DETAILS } from "@/graphql/queries/address/place-details";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type {
  AddressSuggestion,
  SuggestAddressesQuery,
  SuggestAddressesQueryVariables,
  PlaceDetailsQuery,
  PlaceDetailsQueryVariables,
  UseCurrentAddressMutation,
  UseCurrentAddressMutationVariables,
} from "@/gql/graphql";
import { USE_CURRENT_ADDRESS } from "@/graphql/mutations/user/use-current-address";
import { getCurrentPosition } from "@/utils";

// Minimal shape for selected place details we care about
// shape for selected place, now including user-defined label
type SelectedPlace = {
  description: string;
  placeId: string;
  label?: string;
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

  const [fetchSuggestions, { data: suggestData }] = useLazyQuery<
    SuggestAddressesQuery,
    SuggestAddressesQueryVariables
  >(SUGGEST_ADDRESSES, { fetchPolicy: "no-cache" });
  const [fetchPlaceDetails, { data: placeData }] = useLazyQuery<
    PlaceDetailsQuery,
    PlaceDetailsQueryVariables
  >(PLACE_DETAILS, { fetchPolicy: "no-cache" });

  const [useCurrentAddress] = useMutation<
    UseCurrentAddressMutation,
    UseCurrentAddressMutationVariables
  >(USE_CURRENT_ADDRESS, {
    onCompleted(d) {
      if (d?.useCurrentAddress) {
        setUser(d.useCurrentAddress);
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

    fetchSuggestions({
      variables: {
        input: {
          input: query,
        },
      },
    });
  }, [query]);

  useEffect(() => {
    if (suggestData?.suggestAddresses) {
      setSuggestions(suggestData.suggestAddresses || []);
    }
  }, [suggestData]);

  const pickSuggestion = (s: AddressSuggestion) => {
    const placeId = s.placeId;
    const description = s.description;
    const label = selected?.label || "";
    setSelected({ description, placeId, label });
    setQuery(description);
    setSuggestions([]);
    setSelectedAddress({ address: description, label });
    fetchPlaceDetails({ variables: { input: { placeId } } });
  };
  useEffect(() => {
    if (placeData?.placeDetails && selected) {
      const { formattedAddress, latitude, longitude } = placeData.placeDetails;
      const label = selected.label || "";
      const updated: SelectedPlace = {
        description: formattedAddress,
        placeId: selected.placeId,
        label,
        lat: latitude,
        lng: longitude,
      };
      setSelected(updated);
      setSelectedAddress({
        address: formattedAddress,
        label,
        latitude,
        longitude,
      });
    }
  }, [placeData]);

  const handleUseCurrentLocation = async () => {
    setSavingCurrent(true);
    try {
      const pos = await getCurrentPosition();
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      // call backend mutation with real coords
      await useCurrentAddress({
        variables: { input: { latitude, longitude } },
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to access current location");
    } finally {
      setSavingCurrent(false);
    }
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

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery("");
              setSuggestions([]);
            }}
          >
            Clear
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Or</div>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleUseCurrentLocation}
            disabled={savingCurrent}
          >
            {savingCurrent
              ? "Registering location..."
              : "Use my current location"}
          </Button>
        </div>

        {!selected && (
          <div className="mt-4">
            {suggestions.length > 0 ? (
              <ul className="divide-y rounded overflow-hidden border bg-white">
                {suggestions.map((s: AddressSuggestion) => (
                  <li key={s.placeId}>
                    <button
                      onClick={() => pickSuggestion(s)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50"
                      type="button"
                    >
                      <div className="text-sm font-medium">{s.description}</div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-gray-500">
                No suggestions yet. Start typing above.
              </div>
            )}
          </div>
        )}

        {selected && (
          <div className="mt-4 border-t pt-3">
            <div className="text-sm font-medium">Selected</div>
            <div className="text-sm text-gray-700">{selected.description}</div>
            {selected.lat && selected.lng && (
              <div className="text-xs text-gray-500 mt-1">
                {selected.lat.toFixed(5)}, {selected.lng.toFixed(5)}
              </div>
            )}
            <div>
              <label
                htmlFor="address-label"
                className="block text-sm font-medium text-gray-700 mt-5"
              >
                Label (e.g., Home, Office)
              </label>
              <Input
                id="address-label"
                className="mt-1"
                value={selected?.label || ""}
                onChange={(e) => {
                  const label = e.target.value;
                  // update local selected state for controlled input
                  setSelected((prev) =>
                    prev ? { ...prev, label } : prev
                  );
                  // persist label and existing details to store
                  if (selected) {
                    setSelectedAddress({
                      address: selected.description,
                      label,
                      latitude: selected.lat,
                      longitude: selected.lng,
                    });
                  }
                }}
                placeholder="Label your address"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
