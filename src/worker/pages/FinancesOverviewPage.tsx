import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { WALLET_BALANCES } from "@/graphql";
import type { WalletBalancesQuery } from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
} from "@/components";
import { Wallet, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const FinancesOverviewPage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<WalletBalancesQuery>(WALLET_BALANCES);

  const balances = data?.walletBalances;
  const available = (balances?.availableMinorUnits || 0) / 100;
  const pending = (balances?.pendingMinorUnits || 0) / 100;
  const active = (balances?.activeMinorUnits || 0) / 100;

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Finances Overview</h1>
          <p className="text-sm text-gray-500">
            Real-time view of your wallet buckets and escrow earnings
          </p>
        </div>
        <Button onClick={() => navigate("/workers/finances/payouts")}>
          Withdraw Funds
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {loading ? (
        <div className="py-12 text-center text-gray-500">
          Loading wallet balances...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                Available to Withdraw
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                ₦{available.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Cleared earnings ready for bank payout
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500" />
                Pending Settlement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">
                ₦{pending.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Held during post-completion dispute window
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-blue-600" />
                Active Escrow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                ₦{active.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Locked in ongoing errands
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FinancesOverviewPage;