import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { SearchWrapper, SearchInput } from "./SearchElements";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { users, setFilteredUsers, setFirstRender, setIsSearching,showModal } =
    useContext(UserContext);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    searchCharacters(debouncedSearchTerm);
  }, [debouncedSearchTerm,showModal]);
  function searchCharacters(text) {
    text = text.toLowerCase();
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(text) ||
          user.email.toLowerCase().includes(text) ||
          user.role.toLowerCase().includes(text)
      )
    );
  }

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debouncedValue;
  }
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search by name, email or role"
        onChange={(e) => {
          setIsSearching(true);
          setFirstRender(false);
          setSearchTerm(e.target.value);
        }}
      />
    </SearchWrapper>
  );
}

export default Search;
