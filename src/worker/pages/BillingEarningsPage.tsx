import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { WALLET_BALANCES } from "@/graphql";
import { LEDGER_HISTORY } from "@/graphql/query/wallet/ledgerHistory.query.gql";
import { Button } from "@/components/ui";
import { DollarSign, TrendingUp, ArrowUpRight, Wallet } from "lucide-react";

export default function BillingEarningsPage() {
  const { data: walletData, loading: walletLoading } = useQuery<any>(WALLET_BALANCES, {
    fetchPolicy: "cache-and-network",
  });

  const { data: ledgerData, loading: ledgerLoading } = useQuery<any>(LEDGER_HISTORY, {
    variables: { limit: 50 },
    fetchPolicy: "cache-and-network",
  });

  const balances = walletData?.walletBalances;
  const currency = balances?.currency || "NGN";
  const entries = ledgerData?.ledgerHistory?.entries || [];

  const earningsEntries = entries.filter((e: any) =>
    ["CREDIT", "ESCROW_RELEASE", "PAYOUT"].some((k) => String(e.type).toUpperCase().includes(k))
  );

  const totalEarnedMinor = earningsEntries.reduce(
    (sum: number, e: any) => sum + (Number(e.amountMinorUnits) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              Billing & Earnings
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Track your completed errand payouts, pending escrow releases, and withdrawable balance.
            </p>
          </div>
          <Link to="/worker/finances/payouts">
            <Button size="sm">
              <Wallet className="w-4 h-4 mr-1.5" />
              Withdraw Funds
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <span className="text-xs font-medium text-slate-500">Available to Withdraw</span>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {walletLoading
                ? "..."
                : `${currency} ${((balances?.availableMinorUnits || 0) / 100).toLocaleString()}`}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <span className="text-xs font-medium text-slate-500">Pending in Escrow</span>
            <p className="text-2xl font-bold text-amber-600 mt-1">
              {walletLoading
                ? "..."
                : `${currency} ${((balances?.pendingMinorUnits || 0) / 100).toLocaleString()}`}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <span className="text-xs font-medium text-slate-500">Total Recorded Earnings</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              {ledgerLoading ? "..." : `${currency} ${(totalEarnedMinor / 100).toLocaleString()}`}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">Recent Earnings & Ledger Activity</h2>
          </div>

          {ledgerLoading ? (
            <div className="p-12 text-center text-slate-500">Loading earnings history...</div>
          ) : entries.length === 0 ? (
            <div className="p-12 text-center">
              <DollarSign className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No earnings entries yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Complete assigned errands to receive escrow releases directly to your wallet.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {entries.map((entry: any) => (
                <div key={entry.id} className="px-6 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{entry.type}</p>
                      <p className="text-xs text-slate-500">
                        {new Date(entry.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {entry.currency || currency}{" "}
                    {((entry.amountMinorUnits || 0) / 100).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}