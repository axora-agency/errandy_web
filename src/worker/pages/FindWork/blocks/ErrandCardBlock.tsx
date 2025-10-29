import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from "@/components";
import { Star, MapPin, Clock, Bookmark } from "lucide-react";
import type { ErrandWithClient } from "@/gql/graphql";

interface ErrandCardBlockProps {
  errand: ErrandWithClient;
}

const getUrgencyColor = (urgency: string) => {
  switch (urgency) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < Math.floor(rating)
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"
      }`}
    />
  ));
};

const ErrandCardBlock: React.FC<ErrandCardBlockProps> = ({ errand }) => (
  <Card className="hover:shadow-md transition-shadow cursor-pointer">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <CardTitle className="text-lg">{errand.title}</CardTitle>
            <Badge
              className={getUrgencyColor(errand.urgency)}
              variant="secondary"
            >
              {errand.urgency} priority
            </Badge>
          </div>
          <p className="text-gray-600 text-sm mb-3">{errand.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">{errand?.client?.user?.name}</span>
            <div className="flex items-center gap-1">
              {renderStars(errand.clientRating)}
              <span className="text-sm text-gray-600 ml-1">
                ({errand.clientRating})
              </span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-600 mb-1">
            {errand.budget}
          </div>
          <div className="text-sm text-gray-500">{errand.postedTime}</div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {errand.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {errand.duration}
          </div>
          <Badge variant="outline" className="text-xs">
            {errand.category}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm">Apply Now</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ErrandCardBlock;
