import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { GET_MY_ERRANDS, WALLET_BALANCES } from "@/graphql";
import type { MyErrandsQuery, WalletBalancesQuery, ErrandDetailType } from "@/gql/graphql";
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  Loader2,
  Mail,
  MapPin,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

type StatusStyle = {
  label: string;
  badge: string;
  iconBg: string;
  iconColor: string;
};

const statusStyles: Record<string, StatusStyle> = {
  OPEN: {
    label: "Open",
    badge: "bg-emerald-100 text-emerald-800",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  IN_PROGRESS: {
    label: "In Progress",
    badge: "bg-blue-100 text-blue-800",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  ASSIGNED: {
    label: "Assigned",
    badge: "bg-purple-100 text-purple-800",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  COMPLETED: {
    label: "Completed",
    badge: "bg-green-100 text-green-800",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  DRAFT: {
    label: "Draft",
    badge: "bg-gray-100 text-gray-700",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
  CANCELLED: {
    label: "Cancelled",
    badge: "bg-red-100 text-red-800",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
};

const getStatusStyle = (status?: string | null): StatusStyle =>
  statusStyles[status ?? ""] ?? {
    label: status ?? "Unknown",
    badge: "bg-gray-100 text-gray-700",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  };

const getActivityIcon = (status?: string | null) => {
  switch (status) {
    case "OPEN":
      return MapPin;
    case "IN_PROGRESS":
    case "ASSIGNED":
      return Clock;
    case "COMPLETED":
      return CheckCircle2;
    default:
      return FileText;
  }
};

const formatCurrency = (value: number) => `NGN ${value.toLocaleString()}`;

const formatRelativeTime = (isoDate?: string | null) => {
  if (!isoDate) return "Unknown time";
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return "Unknown time";
  return formatDistanceToNow(parsed, { addSuffix: true });
};

export default function DashboardPage() {
  const { data: session } = auth.useSession();

  const {
    data: errandsData,
    loading: errandsLoading,
    error: errandsError,
    refetch: refetchErrands,
  } = useQuery<MyErrandsQuery>(GET_MY_ERRANDS, {
    variables: { role: "CLIENT" },
    fetchPolicy: "cache-and-network",
  });

  const {
    data: walletData,
    loading: walletLoading,
  } = useQuery<WalletBalancesQuery>(WALLET_BALANCES, {
    fetchPolicy: "cache-and-network",
  });

  const errands: ErrandDetailType[] = errandsData?.myErrands || [];
  const activeErrands = errands.filter((e) => e.status === "IN_PROGRESS" || e.status === "ASSIGNED");
  const openErrands = errands.filter((e) => e.status === "OPEN");
  const completedErrands = errands.filter((e) => e.status === "COMPLETED");

  const totalSpent = completedErrands.reduce(
    (sum, e) => sum + (e.budget?.amountMinorUnits || 0) / 100,
    0
  );
  const walletBalance = (walletData?.walletBalances?.availableMinorUnits || 0) / 100;

  const recentErrands = [...errands].slice(0, 5);

  const isLoading = (errandsLoading || walletLoading) && errands.length === 0;

  return (
    <div className="min-h-screen">
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {session?.user?.name || "User"}!
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your errands today.
            </p>
          </div>

          {isLoading && (
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading dashboard data...
            </div>
          )}

          {errandsError && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Unable to load dashboard data.
              <button
                type="button"
                className="ml-2 underline"
                onClick={() => refetchErrands()}
              >
                Retry
              </button>
            </div>
          )}

          {/* User Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Account Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{session?.user?.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Member Status</p>
                    <p className="text-sm text-gray-600">Verified User</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Errands</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeErrands.length}</div>
                <p className="text-xs text-muted-foreground">In progress & assigned</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Errands</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{openErrands.length}</div>
                <p className="text-xs text-muted-foreground">Awaiting workers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{completedErrands.length}</div>
                <p className="text-xs text-muted-foreground">Finished errands</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Errands</CardTitle>
                <Layers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{errands.length}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>

          {/* Financials */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(totalSpent)}
                </div>
                <p className="text-xs text-muted-foreground">Completed errands</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(walletBalance)}
                </div>
                <p className="text-xs text-muted-foreground">Available balance</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Errands Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Errands</CardTitle>
            </CardHeader>
            <CardContent>
              {recentErrands.length === 0 ? (
                <p className="text-sm text-muted-foreground py-4 text-center">
                  No recent errands found. Click "Create Errand" to get started.
                </p>
              ) : (
                <div className="divide-y divide-border">
                  {recentErrands.map((errand) => {
                    const style = getStatusStyle(errand.status);
                    const Icon = getActivityIcon(errand.status);
                    return (
                      <div
                        key={errand.id}
                        className="py-3 flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${style.iconBg}`}>
                            <Icon className={`h-4 w-4 ${style.iconColor}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {errand.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatRelativeTime(errand.createdAt)}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}
                        >
                          {style.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
