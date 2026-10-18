export type ErrandStatus =
  | "OPEN"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED"
  | "DISPUTED"
  | "DRAFT"
  | "OVERDUE";

/**
 * Status color mapping for errand statuses
 * Returns hex color codes for consistent status visualization
 */
export const getErrandStatusColor = (
  status: ErrandStatus | string | undefined | null,
): string => {
  switch (status) {
    case "OPEN":
      return "#22C55E"; // green
    case "IN_PROGRESS":
      return "#3B82F6"; // blue
    case "COMPLETED":
      return "#10B981"; // emerald
    case "DRAFT":
      return "#6B7280"; // gray
    case "CANCELLED":
      return "#EF4444"; // red
    case "OVERDUE":
      return "#F59E0B"; // amber
    default:
      return "#6B7280";
  }
};

/**
 * Get human-readable label for errand status
 */
export const getErrandStatusLabel = (
  status: ErrandStatus | string | undefined | null,
): string => {
  switch (status) {
    case "OPEN":
      return "Open";
    case "IN_PROGRESS":
      return "In Progress";
    case "COMPLETED":
      return "Completed";
    case "DRAFT":
      return "Draft";
    case "CANCELLED":
      return "Cancelled";
    case "OVERDUE":
      return "Overdue";
    default:
      return status?.toString() || "Unknown";
  }
};

/**
 * Format price display for errands
 */
export const formatErrandPrice = (
  price?: number | null,
  hourlyRate?: number | null,
): string => {
  if (price) return `₦${price.toLocaleString()}`;
  if (hourlyRate) return `₦${hourlyRate.toLocaleString()}/hr`;
  return "Price not set";
};

/**
 * Format date for display in errands
 */
export const formatErrandDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

/**
 * Format date with relative time for dashboard display
 */
export const formatRelativeDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return date.toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
    });
  }
};
