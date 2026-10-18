import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from "@/components";
import { MapPin } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { ErrandSummaryItem } from "@/hooks/useErrands";
import { useNavigate } from "react-router-dom";

interface ErrandCardBlockProps {
  errand: ErrandSummaryItem;
}

const formatDistance = (distanceMeters?: number) => {
  if (!distanceMeters) return null;
  const km = distanceMeters / 1000;
  if (km < 1) {
    return `${Math.round(distanceMeters)}m away`;
  }
  return `${km.toFixed(1)}km away`;
};

const ErrandCardBlock: React.FC<ErrandCardBlockProps> = ({ errand }) => {
  const navigate = useNavigate();
  const amount = (errand.budget?.amountMinorUnits || 0) / 100;
  const currency = errand.budget?.currency === "NGN" ? "₦" : (errand.budget?.currency || "₦");

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{errand.title}</CardTitle>
              <Badge className="bg-green-100 text-green-800" variant="secondary">
                OPEN
              </Badge>
            </div>
            {errand.distanceMeters && (
              <div className="flex items-center gap-1 text-sm font-medium text-blue-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>{formatDistance(errand.distanceMeters)}</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600 mb-1">
              {currency}{amount.toLocaleString()}
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
        <div className="flex items-center justify-end gap-2">
          <Button
            size="sm"
            onClick={() => navigate(`/errand/${errand.id}`)}
          >
            View & Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ErrandCardBlock;
