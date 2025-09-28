import { useState, useRef, useEffect } from "react";
import { MapPin, Plus, Search, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/userStore";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SUGGEST_ADDRESSES } from "@/graphql/queries/address/suggest-addresses";
import { PLACE_DETAILS } from "@/graphql/queries/address/place-details";
import { ADD_USER_ADDRESS } from "@/graphql/mutations/user/add-user-address";
import { getCurrentPosition } from "@/utils";
import { toast } from "sonner";
import type {
  AddressSuggestion,
  SuggestAddressesQuery,
  SuggestAddressesQueryVariables,
  PlaceDetailsQuery,
  PlaceDetailsQueryVariables,
  SaveUserAddressMutation,
  SaveUserAddressMutationVariables,
} from "@/gql/graphql";

// Selected place for new addresses
type SelectedPlace = {
  description: string;
  placeId: string;
  label?: string;
  lat?: number;
  lng?: number;
};

const AddressSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<SelectedPlace | null>(
    null
  );
  const [newAddressLabel, setNewAddressLabel] = useState("");
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { user, setUser } = useUserStore();

  // Get user addresses from the user object
  const userAddresses = user?.userAddress || [];

  const currentAddress =
    userAddresses.find((addr) => addr?.id === user?.activeAddressId) || null;

  // GraphQL hooks
  const [fetchSuggestions] = useLazyQuery<
    SuggestAddressesQuery,
    SuggestAddressesQueryVariables
  >(SUGGEST_ADDRESSES, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setSuggestions(data?.suggestAddresses || []);
    },
  });

  const [fetchPlaceDetails] = useLazyQuery<
    PlaceDetailsQuery,
    PlaceDetailsQueryVariables
  >(PLACE_DETAILS, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      if (data?.placeDetails && selectedPlace) {
        const { formattedAddress, latitude, longitude } = data.placeDetails;
        setSelectedPlace((prev) =>
          prev
            ? {
                ...prev,
                description: formattedAddress,
                lat: latitude,
                lng: longitude,
              }
            : null
        );
      }
    },
  });

  const [saveUserAddress] = useMutation<
    SaveUserAddressMutation,
    SaveUserAddressMutationVariables
  >(ADD_USER_ADDRESS, {
    onCompleted: (data) => {
      if (data?.saveUserAddress) {
        setUser(data.saveUserAddress);
        toast.success("Address saved successfully");
        resetAddressForm();
        setIsOpen(false);
      }
    },
    onError: (error) => {
      console.error("Error saving address:", error);
      toast.error("Failed to save address");
      setIsAddingAddress(false);
    },
  });

  const truncateAddress = (address: string, maxLength: number = 20) => {
    if (address.length <= maxLength) return address;
    return address.substring(0, maxLength) + "...";
  };

  const resetAddressForm = () => {
    setSearchQuery("");
    setSuggestions([]);
    setSelectedPlace(null);
    setNewAddressLabel("");
    setIsSearching(false);
    setIsAddingAddress(false);
  };

  // Fetch suggestions when search query changes
  useEffect(() => {
    if (!searchQuery || searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    fetchSuggestions({
      variables: {
        input: {
          input: searchQuery,
        },
      },
    });
  }, [searchQuery, fetchSuggestions]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        resetAddressForm();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSuggestionSelect = (suggestion: AddressSuggestion) => {
    const place: SelectedPlace = {
      description: suggestion.description,
      placeId: suggestion.placeId,
    };
    setSelectedPlace(place);
    setSearchQuery(suggestion.description);
    setSuggestions([]);

    // Fetch detailed place information
    fetchPlaceDetails({
      variables: {
        input: {
          placeId: suggestion.placeId,
        },
      },
    });
  };

  const handleSaveAddress = async () => {
    if (!selectedPlace || !newAddressLabel.trim()) {
      toast.error("Please provide both address and label");
      return;
    }

    if (!selectedPlace.lat || !selectedPlace.lng) {
      toast.error("Address coordinates not found");
      return;
    }

    setIsAddingAddress(true);

    try {
      await saveUserAddress({
        variables: {
          dto: {
            address: selectedPlace.description,
            label: newAddressLabel.trim(),
            latitude: selectedPlace.lat,
            longitude: selectedPlace.lng,
          },
        },
      });
    } catch (error) {
      // Error handled in mutation onError
    }
  };

  const handleUseCurrentLocation = async () => {
    setIsAddingAddress(true);
    try {
      const position = await getCurrentPosition();

      // In a real implementation, you'd call the useCurrentAddress mutation
      // For now, we'll show a message
      toast.success("Current location will be implemented");
      console.log("Current position:", position.coords);
    } catch (error) {
      toast.error("Unable to access current location");
    } finally {
      setIsAddingAddress(false);
    }
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-muted/50 transition-colors focus:outline-none border-b border-transparent hover:border-muted-foreground"
        title={currentAddress ? currentAddress.address || "" : "Select address"}
      >
        <MapPin className="size-4 text-muted-foreground flex-shrink-0" />
        <span className="hidden xl:inline text-foreground truncate max-w-[120px]">
          {currentAddress
            ? truncateAddress(currentAddress.address || "")
            : "Select address"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-popover text-popover-foreground overflow-hidden rounded-md border shadow-md dark:shadow-xl dark:shadow-primary/20 dark:border-primary/30 z-50 max-h-96">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="font-semibold text-sm">
              {isSearching ? "Add New Address" : "Select Address"}
            </h3>
            <button
              onClick={() => setIsSearching(!isSearching)}
              className="p-1 hover:bg-muted rounded"
              title={isSearching ? "Cancel" : "Add new address"}
            >
              {isSearching ? "✕" : <Plus className="size-4" />}
            </button>
          </div>

          {/* Add New Address Form */}
          {isSearching && (
            <div className="p-4 border-b bg-muted/20 space-y-3">
              {/* Address Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for address..."
                  className="w-full pl-10 pr-3 py-2 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>

              {/* Address Suggestions */}
              {suggestions.length > 0 && (
                <div className="max-h-32 overflow-y-auto border rounded bg-background">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.placeId}
                      onClick={() => handleSuggestionSelect(suggestion)}
                      className="w-full text-left px-3 py-2 text-sm hover:bg-muted border-b last:border-b-0"
                    >
                      {suggestion.description}
                    </button>
                  ))}
                </div>
              )}

              {/* Selected Address Details */}
              {selectedPlace && (
                <div className="space-y-2 p-3 bg-background border rounded">
                  <div className="text-sm font-medium text-primary">
                    Selected:
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {selectedPlace.description}
                  </div>

                  {/* Address Label Input */}
                  <div>
                    <input
                      type="text"
                      value={newAddressLabel}
                      onChange={(e) => setNewAddressLabel(e.target.value)}
                      placeholder="Label (e.g., Home, Work, etc.)"
                      className="w-full px-3 py-2 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSaveAddress}
                    disabled={!newAddressLabel.trim() || isAddingAddress}
                    className="w-full px-3 py-2 bg-primary text-primary-foreground text-sm rounded hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isAddingAddress && (
                      <Loader2 className="size-4 animate-spin" />
                    )}
                    {isAddingAddress ? "Saving..." : "Save Address"}
                  </button>
                </div>
              )}

              {/* Current Location Option */}
              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm text-muted-foreground">Or</span>
                <button
                  onClick={handleUseCurrentLocation}
                  disabled={isAddingAddress}
                  className="text-sm text-primary hover:text-primary/80 disabled:opacity-50"
                >
                  Use current location
                </button>
              </div>
            </div>
          )}

          {/* Address List - Only show when not searching */}
          {!isSearching && (
            <div className="max-h-64 overflow-y-auto">
              {userAddresses.length === 0 ? (
                <div className="px-4 py-6 text-center text-muted-foreground">
                  <MapPin className="size-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No saved addresses</p>
                  <p className="text-xs mt-1">
                    Add your first address to get started
                  </p>
                </div>
              ) : (
                userAddresses
                  .filter((address) => address !== null)
                  .map((address) => (
                  <button
                    key={address!.id}
                    className={cn(
                      "flex items-start gap-3 w-full px-4 py-3 text-left hover:bg-muted/50 border-b border-border/50 last:border-b-0 transition-colors",
                      address?.id === user?.activeAddressId && "bg-primary/5"
                    )}
                    disabled // For now, since we can't switch addresses without proper backend support
                  >
                    <MapPin className="size-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "text-sm font-medium",
                              address?.id === user?.activeAddressId && "text-primary"
                            )}
                          >
                            {address?.label}
                          </span>
                          {address?.id === user?.activeAddressId && (
                            <Check className="size-3 text-primary" />
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {address?.address}
                      </p>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}

          {/* Footer - Only show when not searching */}
          {!isSearching && (
            <div className="px-4 py-2 border-t bg-muted/20">
              <button
                className="text-xs text-primary hover:text-primary/80 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { AddressSelector };
