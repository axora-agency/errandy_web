import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_MY_ERRANDS } from "@/graphql";
import type { MyErrandsQuery, MyErrandsQueryVariables } from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components";

const InProgressErrandsPage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<MyErrandsQuery, MyErrandsQueryVariables>(
    GET_MY_ERRANDS,
    {
      variables: { role: "PROVIDER", status: "IN_PROGRESS" },
    }
  );

  const errands = data?.myErrands || [];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">In-Progress Errands</h1>
        <p className="text-sm text-gray-500">
          Manage your active errands and submit completion proof
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Loading active errands...
        </div>
      ) : errands.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-gray-500">
            No errands currently in progress.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {errands.map((errand) => (
            <Card key={errand.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{errand.title}</CardTitle>
                    <Badge variant="secondary">{errand.status}</Badge>
                  </div>
                  <span className="font-bold text-green-600">
                    ₦{((errand.budget?.amountMinorUnits || 0) / 100).toLocaleString()}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-600 line-clamp-1">
                  {errand.description}
                </p>
                <Button
                  size="sm"
                  onClick={() => navigate(`/errand/${errand.id}`)}
                >
                  Open Execution View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default InProgressErrandsPage;