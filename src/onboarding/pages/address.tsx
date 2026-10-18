import { useState } from "react";
import { useOnBoardingStore } from "@/store/onBoardingStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ADDRESS } from "@/graphql";
import type { CreateAddressMutation, CreateAddressMutationVariables } from "@/gql/graphql";
import { getCurrentPosition } from "@/utils";
import { MapPin, Navigation, CheckCircle2 } from "lucide-react";

export default function OnboardingAddressPage() {
  const [label, setLabel] = useState("Home");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("Lagos");
  const [state, setState] = useState("Lagos");
  const [country] = useState("Nigeria");
  const [latitude, setLatitude] = useState<number | null>(6.5244);
  const [longitude, setLongitude] = useState<number | null>(3.3792);
  const [locating, setLocating] = useState(false);

  const setSelectedAddress = useOnBoardingStore((s) => s.setSelectedAddress);
  const navigate = useNavigate();

  const [createAddress, { loading: saving }] = useMutation<
    CreateAddressMutation,
    CreateAddressMutationVariables
  >(CREATE_ADDRESS, {
    onCompleted() {
      toast.success("Address saved successfully");
      navigate("/onboarding/completed");
    },
    onError(err) {
      console.error("Failed to save address:", err);
      toast.error(err.message || "Failed to save address");
    },
  });

  const handleUseCurrentLocation = async () => {
    setLocating(true);
    try {
      const pos = await getCurrentPosition();
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      if (!street) {
        setStreet("Current Device Location");
      }
      setSelectedAddress({
        address: street || "Current Device Location",
        label,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      toast.success("Location detected!");
    } catch (err) {
      console.error(err);
      toast.error("Could not get your location. Please enter manually.");
    } finally {
      setLocating(false);
    }
  };

  const handleSaveAndContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!street.trim()) {
      toast.error("Please enter your street address");
      return;
    }

    const lat = latitude || 6.5244;
    const lng = longitude || 3.3792;

    setSelectedAddress({
      address: street,
      label,
      latitude: lat,
      longitude: lng,
    });

    createAddress({
      variables: {
        input: {
          label,
          street,
          city,
          state,
          country,
          coordinates: {
            latitude: lat,
            longitude: lng,
          },
        },
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Where are you located?</h1>
        <p className="text-muted-foreground">
          Enter your primary operating address to find nearby errands and jobs.
        </p>
      </div>

      <form onSubmit={handleSaveAndContinue} className="space-y-5 bg-card p-6 rounded-2xl border border-border shadow-sm">
        <div>
          <label className="text-sm font-medium">Address Label</label>
          <div className="flex gap-2 mt-1.5">
            {["Home", "Work", "Shop", "Office"].map((tag) => (
              <Button
                key={tag}
                type="button"
                variant={label === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setLabel(tag)}
              >
                {label === tag && <CheckCircle2 className="w-3.5 h-3.5 mr-1" />}
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Street Address</label>
          <div className="relative mt-1.5">
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
                setSelectedAddress({
                  address: e.target.value,
                  label,
                  latitude,
                  longitude,
                });
              }}
              placeholder="e.g. 15 Admiralty Way, Lekki Phase 1"
              className="pl-9"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">City</label>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <label className="text-sm font-medium">State</label>
            <Input
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1.5"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            className="w-full gap-2"
            onClick={handleUseCurrentLocation}
            disabled={locating}
          >
            <Navigation className="w-4 h-4" />
            {locating ? "Detecting location..." : "Use Current GPS Location"}
          </Button>
        </div>

        <Button type="submit" className="w-full" disabled={saving}>
          {saving ? "Saving Address..." : "Save Address & Complete"}
        </Button>
      </form>
    </div>
  );
}
