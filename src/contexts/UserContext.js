import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [modalUser, setModalUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setUsers(json);
      setFilteredUsers(json);
      setPages(Math.ceil(json.length / 10));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

    fetchData(url);
  }, []);
  useEffect(() => {
    if (
      !firstRender &&
      ((filteredUsers.length % 10 === 0 && pages === currentPage) ||
        isSearching)
    ) {
      setCurrentPage(1);
    }

    setPages(Math.ceil(filteredUsers.length / 10));
  }, [filteredUsers.length]);

  return (
    <UserContext.Provider
      value={{
        users,
        showModal,
        setShowModal,
        setModalUser,
        modalUser,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        pages,
        currentPage,
        setCurrentPage,
        isSearching,
        setIsSearching,
        setFirstRender,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
