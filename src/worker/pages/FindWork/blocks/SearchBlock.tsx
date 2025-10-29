import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components";

interface SearchBlockProps {
  searchKeyword: string;
  onSearch: (keyword: string) => void;
}

const SearchBlock: React.FC<SearchBlockProps> = ({ searchKeyword, onSearch }) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    <Input
      placeholder="Search errands by title, description, or skills..."
      className="pl-10"
      value={searchKeyword}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBlock;
