import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_MY_ERRANDS, PUBLISH_ERRAND } from "@/graphql";
import type {
  MyErrandsQuery,
  MyErrandsQueryVariables,
  PublishErrandMutation,
  PublishErrandMutationVariables,
} from "@/gql/graphql";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const JobPostsPage = () => {
  const navigate = useNavigate();
  const { data, loading, refetch } = useQuery<
    MyErrandsQuery,
    MyErrandsQueryVariables
  >(GET_MY_ERRANDS, {
    variables: { role: "CLIENT" },
  });

  const [publishErrand, { loading: publishing }] = useMutation<
    PublishErrandMutation,
    PublishErrandMutationVariables
  >(PUBLISH_ERRAND, {
    onCompleted: () => {
      toast.success("Errand published!");
      refetch();
    },
    onError: (err) => toast.error(err.message),
  });

  const errands = data?.myErrands || [];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">My Errand Posts</h1>
          <p className="text-sm text-gray-500">
            Manage your posted errands, drafts, and ongoing assignments
          </p>
        </div>
        <Button onClick={() => navigate("/client/post-job")}>
          <Plus className="h-4 w-4 mr-2" />
          Post New Errand
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          Loading your errands...
        </div>
      ) : errands.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center space-y-3">
            <p className="text-gray-500">You haven't posted any errands yet.</p>
            <Button onClick={() => navigate("/client/post-job")}>
              Post Your First Errand
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {errands.map((errand) => {
            const amount = (errand.budget?.amountMinorUnits || 0) / 100;
            return (
              <Card key={errand.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg">{errand.title}</CardTitle>
                      <Badge variant="secondary">{errand.status}</Badge>
                    </div>
                    <span className="font-bold text-green-600">
                      ₦{amount.toLocaleString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between pt-2">
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {errand.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {errand.status === "DRAFT" && (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={publishing}
                        onClick={() =>
                          publishErrand({ variables: { errandId: errand.id } })
                        }
                      >
                        Publish
                      </Button>
                    )}
                    <Button
                      size="sm"
                      onClick={() => navigate(`/errand/${errand.id}`)}
                    >
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default JobPostsPage;