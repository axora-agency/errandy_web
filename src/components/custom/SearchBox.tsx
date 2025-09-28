import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Briefcase, Users, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchCategory = 'errands' | 'workers' | 'shops';

interface SearchOption {
  value: SearchCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  placeholder: string;
}

const searchOptions: SearchOption[] = [
  {
    value: 'errands',
    label: 'Errands',
    icon: Briefcase,
    placeholder: 'Search for errands...'
  },
  {
    value: 'workers',
    label: 'Workers',
    icon: Users,
    placeholder: 'Search for workers...'
  },
  {
    value: 'shops',
    label: 'Shops',
    icon: Store,
    placeholder: 'Search for shops...'
  }
];

const SearchBox = () => {
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('errands');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = searchOptions.find(option => option.value === selectedCategory)!;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for "${searchQuery}" in ${selectedCategory}`);
      // TODO: Implement actual search functionality
    }
  };

  const handleCategoryChange = (category: SearchCategory) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    // Clear search query when changing category
    setSearchQuery('');
  };

  return (
    <div className="flex-1 max-w-4xl mx-4">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          {/* Category Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-l-lg border-r border-border transition-colors"
            >
              <currentOption.icon className="size-4 text-muted-foreground" />
              <span>{currentOption.label}</span>
              <ChevronDown className={cn(
                "size-3 text-muted-foreground transition-transform",
                isDropdownOpen && "rotate-180"
              )} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full min-w-[140px] bg-popover border border-border rounded-md shadow-lg z-50">
                {searchOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleCategoryChange(option.value)}
                    className={cn(
                      "flex items-center gap-2 w-full px-3 py-2 text-sm text-left hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md",
                      selectedCategory === option.value && "bg-muted text-primary font-medium"
                    )}
                  >
                    <option.icon className="size-4" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentOption.placeholder}
              className="w-full px-4 py-3 text-sm bg-transparent border-0 outline-none placeholder:text-muted-foreground"
            />
          </div>


        </div>

        {/* Search Suggestions (Optional) */}
        {searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-40 max-h-60 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs text-muted-foreground px-2 py-1 font-medium">
                Suggestions for "{searchQuery}"
              </div>
              {/* Mock suggestions - replace with real data */}
              {[
                `${searchQuery} services`,
                `${searchQuery} near me`,
                `professional ${searchQuery}`,
                `${searchQuery} help`
              ].map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    handleSearch(new Event('submit') as any);
                  }}
                  className="flex items-center gap-2 w-full px-2 py-2 text-sm text-left hover:bg-muted rounded transition-colors"
                >
                  <Search className="size-3 text-muted-foreground" />
                  <span>{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export { SearchBox };