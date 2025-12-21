import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components";
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
    page,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    loadMore,
    changeTab,
    searchErrands,
    refresh,
    goToPage,
  } = useErrands({
    type: activeTab,
    search: searchKeyword,
    enableSubscriptions: true,
  });

  const handleTabChange = (value: string) => {
    const tabType = value as "feed" | "best_match" | "most_recent" | "saved";
    setActiveTab(tabType);
    setSearchKeyword(""); // Clear search when switching tabs
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

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: (number | "ellipsis")[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, current page with neighbors, and last page
      pages.push(1);

      if (page > 3) {
        pages.push("ellipsis");
      }

      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (page < totalPages - 2) {
        pages.push("ellipsis");
      }

      pages.push(totalPages);
    }

    return (
      <Pagination className="mt-6">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => hasPreviousPage && goToPage(page - 1)}
              className={
                !hasPreviousPage
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
          {pages.map((pageNum, index) =>
            pageNum === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => goToPage(pageNum)}
                  isActive={pageNum === page}
                  className="cursor-pointer"
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => hasNextPage && goToPage(page + 1)}
              className={
                !hasNextPage
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
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
          ) : realErrands.length > 0 ? (
            <>
              <div className="grid gap-4">
                {realErrands.map((errand) => (
                  <ErrandCardBlock key={errand.id} errand={errand} />
                ))}
              </div>
              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No Errands Available</h3>
              <p className="text-muted-foreground">
                Check back later for new errands in your area.
              </p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="best_match" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Finding best matches...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading errands. Please try again.
              </p>
            </div>
          ) : realErrands.length > 0 ? (
            <>
              <div className="grid gap-4">
                {realErrands.map((errand) => (
                  <ErrandCardBlock key={errand.id} errand={errand} />
                ))}
              </div>
              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No Matching Errands</h3>
              <p className="text-muted-foreground">
                We couldn't find any errands matching your skills and
                preferences.
              </p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="most_recent" className="space-y-4 mt-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading recent errands...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-destructive">
                Error loading errands. Please try again.
              </p>
            </div>
          ) : realErrands.length > 0 ? (
            <>
              <div className="grid gap-4">
                {realErrands.map((errand) => (
                  <ErrandCardBlock key={errand.id} errand={errand} />
                ))}
              </div>
              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No Recent Errands</h3>
              <p className="text-muted-foreground">
                No new errands have been posted recently.
              </p>
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
            <>
              <div className="grid gap-4">
                {realErrands.map((errand) => (
                  <ErrandCardBlock key={errand.id} errand={errand} />
                ))}
              </div>
              {renderPagination()}
            </>
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
    </div>
  );
};

export default FindWorkPage;
