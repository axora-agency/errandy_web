import React, { type RefObject } from "react";
import { Button } from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SavedSearchesBlockProps {
  savedSearches: string[];
  selectedSearch: string;
  setSelectedSearch: (search: string) => void;
  scrollContainerRef: RefObject<HTMLDivElement>;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  handleScroll: () => void;
}

const SavedSearchesBlock: React.FC<SavedSearchesBlockProps> = ({
  savedSearches,
  selectedSearch,
  setSelectedSearch,
  scrollContainerRef,
  showLeftArrow,
  showRightArrow,
  scrollLeft,
  scrollRight,
  handleScroll,
}) => (
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
      className={`flex gap-2 overflow-x-auto pb-2 scrollbar-hide ${showLeftArrow ? 'ml-8' : ''} ${showRightArrow ? 'mr-8' : ''}`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onScroll={handleScroll}
    >
      {savedSearches.map((search, index) => (
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
);

export default SavedSearchesBlock;
