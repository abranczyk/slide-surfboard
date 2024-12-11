import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="search"
        placeholder="Search carousels..."
        value={query}
        onChange={handleSearch}
        className="pl-10 h-12 bg-secondary border-none focus-visible:ring-primary"
      />
    </div>
  );
};