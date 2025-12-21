import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";
import { useErrands } from "@/hooks/useErrands";
import HeaderBlock from "./blocks/HeaderBlock";
import SearchBlock from "./blocks/SearchBlock";
import ErrandCardBlock from "./blocks/ErrandCardBlock";
import LoadMoreBlock from "./blocks/LoadMoreBlock";

const FindWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "feed" | "best_match" | "most_recent" | "saved"
  >("feed");
  const [searchKeyword, setSearchKeyword] = useState("");

  // Use the GraphQL hook for real data
  const {
    errands: realErrands,
    loading,
    error,
    total,
    hasNextPage,
    loadMore,
    changeTab,
    searchErrands,
    refresh,
  } = useErrands({
    type: activeTab,
    search: searchKeyword,
    enableSubscriptions: true,
  });

  const handleTabChange = (value: string) => {
    const tabType = value as "feed" | "best_match" | "most_recent" | "saved";
    setActiveTab(tabType);
    changeTab(tabType);
  };

  const handleSearch = (keyword: string): void => {
    setSearchKeyword(keyword);
    if (keyword.trim()) {
      searchErrands(keyword);
    } else {
      refresh();
    }
  };

  return (
    <div className="p-6 space-y-6">
      <HeaderBlock />
      <SearchBlock searchKeyword={searchKeyword} onSearch={handleSearch} />
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
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
        <TabsContent value="feed" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading errands...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading errands. Please try again.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {realErrands.map((errand) => (
                <ErrandCardBlock key={errand.id} errand={errand} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="best_match" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading errands...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading errands. Please try again.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {realErrands.map((errand) => (
                <ErrandCardBlock key={errand.id} errand={errand} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="most_recent" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading errands...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading errands. Please try again.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {realErrands.map((errand) => (
                <ErrandCardBlock key={errand.id} errand={errand} />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="saved" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading saved errands...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading saved errands. Please try again.
              </p>
            </div>
          ) : realErrands.length > 0 ? (
            <div className="grid gap-4">
              {realErrands.map((errand) => (
                <ErrandCardBlock key={errand.id} errand={errand} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No Saved Errands</h3>
              <p className="text-muted-foreground">
                Start saving errands you're interested in to see them here.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      {hasNextPage && !loading && <LoadMoreBlock onClick={loadMore} />}
    </div>
  );
};

export default FindWorkPage;
