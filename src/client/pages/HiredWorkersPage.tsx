import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { GET_MY_ERRANDS } from "@/graphql/query/errand/myErrands.query.gql";
import { Button } from "@/components/ui";
import { Briefcase, CheckCircle2, Clock, ExternalLink, MessageSquare } from "lucide-react";

export default function HiredWorkersPage() {
  const { data, loading } = useQuery<any>(GET_MY_ERRANDS, {
    variables: { role: "CLIENT" },
    fetchPolicy: "cache-and-network",
  });

  const allErrands = data?.myErrands || [];
  const hiredErrands = allErrands.filter(
    (e: any) =>
      e.assignedProviderId ||
      ["ASSIGNED", "IN_PROGRESS", "COMPLETED", "DISPUTED"].includes(e.status)
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900">Hired Workers & Active Assignments</h1>
          <p className="text-sm text-slate-500 mt-1">
            Track all providers currently assigned to or who have completed your errands.
          </p>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl p-12 text-center text-slate-500 border border-slate-100">
            Loading hired workers and assignments...
          </div>
        ) : hiredErrands.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-slate-100">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-800">No hired workers yet</h3>
            <p className="text-sm text-slate-500 mt-1">
              Once you accept an application on one of your job posts, your assigned provider will appear here.
            </p>
            <Link to="/client/job-posts" className="inline-block mt-4">
              <Button size="sm">View My Job Posts</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {hiredErrands.map((errand: any) => (
              <div
                key={errand.id}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      {errand.status}
                    </span>
                    <span className="text-xs text-slate-400">
                      Provider:{" "}
                      <strong className="text-slate-700">
                        {errand.assignedProviderId ? `#${errand.assignedProviderId.slice(0, 8)}` : "Assigned"}
                      </strong>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{errand.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-1">{errand.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="font-semibold text-slate-800">
                      {errand.budgetCurrency || "NGN"}{" "}
                      {((errand.budgetAmountMinorUnits || 0) / 100).toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      {errand.status === "COMPLETED" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                      )}
                      {new Date(errand.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link to="/messages">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-1.5" />
                      Message
                    </Button>
                  </Link>
                  <Link to={`/errand/${errand.id}`}>
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Manage Errand
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}