import { useQuery } from "@apollo/client/react";
import { GET_MY_ERRANDS } from "@/graphql/query/errand/myErrands.query.gql";
import { WALLET_BALANCES } from "@/graphql";
import { LEDGER_HISTORY } from "@/graphql/query/wallet/ledgerHistory.query.gql";
import { BarChart3, CheckCircle2, Clock, Wallet } from "lucide-react";

export default function FinancesReportsPage() {
  const { data: errandsData, loading: errandsLoading } = useQuery<any>(GET_MY_ERRANDS, {
    variables: { role: "PROVIDER" },
    fetchPolicy: "cache-and-network",
  });

  const { data: walletData } = useQuery<any>(WALLET_BALANCES, {
    fetchPolicy: "cache-and-network",
  });

  const { data: ledgerData } = useQuery<any>(LEDGER_HISTORY, {
    variables: { limit: 100 },
    fetchPolicy: "cache-and-network",
  });

  const errands = errandsData?.myErrands || [];
  const completed = errands.filter((e: any) => e.status === "COMPLETED");
  const inProgress = errands.filter((e: any) => ["ASSIGNED", "IN_PROGRESS"].includes(e.status));
  const entries = ledgerData?.ledgerHistory?.entries || [];
  const balances = walletData?.walletBalances;

  const completedValueMinor = completed.reduce(
    (sum: number, e: any) => sum + (Number(e.budgetAmountMinorUnits) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Worker Financial Reports
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Performance metrics, completed errand volume, and ledger summary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Completed Jobs</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-2xl font-bold text-emerald-600 mt-2">
                {errandsLoading ? "..." : completed.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Active Assignments</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-2xl font-bold text-amber-600 mt-2">
                {errandsLoading ? "..." : inProgress.length}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Completed Job Volume</span>
                <Wallet className="w-4 h-4 text-indigo-500" />
              </div>
              <p className="text-xl font-bold text-slate-900 mt-2">
                NGN {(completedValueMinor / 100).toLocaleString()}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Available Wallet</span>
                <Wallet className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-xl font-bold text-emerald-600 mt-2">
                {balances?.currency || "NGN"}{" "}
                {((balances?.availableMinorUnits || 0) / 100).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h2 className="text-base font-bold text-slate-900 mb-3">
            Ledger Statement Summary ({entries.length} transactions)
          </h2>
          {entries.length === 0 ? (
            <p className="text-sm text-slate-500">No ledger transactions recorded in this period.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs text-slate-500">
                    <th className="py-2">Date</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Reference</th>
                    <th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {entries.map((entry: any) => (
                    <tr key={entry.id}>
                      <td className="py-3 text-xs text-slate-500">
                        {new Date(entry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 font-medium text-slate-900">{entry.type}</td>
                      <td className="py-3 text-xs font-mono text-slate-500">
                        {entry.gatewayReference || entry.escrowId || entry.id.slice(0, 8)}
                      </td>
                      <td className="py-3 text-right font-semibold text-slate-900">
                        {entry.currency || "NGN"}{" "}
                        {((entry.amountMinorUnits || 0) / 100).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}