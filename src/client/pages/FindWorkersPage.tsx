import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { toast } from "sonner";
import { SEARCH_PROVIDERS_BY_SERVICE, MY_TRUSTED_CIRCLE } from "@/graphql/query/party/searchProvidersByService.query.gql";
import { ADD_TRUSTED_MEMBER } from "@/graphql/mutation/party/marketplace.mutation.gql";
import { Input, Button } from "@/components/ui";
import { Search, Star, Shield, UserPlus, Check, Briefcase } from "lucide-react";

const POPULAR_SERVICES = ["Cleaning", "Delivery", "Moving", "Handyman", "Plumbing", "Shopping", "Tutoring", "Gardening"];

export default function FindWorkersPage() {
  const [searchTerm, setSearchTerm] = useState("Cleaning");
  const [queryService, setQueryService] = useState("Cleaning");

  const { data, loading, refetch } = useQuery<any>(SEARCH_PROVIDERS_BY_SERVICE, {
    variables: { service: queryService, limit: 30 },
    skip: !queryService.trim(),
    fetchPolicy: "cache-and-network",
  });

  const { data: trustedData, refetch: refetchTrusted } = useQuery<any>(MY_TRUSTED_CIRCLE, {
    fetchPolicy: "cache-and-network",
  });

  const [addTrustedMember, { loading: addingMember }] = useMutation<any>(ADD_TRUSTED_MEMBER);

  const providers = data?.searchProvidersByService?.providers || [];
  const trustedMembers: string[] = (trustedData?.myTrustedCircle?.members || []).map((m: any) => m.memberId);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setQueryService(searchTerm.trim());
  };

  const handleSaveWorker = async (partyId: string) => {
    try {
      await addTrustedMember({
        variables: {
          input: {
            memberPartyId: partyId,
            status: "ACTIVE",
          },
        },
      });
      toast.success("Worker added to your Trusted Circle!");
      refetchTrusted();
      refetch();
    } catch (err: any) {
      toast.error(err?.message || "Failed to add worker to Trusted Circle");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900">Find Verified Workers</h1>
          <p className="text-sm text-slate-500 mt-1">
            Search service providers by skill or service type and add trusted professionals to your circle.
          </p>

          <form onSubmit={handleSearch} className="mt-5 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by skill or service (e.g., Cleaning, Delivery, Plumbing)..."
                className="pl-10"
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search Workers"}
            </Button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400">Popular:</span>
            {POPULAR_SERVICES.map((srv) => (
              <button
                key={srv}
                type="button"
                onClick={() => {
                  setSearchTerm(srv);
                  setQueryService(srv);
                }}
                className={`text-xs px-3 py-1 rounded-full border transition ${
                  queryService.toLowerCase() === srv.toLowerCase()
                    ? "bg-primary text-white border-primary"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {srv}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 border border-slate-100">
            Searching for "{queryService}" providers...
          </div>
        ) : providers.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No providers found for "{queryService}"</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try searching for another skill or post a public errand so nearby workers can apply directly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {providers.map((provider: any) => {
              const isSaved = trustedMembers.includes(provider.partyId);
              return (
                <div
                  key={provider.partyId}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                          <Shield className="w-3 h-3" />
                          {provider.tier || "TIER_1"}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 mt-2">
                          Provider #{provider.partyId.slice(0, 8)}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 text-sm font-semibold">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span>{Number(provider.avgRatingCached || 0).toFixed(1)}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                      {provider.bio || "Experienced service provider available for errands and specialized tasks."}
                    </p>

                    {provider.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {provider.skills.map((skill: string) => (
                          <span
                            key={skill}
                            className="text-xs px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <span className="font-semibold text-slate-800">{provider.completedErrandsCount || 0}</span> jobs done
                      {" · "}
                      <span className="font-semibold text-slate-800">{provider.trustedByCount || 0}</span> trusted circles
                    </div>
                    {isSaved ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                        <Check className="w-4 h-4" /> Saved
                      </span>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={addingMember}
                        onClick={() => handleSaveWorker(provider.partyId)}
                        className="h-8 text-xs"
                      >
                        <UserPlus className="w-3.5 h-3.5 mr-1" />
                        Save to Circle
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}