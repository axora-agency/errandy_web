import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/components";
import { type ErrandWithClient } from "@/gql/graphql";
import { Briefcase, MapPin, Calendar, DollarSign, User } from "lucide-react";
import {
  getErrandStatusColor,
  getErrandStatusLabel,
  formatErrandPrice,
  formatErrandDate,
} from "@/utils/errandFormatters";

interface ErrandCardProps {
  errand: ErrandWithClient;
  onPress: () => void;
  isProvider?: boolean;
}

export const ErrandCard: React.FC<ErrandCardProps> = ({
  errand,
  onPress,
  isProvider,
}) => {
  const statusColor = getErrandStatusColor(errand.status);

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={onPress}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="flex-1 text-lg font-semibold">
            {errand.title}
          </CardTitle>
          <Badge
            style={{
              backgroundColor: statusColor + "20",
              color: statusColor,
              border: "none",
            }}
          >
            {getErrandStatusLabel(errand.status)}
          </Badge>
        </div>
        {errand.service && (
          <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
            <Briefcase className="h-3 w-3" />
            <span>{errand.service.name}</span>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-3">
        {errand.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {errand.description}
          </p>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {formatErrandPrice(errand.price, errand.hourlyRate)}
            </span>
          </div>

          {errand.serviceAddress && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground truncate">
                {errand.serviceAddress}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {formatErrandDate(errand.createdAt)}
            </span>
          </div>
        </div>

        {/* Show client info for providers */}
        {isProvider && errand.client?.user && (
          <div className="flex items-center gap-2 pt-3 border-t text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{errand.client.user.name}</span>
            {errand.distance && (
              <span className="text-muted-foreground">
                • {errand.distance.toFixed(1)} km away
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
