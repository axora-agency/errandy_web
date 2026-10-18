import { useState, useRef, useEffect } from "react";
import { MapPin, Plus, Check, Loader2, Navigation } from "lucide-react";
import { useQuery, useMutation } from "@apollo/client";
import { getCurrentPosition } from "@/utils";
import { toast } from "sonner";
import type {
  MyAddressesQuery,
  CreateAddressMutation,
  CreateAddressMutationVariables,
  SetDefaultAddressMutation,
  SetDefaultAddressMutationVariables,
} from "@/gql/graphql";
import {
  MY_ADDRESSES,
  CREATE_ADDRESS,
  SET_DEFAULT_ADDRESS,
} from "@/graphql";

const AddressSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [street, setStreet] = useState("");
  const [label, setLabel] = useState("Home");
  const [city, setCity] = useState("Lagos");
  const [state, setState] = useState("Lagos");
  const [country] = useState("Nigeria");
  const [latitude, setLatitude] = useState<number | null>(6.5244);
  const [longitude, setLongitude] = useState<number | null>(3.3792);
  const [detecting, setDetecting] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { data, loading: loadingAddresses } = useQuery<MyAddressesQuery>(MY_ADDRESSES);

  const [createAddress, { loading: creating }] = useMutation<
    CreateAddressMutation,
    CreateAddressMutationVariables
  >(CREATE_ADDRESS, {
    refetchQueries: [{ query: MY_ADDRESSES }],
    onCompleted: () => {
      toast.success("Address saved successfully");
      setIsAddingAddress(false);
      setStreet("");
    },
    onError: (err) => {
      console.error("Create address error:", err);
      toast.error(err.message || "Failed to save address");
    },
  });

  const [setDefaultAddress] = useMutation<
    SetDefaultAddressMutation,
    SetDefaultAddressMutationVariables
  >(SET_DEFAULT_ADDRESS, {
    refetchQueries: [{ query: MY_ADDRESSES }],
    onCompleted: () => {
      toast.success("Default address updated");
      setIsOpen(false);
    },
    onError: (err) => {
      toast.error(err.message || "Failed to set default address");
    },
  });

  const addresses = data?.myAddresses || [];
  const currentAddress = addresses.find((a) => a.isDefault) || addresses[0] || null;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsAddingAddress(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleUseCurrentLocation = async () => {
    setDetecting(true);
    try {
      const pos = await getCurrentPosition();
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      if (!street) {
        setStreet("Current Device Location");
      }
      toast.success("GPS location detected");
    } catch {
      toast.error("Could not get GPS coordinates");
    } finally {
      setDetecting(false);
    }
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street.trim()) {
      toast.error("Please provide street address");
      return;
    }
    createAddress({
      variables: {
        input: {
          label: label.trim() || "Home",
          street: street.trim(),
          city,
          state,
          country,
          coordinates: {
            latitude: latitude || 6.5244,
            longitude: longitude || 3.3792,
          },
        },
      },
    });
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-muted/50 transition-colors focus:outline-none border-b border-transparent hover:border-muted-foreground"
        title={currentAddress ? `${currentAddress.label}: ${currentAddress.street}` : "Select address"}
      >
        <MapPin className="size-4 text-muted-foreground flex-shrink-0" />
        <span className="hidden xl:inline text-foreground truncate max-w-[120px]">
          {currentAddress ? currentAddress.street : "Select address"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-popover text-popover-foreground overflow-hidden rounded-md border shadow-md dark:shadow-xl dark:shadow-primary/20 dark:border-primary/30 z-50 max-h-96">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="font-semibold text-sm">
              {isAddingAddress ? "Add New Address" : "Saved Addresses"}
            </h3>
            <button
              onClick={() => setIsAddingAddress(!isAddingAddress)}
              className="p-1 hover:bg-muted rounded text-xs"
            >
              {isAddingAddress ? "Cancel" : <Plus className="size-4" />}
            </button>
          </div>

          {isAddingAddress ? (
            <form onSubmit={handleSaveAddress} className="p-4 space-y-3 bg-muted/20">
              <div>
                <input
                  type="text"
                  placeholder="Label (e.g. Home, Office)"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  className="w-full text-xs p-2 rounded border bg-background"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Street Address"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full text-xs p-2 rounded border bg-background"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs p-2 rounded border bg-background"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full text-xs p-2 rounded border bg-background"
                />
              </div>
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                className="w-full flex items-center justify-center gap-1.5 text-xs py-1.5 px-2 rounded border hover:bg-muted"
                disabled={detecting}
              >
                <Navigation className="size-3" />
                {detecting ? "Locating..." : "Use Current GPS Location"}
              </button>
              <button
                type="submit"
                disabled={creating}
                className="w-full bg-primary text-primary-foreground text-xs py-2 rounded font-medium"
              >
                {creating ? "Saving..." : "Save Address"}
              </button>
            </form>
          ) : (
            <div className="max-h-60 overflow-y-auto divide-y">
              {loadingAddresses && (
                <div className="p-4 flex items-center justify-center text-xs text-muted-foreground">
                  <Loader2 className="size-4 animate-spin mr-2" />
                  Loading addresses...
                </div>
              )}
              {!loadingAddresses && addresses.length === 0 && (
                <div className="p-4 text-center text-xs text-muted-foreground">
                  No saved addresses yet.
                </div>
              )}
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  onClick={() => setDefaultAddress({ variables: { addressId: addr.id } })}
                  className="p-3 hover:bg-muted/50 cursor-pointer flex items-center justify-between"
                >
                  <div className="truncate pr-2">
                    <p className="text-xs font-semibold">{addr.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{addr.street}, {addr.city}</p>
                  </div>
                  {addr.isDefault && <Check className="size-4 text-primary flex-shrink-0" />}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressSelector;
export { AddressSelector };
