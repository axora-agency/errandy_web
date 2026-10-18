import { useQuery } from "@apollo/client/react";
import { GET_MY_ERRANDS } from "@/graphql/query/errand/myErrands.query.gql";
import { WALLET_BALANCES } from "@/graphql";
import { BarChart3, CheckCircle2, Clock, FileText, ShieldAlert } from "lucide-react";

export default function ReportsSummaryPage() {
  const { data: errandsData, loading: errandsLoading } = useQuery<any>(GET_MY_ERRANDS, {
    variables: { role: "CLIENT" },
    fetchPolicy: "cache-and-network",
  });

  const { data: walletData } = useQuery<any>(WALLET_BALANCES, {
    fetchPolicy: "cache-and-network",
  });

  const errands = errandsData?.myErrands || [];
  const completed = errands.filter((e: any) => e.status === "COMPLETED");
  const active = errands.filter((e: any) => ["OPEN", "ASSIGNED", "IN_PROGRESS"].includes(e.status));
  const disputed = errands.filter((e: any) => e.status === "DISPUTED");

  const totalCommittedMinor = errands.reduce(
    (sum: number, e: any) => sum + (Number(e.budgetAmountMinorUnits) || 0),
    0
  );
  const completedSpendMinor = completed.reduce(
    (sum: number, e: any) => sum + (Number(e.budgetAmountMinorUnits) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Client Financial & Activity Summary
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Overview of your posted errands, completion rates, and total spend.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Total Errands Posted</span>
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
              <p className="text-2xl font-bold text-slate-900 mt-2">
                {errandsLoading ? "..." : errands.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Active / In Progress</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-2xl font-bold text-amber-600 mt-2">
                {errandsLoading ? "..." : active.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Completed Errands</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-emerald-600 mt-2">
                {errandsLoading ? "..." : completed.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Disputed</span>
                <ShieldAlert className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-2xl font-bold text-red-600 mt-2">
                {errandsLoading ? "..." : disputed.length}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
              <span className="text-xs font-medium text-indigo-700">Total Budgeted Volume</span>
              <p className="text-xl font-bold text-indigo-950 mt-1">
                NGN {(totalCommittedMinor / 100).toLocaleString()}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <span className="text-xs font-medium text-emerald-700">Completed Errand Spend</span>
              <p className="text-xl font-bold text-emerald-950 mt-1">
                NGN {(completedSpendMinor / 100).toLocaleString()}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-medium text-slate-600">Wallet Available Balance</span>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {walletData?.walletBalances?.currency || "NGN"}{" "}
                {((walletData?.walletBalances?.availableMinorUnits || 0) / 100).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}