import { useQuery } from "@apollo/client/react";
import { LEDGER_HISTORY } from "@/graphql/query/wallet/ledgerHistory.query.gql";
import { WALLET_BALANCES } from "@/graphql";
import { ArrowDownLeft, ArrowUpRight, Wallet, Receipt } from "lucide-react";

export default function TransactionsPage() {
  const { data: walletData, loading: walletLoading } = useQuery<any>(WALLET_BALANCES, {
    fetchPolicy: "cache-and-network",
  });

  const { data: ledgerData, loading: ledgerLoading } = useQuery<any>(LEDGER_HISTORY, {
    variables: { limit: 50 },
    fetchPolicy: "cache-and-network",
  });

  const balances = walletData?.walletBalances;
  const entries = ledgerData?.ledgerHistory?.entries || [];
  const currency = balances?.currency || "NGN";

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900">Transaction History</h1>
          <p className="text-sm text-slate-500 mt-1">
            View all escrow payments, refunds, and wallet ledger entries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">Available Balance</span>
              <p className="text-xl font-bold text-slate-900 mt-1">
                {walletLoading
                  ? "..."
                  : `${currency} ${((balances?.availableMinorUnits || 0) / 100).toLocaleString()}`}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">Locked in Escrow / Pending</span>
              <p className="text-xl font-bold text-amber-600 mt-1">
                {walletLoading
                  ? "..."
                  : `${currency} ${((balances?.pendingMinorUnits || 0) / 100).toLocaleString()}`}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs text-slate-500 font-medium">Total Transactions</span>
              <p className="text-xl font-bold text-slate-900 mt-1">{entries.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Receipt className="w-4 h-4 text-slate-500" />
              Ledger Entries
            </h2>
          </div>

          {ledgerLoading ? (
            <div className="p-12 text-center text-slate-500">Loading ledger history...</div>
          ) : entries.length === 0 ? (
            <div className="p-12 text-center">
              <Wallet className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No transactions recorded yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Escrow funding, releases, and wallet transfers will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {entries.map((entry: any) => {
                const isCredit = ["CREDIT", "ESCROW_RELEASE", "REFUND", "DEPOSIT"].some((t) =>
                  String(entry.type).toUpperCase().includes(t)
                );
                return (
                  <div key={entry.id} className="px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          isCredit ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {isCredit ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{entry.type}</p>
                        <p className="text-xs text-slate-500">
                          {entry.gatewayReference
                            ? `Ref: ${entry.gatewayReference}`
                            : entry.escrowId
                            ? `Escrow: #${entry.escrowId.slice(0, 8)}`
                            : `ID: #${entry.id.slice(0, 8)}`}
                          {" · "}
                          {new Date(entry.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`text-sm font-bold ${
                        isCredit ? "text-emerald-600" : "text-slate-900"
                      }`}
                    >
                      {isCredit ? "+" : "-"}
                      {entry.currency || "NGN"} {((entry.amountMinorUnits || 0) / 100).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}