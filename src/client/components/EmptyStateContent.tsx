import React from "react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import {
  Briefcase,
  Clock,
  XCircle,
  CheckCircle,
  Rocket,
  Megaphone,
  FileText,
  Search,
  PlusCircle,
} from "lucide-react";

interface EmptyStateContentProps {
  isProvider: boolean;
  activeTab: string;
}

export const EmptyStateContent: React.FC<EmptyStateContentProps> = ({
  isProvider,
  activeTab,
}) => {
  const getEmptyMessage = () => {
    if (isProvider) {
      switch (activeTab) {
        case "active":
          return {
            title: "No active errands",
            description:
              "Errands you're currently working on will appear here.",
            Icon: Briefcase,
          };
        case "pending":
          return {
            title: "No pending applications",
            description: "Errands you've applied for will appear here.",
            Icon: Clock,
          };
        case "rejected":
          return {
            title: "No rejected applications",
            description:
              "Applications that were not accepted will appear here.",
            Icon: XCircle,
          };
        case "completed":
          return {
            title: "No completed errands",
            description:
              "Errands you've successfully completed will appear here.",
            Icon: CheckCircle,
          };
        default:
          return {
            title: "No errands found",
            description: "Check back later for new opportunities.",
            Icon: Search,
          };
      }
    } else {
      switch (activeTab) {
        case "active":
          return {
            title: "No active errands",
            description:
              "Your errands that are currently in progress will appear here.",
            Icon: Rocket,
          };
        case "published":
          return {
            title: "No published errands",
            description:
              "Errands you've published for providers to apply will appear here.",
            Icon: Megaphone,
          };
        case "draft":
          return {
            title: "No draft errands",
            description:
              "Unfinished errands you're still working on will appear here.",
            Icon: FileText,
          };
        default:
          return {
            title: "No errands found",
            description: "Create your first errand to get started.",
            Icon: PlusCircle,
          };
      }
    }
  };

  const { title, description, Icon } = getEmptyMessage();

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Icon className="h-6 w-6" />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};
