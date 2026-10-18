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

const CompletedErrandsPage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery<MyErrandsQuery, MyErrandsQueryVariables>(
    GET_MY_ERRANDS,
    {
      variables: { role: "PROVIDER", status: "COMPLETED" },
    }
  );

  const errands = data?.myErrands || [];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Completed Errands</h1>
        <p className="text-sm text-gray-500">
          History of errands you have successfully completed
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Loading completed errands...
        </div>
      ) : errands.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-gray-500">
            No completed errands yet.
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
                    <Badge className="bg-green-100 text-green-800">
                      {errand.status}
                    </Badge>
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
                  variant="outline"
                  onClick={() => navigate(`/errand/${errand.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedErrandsPage;