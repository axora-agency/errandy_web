import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { toast } from "sonner";
import {
  SEARCH_SERVICES,
  CATEGORY_TREE,
  MY_VERIFICATION_PROFILE,
  SUBMIT_VERIFICATION_STEP,
} from "@/graphql";
import {
  LIST_SERVICE,
  DEACTIVATE_SERVICE,
  REQUEST_TIER_UPGRADE,
} from "@/graphql/mutation/party/marketplace.mutation.gql";
import { useUserStore } from "@/store/userStore";
import { Button, Input, Textarea } from "@/components/ui";
import { Store, Plus, Trash2, ShieldCheck, Upload, Sparkles } from "lucide-react";

const DEFAULT_MARKET_ID = "00000000-0000-0000-0000-000000000001";

export default function ShopsPage() {
  const user = useUserStore((s) => s.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [priceAmount, setPriceAmount] = useState("");

  // Verification state
  const [stepType, setStepType] = useState("GOVERNMENT_ID");
  const [docUrl, setDocUrl] = useState("");
  const [targetTier, setTargetTier] = useState("TIER_2");

  const { data: catData } = useQuery<any>(CATEGORY_TREE);
  const { data: servicesData, loading: servicesLoading, refetch: refetchServices } = useQuery<any>(
    SEARCH_SERVICES,
    {
      variables: {
        marketId: (user as any)?.marketId || DEFAULT_MARKET_ID,
        limit: 50,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const { data: verifData, refetch: refetchVerif } = useQuery<any>(MY_VERIFICATION_PROFILE, {
    fetchPolicy: "cache-and-network",
  });

  const [listService, { loading: listing }] = useMutation<any>(LIST_SERVICE);
  const [deactivateService, { loading: deactivating }] = useMutation<any>(DEACTIVATE_SERVICE);
  const [submitVerificationStep, { loading: submittingStep }] = useMutation<any>(
    SUBMIT_VERIFICATION_STEP
  );
  const [requestTierUpgrade, { loading: upgradingTier }] = useMutation<any>(REQUEST_TIER_UPGRADE);

  const categories = catData?.categoryTree || [];
  const allServices = servicesData?.searchServices || [];
  const myServices = user?.id
    ? allServices.filter((s: any) => s.listedById === user.id)
    : allServices;

  const verifProfile = verifData?.myVerificationProfile;

  const handleCreateService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !priceAmount) {
      toast.error("Please fill in service title and price");
      return;
    }
    try {
      await listService({
        variables: {
          input: {
            title: title.trim(),
            description: description.trim() || title.trim(),
            categoryId: categoryId || categories[0]?.id || DEFAULT_MARKET_ID,
            listedById: user?.id || "",
            price: {
              amountMinorUnits: Math.round(Number(priceAmount) * 100),
              currency: "NGN",
            },
          },
        },
      });
      toast.success("Service listed in your shop!");
      setTitle("");
      setDescription("");
      setPriceAmount("");
      refetchServices();
    } catch (err: any) {
      toast.error(err?.message || "Failed to list service");
    }
  };

  const handleDeactivate = async (serviceId: string) => {
    try {
      await deactivateService({ variables: { serviceId } });
      toast.success("Service removed from catalog");
      refetchServices();
    } catch (err: any) {
      toast.error(err?.message || "Failed to deactivate service");
    }
  };

  const handleSubmitVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!docUrl.trim()) {
      toast.error("Please provide a document URL");
      return;
    }
    try {
      await submitVerificationStep({
        variables: {
          input: {
            stepType,
            documentUrls: [docUrl.trim()],
          },
        },
      });
      toast.success("Verification document submitted for review!");
      setDocUrl("");
      refetchVerif();
    } catch (err: any) {
      toast.error(err?.message || "Failed to submit verification step");
    }
  };

  const handleTierUpgrade = async () => {
    if (!user?.id) return;
    try {
      await requestTierUpgrade({
        variables: {
          partyId: user.id,
          targetTier,
        },
      });
      toast.success(`Requested upgrade to ${targetTier}`);
      refetchVerif();
    } catch (err: any) {
      toast.error(err?.message || "Tier upgrade request failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Store className="w-6 h-6 text-primary" />
            My Service Shop & Verification
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Publish fixed-price services to the marketplace catalog and manage your provider verification tier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Create Service + Verification */}
          <div className="space-y-6">
            <form
              onSubmit={handleCreateService}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4"
            >
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Plus className="w-4 h-4 text-primary" />
                List a New Service
              </h2>

              <div>
                <label className="text-xs font-medium text-slate-700">Service Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Deep Home Cleaning (3 Bedrooms)"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700">Category</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700">Price (NGN)</label>
                <Input
                  type="number"
                  min="100"
                  value={priceAmount}
                  onChange={(e) => setPriceAmount(e.target.value)}
                  placeholder="15000"
                  className="mt-1"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700">Description</label>
                <Textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what is included in this service package..."
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full" disabled={listing}>
                {listing ? "Listing Service..." : "Publish Service"}
              </Button>
            </form>

            {/* Verification & Tier Upgrade Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Verification & Tier
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                  {verifProfile?.overallStatus || "UNVERIFIED"}
                </span>
              </div>

              {verifProfile?.steps?.length > 0 && (
                <div className="space-y-2">
                  {verifProfile.steps.map((st: any) => (
                    <div
                      key={st.stepType}
                      className="text-xs flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100"
                    >
                      <span className="font-medium text-slate-700">{st.stepType}</span>
                      <span className="font-semibold text-slate-900">{st.status}</span>
                    </div>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmitVerification} className="space-y-3 pt-2 border-t border-slate-100">
                <div>
                  <label className="text-xs font-medium text-slate-700">Verification Step</label>
                  <select
                    value={stepType}
                    onChange={(e) => setStepType(e.target.value)}
                    className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-xs bg-white"
                  >
                    <option value="GOVERNMENT_ID">Government ID (NIN / Passport)</option>
                    <option value="ADDRESS_PROOF">Proof of Address</option>
                    <option value="CERTIFICATION">Trade Certification</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700">Document Link / URL</label>
                  <Input
                    value={docUrl}
                    onChange={(e) => setDocUrl(e.target.value)}
                    placeholder="https://..."
                    className="mt-1 text-xs"
                  />
                </div>

                <Button type="submit" variant="outline" size="sm" className="w-full" disabled={submittingStep}>
                  <Upload className="w-3.5 h-3.5 mr-1.5" />
                  {submittingStep ? "Submitting..." : "Submit Verification Document"}
                </Button>
              </form>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <select
                  value={targetTier}
                  onChange={(e) => setTargetTier(e.target.value)}
                  className="flex-1 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs bg-white"
                >
                  <option value="TIER_2">Upgrade to TIER_2</option>
                  <option value="TIER_3">Upgrade to TIER_3</option>
                </select>
                <Button size="sm" onClick={handleTierUpgrade} disabled={upgradingTier}>
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Upgrade
                </Button>
              </div>
            </div>
          </div>

          {/* Right column: Listed Services */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-base font-bold text-slate-900 mb-4">
                Active Marketplace Services ({myServices.length})
              </h2>

              {servicesLoading ? (
                <div className="p-8 text-center text-slate-500 text-sm">Loading services...</div>
              ) : myServices.length === 0 ? (
                <div className="p-10 text-center border border-dashed border-slate-200 rounded-xl">
                  <Store className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">No services listed yet</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Use the form on the left to add fixed-price service offerings to your profile.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myServices.map((srv: any) => (
                    <div
                      key={srv.id}
                      className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-slate-900 text-sm">{srv.title}</h3>
                          <span className="text-xs font-bold text-primary whitespace-nowrap">
                            {srv.price?.currency || "NGN"}{" "}
                            {((srv.price?.amountMinorUnits || 0) / 100).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">{srv.description}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-mono">#{srv.id.slice(0, 8)}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={deactivating}
                          onClick={() => handleDeactivate(srv.id)}
                          className="h-7 text-xs text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Deactivate
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}