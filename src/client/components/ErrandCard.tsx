import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/components";
import type { ErrandDetailType } from "@/gql/graphql";
import { Calendar, DollarSign } from "lucide-react";
import {
  getErrandStatusColor,
  getErrandStatusLabel,
  formatErrandDate,
} from "@/utils/errandFormatters";

interface ErrandCardProps {
  errand: ErrandDetailType;
  onPress: () => void;
  isProvider?: boolean;
}

export const ErrandCard: React.FC<ErrandCardProps> = ({
  errand,
  onPress,
}) => {
  const statusColor = getErrandStatusColor(errand.status);
  const amount = (errand.budget?.amountMinorUnits || 0) / 100;
  const currency = errand.budget?.currency === "NGN" ? "₦" : (errand.budget?.currency || "₦");

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
            <span className="font-semibold text-foreground">
              {currency}{amount.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {formatErrandDate(errand.createdAt)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
