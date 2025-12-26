import React from 'react'
import Logo from "./logo";
import SearchBar from "./searchbar";
import UserAvatar from "./UserAvatar";

const Toolbar = () => {
  return (
    <header className="bg-muted flex items-center justify-between h-12 p-4">
        <Logo />
        <SearchBar />
    </header>
  );
};

export default Toolbar;