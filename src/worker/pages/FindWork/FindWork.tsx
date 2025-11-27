import React, { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { useErrands } from "@/hooks/useErrands";
import HeaderBlock from "./blocks/HeaderBlock";
import SearchBlock from "./blocks/SearchBlock";
import SavedSearchesBlock from "./blocks/SavedSearchesBlock";
import ErrandCardBlock from "./blocks/ErrandCardBlock";
import LoadMoreBlock from "./blocks/LoadMoreBlock";

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
  "transportation",
];

const FindWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "feed" | "best_match" | "most_recent" | "saved"
  >("feed");
  const [selectedSearch, setSelectedSearch] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Use the GraphQL hook for real data
  // const {
  //   errands: realErrands,
  //   loading,
  //   error,
  //   total,
  //   hasNextPage,
  //   loadMore,
  //   changeTab,
  //   searchErrands,
  //   refresh
  // } = useErrands({
  //   type: activeTab,
  //   search: searchKeyword,
  //   enableSubscriptions: true,
  // });

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // const handleTabChange = (value: string) => {
  //   const tabType = value as "feed" | "best_match" | "most_recent" | "saved";
  //   setActiveTab(tabType);
  //   changeTab(tabType);
  // };

  // const handleSearch = (keyword: string): void => {
  //   setSearchKeyword(keyword);
  //   if (keyword.trim()) {
  //     searchErrands(keyword);
  //   } else {
  //     refresh();
  //   }
  // };

  return (
    <div className="p-6 space-y-6">
      <HeaderBlock />
      {/* <SearchBlock
        searchKeyword={searchKeyword}
        // onSearch={handleSearch}
      /> */}
      <Tabs
        value={activeTab}
        // onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="bg-transparent border-b border-gray-100 rounded-none h-auto p-0 justify-start w-full">
          <TabsTrigger
            value="feed"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Feed
          </TabsTrigger>
          <TabsTrigger
            value="best_match"
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:shadow-[0_2px_0_0_theme(colors.blue.500)] rounded-none border-b-2 border-transparent px-4 py-3 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Best Matches
          </TabsTrigger>
          <TabsTrigger
            value="most_recent"
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
        {/* <SavedSearchesBlock
          savedSearches={mockSavedSearches}
          selectedSearch={selectedSearch}
          setSelectedSearch={setSelectedSearch}
          scrollContainerRef={scrollContainerRef}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
          handleScroll={handleScroll}
        /> */}
        <TabsContent value="feed" className="space-y-4 mt-4">
          {/* <div className="grid gap-4">
            {realErrands.map((errand: ErrandWithClient) => (
              <ErrandCardBlock key={errand.id} errand={errand} />
            ))}
          </div> */}
        </TabsContent>
        <TabsContent value="best_match" className="space-y-4 mt-4">
          {/* <div className="grid gap-4">
            {realErrands.map((errand) => (
              <ErrandCardBlock key={errand.id} errand={errand} />
            ))}
          </div> */}
        </TabsContent>
        <TabsContent value="most_recent" className="space-y-4 mt-4">
          {/* <div className="grid gap-4">
            {realErrands.map((errand) => (
              <ErrandCardBlock key={errand.id} errand={errand} />
            ))}
          </div> */}
        </TabsContent>
        <TabsContent value="saved" className="space-y-4 mt-4">
          {/* <div>
            {realErrands.length > 0 ? (
              <div className="grid gap-4">
                {realErrands.map((errand) => (
                  <ErrandCardBlock key={errand.id} errand={errand} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">

                <span className="block h-12 w-12 text-gray-400 mx-auto mb-4">

                </span>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Saved Errands
                </h3>
                <p className="text-gray-600">
                  Start saving errands you're interested in to see them here.
                </p>
              </div>
            )}
          </div> */}
        </TabsContent>
      </Tabs>
      {/* <LoadMoreBlock onClick={loadMore} /> */}
    </div>
  );
};

export default FindWorkPage;
