import React from "react";
import
{
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components";
import { Star, MapPin, Bookmark } from "lucide-react";
import type {
  ErrandWithClient,
  SaveErrandMutation,
  SaveErrandMutationVariables,
} from "@/gql/graphql";
import { formatDistanceToNow } from "date-fns";
import { useMutation } from "@apollo/client";
import { SAVE_ERRAND_MUTATION } from "@/graphql/mutations/errands/save-errand";
import { useUserStore } from "@/store/userStore";

interface ErrandCardBlockProps
{
  errand: ErrandWithClient;
}

const getStatusColor = (status: string) =>
{
  switch (status)
  {
    case "OPEN":
      return "bg-green-100 text-green-800";
    case "IN_PROGRESS":
      return "bg-blue-100 text-blue-800";
    case "COMPLETED":
      return "bg-gray-100 text-gray-800";
    case "CANCELLED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const renderStars = (rating: number | null | undefined) =>
{
  if (!rating) return null;
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < Math.floor(rating)
        ? "fill-yellow-400 text-yellow-400"
        : "text-gray-300"
        }`}
    />
  ));
};

const formatBudget = (errand: ErrandWithClient) =>
{
  if (errand.pricingType === "FIXED" && errand.price)
  {
    return `₦${errand.price.toLocaleString()}`;
  }
  if (errand.pricingType === "HOURLY" && errand.hourlyRate)
  {
    return `₦${errand.hourlyRate.toLocaleString()}/hr`;
  }
  return "Budget TBD";
};

const formatDistance = (distance: number | null | undefined) =>
{
  if (!distance) return null;
  const km = distance / 1000;
  if (km < 1)
  {
    return `${Math.round(distance)}m away`;
  }
  return `${km.toFixed(1)}km away`;
};

const ErrandCardBlock: React.FC<ErrandCardBlockProps> = ({ errand }) =>
{
  const [saveErrand] = useMutation<
    SaveErrandMutation,
    SaveErrandMutationVariables
  >(SAVE_ERRAND_MUTATION);
  const { user } = useUserStore()

  const handleSaveErrand = async (errandId: string) =>
  {
    await saveErrand({
      variables: { errandId },
      optimisticResponse: {
        __typename: "Mutation",
        saveErrand: {
          __typename: "SaveErrand",
          id: `saved-${errandId}`,
          errandId,
          userId: user?.id || "",
        },
      },
      update(cache)
      {
        console.log(cache)
        const errandCacheId = cache.identify({
          __typename: "ErrandWithClient",
          id: errandId,
        });


        if (!errandCacheId) return;

        cache.modify({
          id: errandCacheId,
          fields: {
            isSaved()
            {
              console.log(cache)
              return true;
            },
          },
        });
      },
    });
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{errand.title}</CardTitle>
              <Badge
                className={getStatusColor(errand.status)}
                variant="secondary"
              >
                {errand.status}
              </Badge>
              {errand.workerType && (
                <Badge variant="outline" className="text-xs">
                  {errand.workerType}
                </Badge>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-4">
              {errand.description}
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium">
                {errand.client?.user?.name || errand.clientName}
              </span>
              {errand.clientRating && (
                <div className="flex items-center gap-1">
                  {renderStars(errand.clientRating)}
                  <span className="text-sm text-gray-600 ml-1">
                    ({errand.clientRating.toFixed(1)})
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600 mb-1">
              {formatBudget(errand)}
            </div>
            <div className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(errand.createdAt), {
                addSuffix: true,
              })}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {errand.serviceAddress && (
              <div className="flex items-center gap-1 max-w-xs">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{errand.serviceAddress}</span>
              </div>
            )}
            {errand.service && (
              <Badge variant="outline" className="text-xs">
                {errand.service}
              </Badge>
            )}
            {errand.profession && (
              <Badge variant="outline" className="text-xs">
                {errand.profession}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={errand.isSaved ? "default" : "outline"}
              size="sm"
              onClick={() => !errand.isSaved && handleSaveErrand(errand.id)}
              disabled={errand?.isSaved || false}
            >
              <Bookmark
                className={`h-4 w-4 mr-1 ${errand.isSaved ? "fill-white" : ""
                  }`}
              />
              {errand.isSaved ? "Saved" : "Save"}
            </Button>
            <Button size="sm">Apply Now</Button>
          </div>
        </div>
        {errand.distance && (
          <div className="mt-2 flex items-center gap-1 text-sm font-medium text-blue-600">
            <MapPin className="h-4 w-4" />
            <span>{formatDistance(errand.distance)}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ErrandCardBlock;
