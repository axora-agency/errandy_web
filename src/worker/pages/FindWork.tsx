import React, { useState, useRef } from "react";
import { Search, Star, Clock, MapPin, Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Input,
  Badge,
} from "@/components";

interface Errand {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  budget: string;
  duration: string;
  postedTime: string;
  urgency: "low" | "medium" | "high";
  clientRating: number;
  clientName: string;
}

// Mock data for saved search keywords
const mockSavedSearches = [
  "All",
  "grocery shopping",
  "delivery",
  "cleaning",
  "pet care",
  "office tasks",
  "home repair",
  "tutoring",
  "babysitting",
  "moving",
  "gardening",
  "cooking",
  "tech support",
  "photography",
  "transportation"
];

const mockErrands: Errand[] = [
  {
    id: "1",
    title: "Grocery Shopping and Delivery",
    description:
      "Need someone to shop for groceries from a provided list and deliver to my apartment. Must be careful with fragile items.",
    category: "Shopping & Delivery",
    location: "Downtown, Lagos",
    budget: "₦5,000 - ₦8,000",
    duration: "2-3 hours",
    postedTime: "2 hours ago",
    urgency: "medium",
    clientRating: 4.8,
    clientName: "Sarah M.",
  },
  {
    id: "2",
    title: "Office Document Pickup",
    description:
      "Quick pickup of documents from law office on Victoria Island. Must be done today before 5 PM.",
    category: "Pickup & Delivery",
    location: "Victoria Island, Lagos",
    budget: "₦3,000 - ₦4,000",
    duration: "1 hour",
    postedTime: "30 minutes ago",
    urgency: "high",
    clientRating: 4.9,
    clientName: "John D.",
  },
  {
    id: "3",
    title: "Pet Walking Service",
    description:
      "Need someone to walk my two dogs for 30 minutes in the evening. Dogs are friendly and well-trained.",
    category: "Pet Services",
    location: "Lekki, Lagos",
    budget: "₦2,500 - ₦3,500",
    duration: "30 minutes",
    postedTime: "1 day ago",
    urgency: "low",
    clientRating: 4.7,
    clientName: "Mary K.",
  },
  {
    id: "4",
    title: "House Cleaning Service",
    description:
      "Need deep cleaning for a 3-bedroom apartment. All cleaning supplies will be provided.",
    category: "Cleaning",
    location: "Ikeja, Lagos",
    budget: "₦8,000 - ₦12,000",
    duration: "4-5 hours",
    postedTime: "3 hours ago",
    urgency: "medium",
    clientRating: 4.6,
    clientName: "David O.",
  },
  {
    id: "5",
    title: "Computer Setup and Installation",
    description:
      "Help set up new computer system and install necessary software. Tech-savvy person needed.",
    category: "Tech Support",
    location: "Surulere, Lagos",
    budget: "₦4,000 - ₦6,000",
    duration: "2 hours",
    postedTime: "5 minutes ago",
    urgency: "high",
    clientRating: 4.9,
    clientName: "Tech Hub Ltd.",
  },
];

const FindWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [selectedSearch, setSelectedSearch] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

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

  // Filter errands based on active tab (mock logic)
  const getFilteredErrands = () => {
    switch (activeTab) {
      case "bestMatches":
        return [...mockErrands].sort((a, b) => b.clientRating - a.clientRating);
      case "mostRecent":
        return [...mockErrands].sort((a, b) => {
          // Simple mock sorting by posted time
          const timeA = a.postedTime.includes("minutes")
            ? 1
            : a.postedTime.includes("hours")
            ? 2
            : 3;
          const timeB = b.postedTime.includes("minutes")
            ? 1
            : b.postedTime.includes("hours")
            ? 2
            : 3;
          return timeA - timeB;
        });
      case "saved":
        return mockErrands.filter(
          (errand) => errand.id === "1" || errand.id === "3"
        ); // Mock saved errands
      default: // feed
        return mockErrands;
    }
  };

  const ErrandCard = ({ errand }: { errand: Errand }) => (
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

            {/* Client Info */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium">{errand.clientName}</span>
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Find Work</h1>
        <p className="text-gray-600 mt-1">
          Discover errands that match your skills and location
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search errands by title, description, or skills..."
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-transparent border-b border-gray-100 rounded-none h-auto p-0 justify-start w-full">
          <TabsTrigger
            value="feed"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Feed
          </TabsTrigger>
          <TabsTrigger
            value="bestMatches"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Best Matches
          </TabsTrigger>
          <TabsTrigger
            value="mostRecent"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Most Recent
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Saved Errands
          </TabsTrigger>
        </TabsList>

        {/* Saved Search Keywords */}
        <div className="relative pt-4">
          {showLeftArrow && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 h-8 w-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide ${
              showLeftArrow ? 'ml-8' : ''
            } ${
              showRightArrow ? 'mr-8' : ''
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleScroll}
          >
            {mockSavedSearches.map((search, index) => (
              <Button
                key={index}
                variant={selectedSearch === search ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap flex-shrink-0"
                onClick={() => setSelectedSearch(search)}
              >
                {search}
              </Button>
            ))}
          </div>

          {showRightArrow && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 h-8 w-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <TabsContent value="feed" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {getFilteredErrands().map((errand) => (
              <ErrandCard key={errand.id} errand={errand} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bestMatches" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {getFilteredErrands().map((errand) => (
              <ErrandCard key={errand.id} errand={errand} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mostRecent" className="space-y-4 mt-4">
          <div className="grid gap-4">
            {getFilteredErrands().map((errand) => (
              <ErrandCard key={errand.id} errand={errand} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4 mt-4">
          {getFilteredErrands().length > 0 ? (
            <div className="grid gap-4">
              {getFilteredErrands().map((errand) => (
                <ErrandCard key={errand.id} errand={errand} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Saved Errands
              </h3>
              <p className="text-gray-600">
                Start saving errands you're interested in to see them here.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Load More */}
      <div className="flex justify-center pt-4">
        <Button variant="outline" className="px-8">
          Load More Errands
        </Button>
      </div>
    </div>
  );
};

export default FindWorkPage;
