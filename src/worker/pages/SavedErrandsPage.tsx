import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { OPEN_ERRANDS } from "@/graphql";
import { useUserStore } from "@/store/userStore";
import { Button } from "@/components/ui";
import { Bookmark, ExternalLink, Clock, DollarSign, Sparkles } from "lucide-react";

const SAVED_ERRANDS_KEY = "errandy_saved_errand_ids";

export default function SavedErrandsPage() {
  const user = useUserStore((s) => s.user);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(SAVED_ERRANDS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [filterMode, setFilterMode] = useState<"ALL" | "SAVED">("ALL");

  useEffect(() => {
    try {
      localStorage.setItem(SAVED_ERRANDS_KEY, JSON.stringify(savedIds));
    } catch {
      // ignore storage errors
    }
  }, [savedIds]);

  const { data, loading } = useQuery<any>(OPEN_ERRANDS, {
    variables: {
      input: {
        requesterPartyId: user?.id || "00000000-0000-0000-0000-000000000000",
        latitude: 6.5244,
        longitude: 3.3792,
        radiusMeters: 50000,
        limit: 50,
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const openItems = data?.openErrands?.items || [];
  const displayedItems =
    filterMode === "SAVED"
      ? openItems.filter((item: any) => savedIds.includes(item.errandId))
      : openItems;

  const toggleSave = (errandId: string) => {
    setSavedIds((prev) =>
      prev.includes(errandId) ? prev.filter((id) => id !== errandId) : [...prev, errandId]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Bookmark className="w-6 h-6 text-primary" />
              Saved & Open Errands
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Bookmark interesting errands to apply later or browse open opportunities near you.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={filterMode === "ALL" ? "default" : "outline"}
              onClick={() => setFilterMode("ALL")}
            >
              All Open ({openItems.length})
            </Button>
            <Button
              size="sm"
              variant={filterMode === "SAVED" ? "default" : "outline"}
              onClick={() => setFilterMode("SAVED")}
            >
              Bookmarked ({savedIds.length})
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 border border-slate-100">
            Loading open errands...
          </div>
        ) : displayedItems.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
            <Sparkles className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h3 className="text-base font-semibold text-slate-800">
              {filterMode === "SAVED" ? "No bookmarked errands yet" : "No open errands found nearby"}
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              {filterMode === "SAVED"
                ? "Click the bookmark button on any open errand to save it to your shortlist."
                : "Check back soon as clients post new errands in your area."}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedItems.map((errand: any) => {
              const isBookmarked = savedIds.includes(errand.errandId);
              return (
                <div
                  key={errand.errandId}
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        {errand.visibility || "PUBLIC"}
                      </span>
                      {errand.RequiredTier && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                          {errand.RequiredTier}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{errand.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{errand.description}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        {errand.budgetCurrency || "NGN"}{" "}
                        {((errand.budgetAmountMinorUnits || 0) / 100).toLocaleString()}
                      </span>
                      {errand.createdAt && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(errand.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSave(errand.errandId)}
                      className={isBookmarked ? "text-primary border-primary bg-indigo-50/40" : ""}
                    >
                      <Bookmark className={`w-4 h-4 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
                      {isBookmarked ? "Saved" : "Save"}
                    </Button>
                    <Link to={`/errand/${errand.errandId}`}>
                      <Button size="sm">
                        <ExternalLink className="w-4 h-4 mr-1.5" />
                        View & Apply
                      </Button>
                    </Link>
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