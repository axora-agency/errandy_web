import { useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { GET_CLIENT_DASHBOARD } from "@/graphql";
import {
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Layers,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

type DashboardErrand = {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt?: string | null;
  completionDeadline?: string | null;
  service?: { name?: string | null } | null;
};

type ClientDashboardPayload = {
  activeErrandsCount: number;
  draftErrandsCount: number;
  totalErrandsCount: number;
  completedErrandsCount: number;
  totalSpent: number;
  walletBalance: number;
  marketTrends: string[];
  activeErrands: DashboardErrand[];
  draftErrands: DashboardErrand[];
};

type ClientDashboardQuery = {
  clientDashboard: ClientDashboardPayload;
};

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
      return Clock;
    case "COMPLETED":
      return CheckCircle2;
    case "DRAFT":
      return FileText;
    default:
      return Clock;
  }
};

const formatCurrency = (value: number) => `NGN ${value.toLocaleString()}`;

const formatRelativeTime = (isoDate?: string | null) => {
  if (!isoDate) return "Unknown time";
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) return "Unknown time";
  return formatDistanceToNow(parsed, { addSuffix: true });
};

const getErrandTimestamp = (errand: DashboardErrand) => {
  const raw = errand.updatedAt ?? errand.createdAt;
  if (!raw) return 0;
  const parsed = new Date(raw).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
};

export default function DashboardPage() {
  const { data: session } = auth.useSession();
  const { data, loading, error, refetch } = useQuery<ClientDashboardQuery>(
    GET_CLIENT_DASHBOARD,
    { fetchPolicy: "cache-and-network" },
  );

  const dashboard = data?.clientDashboard;
  const activeErrands = dashboard?.activeErrands ?? [];
  const draftErrands = dashboard?.draftErrands ?? [];
  const marketTrends = dashboard?.marketTrends ?? [];
  const recentErrands = [...activeErrands, ...draftErrands]
    .sort((a, b) => getErrandTimestamp(b) - getErrandTimestamp(a))
    .slice(0, 3);

  const dashboardLoading = loading && !dashboard;
  const dashboardError = Boolean(error) && !dashboard;

  return (
    <div className="min-h-screen ">
      {/* Main Content */}
      <main className="">
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

          {dashboardLoading && (
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading dashboard data...
            </div>
          )}

          {dashboardError && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Unable to load dashboard data.
              <button
                type="button"
                className="ml-2 underline"
                onClick={() => refetch()}
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
                    <p className="text-sm font-medium text-gray-900">Member Since</p>
                    <p className="text-sm text-gray-600">January 2024</p>
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
                <div className="text-2xl font-bold">
                  {dashboard?.activeErrandsCount ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">In progress</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Draft Errands</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {dashboard?.draftErrandsCount ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">Awaiting publish</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {dashboard?.completedErrandsCount ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">Finished errands</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Errands</CardTitle>
                <Layers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {dashboard?.totalErrandsCount ?? 0}
                </div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
          </div>

          {/* Financials and Trends */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatCurrency(dashboard?.totalSpent ?? 0)}
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
                  {formatCurrency(dashboard?.walletBalance ?? 0)}
                </div>
                <p className="text-xs text-muted-foreground">Available balance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Trends</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {marketTrends.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {marketTrends.map((trend) => (
                      <span
                        key={trend}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                      >
                        {trend}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">No trends yet</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Plus className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Post Errand</p>
                    <p className="text-sm text-gray-600">Create a new task</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Messages</p>
                    <p className="text-sm text-gray-600">View conversations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Wallet</p>
                    <p className="text-sm text-gray-600">Manage funds</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">History</p>
                    <p className="text-sm text-gray-600">Past errands</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest errands and interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentErrands.length > 0 ? (
                <div className="space-y-4">
                  {recentErrands.map((errand) => {
                    const statusStyle = getStatusStyle(errand.status);
                    const ActivityIcon = getActivityIcon(errand.status);
                    return (
                      <div
                        key={errand.id}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${statusStyle.iconBg}`}
                        >
                          <ActivityIcon
                            className={`h-5 w-5 ${statusStyle.iconColor}`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">
                            {errand.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatRelativeTime(
                              errand.updatedAt ?? errand.createdAt,
                            )}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${statusStyle.badge}`}
                        >
                          {statusStyle.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-gray-200 p-6 text-sm text-gray-500">
                  No recent errands yet.
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
