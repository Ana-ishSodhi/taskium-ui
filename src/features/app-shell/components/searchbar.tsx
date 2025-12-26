import { Input } from "@/components/ui/input";
import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex-1 flex justify-center">
      <Input
        className="w-full max-w-md"
        placeholder="Search across workspaces…"
      />
    </div>
  );
};

export default SearchBar;