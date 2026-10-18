import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { MY_APPLICATIONS } from "@/graphql";
import type { MyApplicationsQuery } from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components";

const BidsPage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<MyApplicationsQuery>(MY_APPLICATIONS);
  const applications = data?.myApplications || [];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Applications</h1>
        <p className="text-sm text-gray-500">
          Track all your submitted applications and proposals
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Loading applications...
        </div>
      ) : applications.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-gray-500">
              You haven't applied to any errands yet.
            </p>
            <Button onClick={() => navigate("/workers/find-work")}>
              Browse Open Errands
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {applications.map((app) => (
            <Card key={app.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-base">
                      Errand #{app.errandId.slice(0, 8)}
                    </CardTitle>
                    <Badge variant="secondary">{app.status}</Badge>
                  </div>
                  <span className="font-bold text-green-600">
                    ₦{(app.proposedAmountMinorUnits / 100).toLocaleString()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {app.proposal}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/errand/${app.errandId}`)}
                >
                  View Errand
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BidsPage;