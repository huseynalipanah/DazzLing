import React, { createContext, useState } from "react";
export const searchContext = createContext();
const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div>
      <searchContext.Provider value={{ search, handleSearch }}>
        {children}
      </searchContext.Provider>
    </div>
  );
};

export default SearchProvider;
