import { useQuery } from "@apollo/client/react";
import { LEDGER_HISTORY } from "@/graphql/query/wallet/ledgerHistory.query.gql";
import { GET_MY_ERRANDS } from "@/graphql/query/errand/myErrands.query.gql";
import { Button } from "@/components/ui";
import { FileText, Printer } from "lucide-react";

export default function InvoicesPage() {
  const { data: errandsData, loading: errandsLoading } = useQuery<any>(GET_MY_ERRANDS, {
    variables: { role: "PROVIDER" },
    fetchPolicy: "cache-and-network",
  });

  const { data: ledgerData, loading: ledgerLoading } = useQuery<any>(LEDGER_HISTORY, {
    variables: { limit: 50 },
    fetchPolicy: "cache-and-network",
  });

  const completedErrands = (errandsData?.myErrands || []).filter(
    (e: any) => e.status === "COMPLETED"
  );
  const ledgerEntries = ledgerData?.ledgerHistory?.entries || [];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Invoices & Payment Receipts
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Download or print official payment receipts for completed errands and ledger settlements.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-1.5" />
            Print Statement
          </Button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-900">
              Completed Errand Invoices ({completedErrands.length})
            </h2>
          </div>

          {errandsLoading || ledgerLoading ? (
            <div className="p-12 text-center text-slate-500">Loading invoices...</div>
          ) : completedErrands.length === 0 && ledgerEntries.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No invoices generated yet</p>
              <p className="text-xs text-slate-500 mt-1">
                Invoices are automatically generated when an errand is marked completed and escrow funds are released.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {completedErrands.map((errand: any) => (
                <div
                  key={errand.id}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500">
                        INV-{errand.id.slice(0, 8).toUpperCase()}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                        PAID
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">{errand.title}</h3>
                    <p className="text-xs text-slate-500">
                      Issued on {new Date(errand.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold text-slate-900">
                      {errand.budgetCurrency || "NGN"}{" "}
                      {((errand.budgetAmountMinorUnits || 0) / 100).toLocaleString()}
                    </span>
                    <Button variant="outline" size="sm" onClick={() => window.print()}>
                      <Printer className="w-3.5 h-3.5 mr-1" />
                      Receipt
                    </Button>
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