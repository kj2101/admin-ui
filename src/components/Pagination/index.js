import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import DeleteSelectedButton from "../DeleteSelectedButton";
import UserList from "../UserList";
import {
  PaginationContainer,
  PaginationItem,
  PaginationItemSpan,
} from "./PaginationElements";
const Pagination = () => {
  const { filteredUsers, show, pages, currentPage, setCurrentPage } =
    useContext(UserContext);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToLastPage() {
    setCurrentPage(pages);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function goToFirstPage() {
    setCurrentPage(1);
  }

  function changePage(event) {
    const pageNumber = parseInt(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    return new Array(pages).fill().map((_, idx) => idx + 1);
  };

  return (
    <div>
      <UserList
        usersCurrent={filteredUsers.slice(
          currentPage * 10 - 10,
          currentPage * 10
        )}
        setCurrentPage={setCurrentPage}
      />
      <DeleteSelectedButton />
      <PaginationContainer users={filteredUsers} show={show}>
        <PaginationItem onClick={goToFirstPage} disabled={currentPage === 1}>
          <PaginationItemSpan>&#60;&#60;</PaginationItemSpan>
        </PaginationItem>

        <PaginationItem onClick={goToPreviousPage} disabled={currentPage === 1}>
          <PaginationItemSpan>&#60;</PaginationItemSpan>
        </PaginationItem>

        {getPaginationGroup().map((item, index) => (
          <PaginationItem
            key={index}
            onClick={changePage}
            current={currentPage === item}
          >
            <PaginationItemSpan>{item}</PaginationItemSpan>
          </PaginationItem>
        ))}

        <PaginationItem onClick={goToNextPage} disabled={currentPage === pages}>
          <PaginationItemSpan>&#62;</PaginationItemSpan>
        </PaginationItem>

        <PaginationItem onClick={goToLastPage} disabled={currentPage === pages}>
          <PaginationItemSpan>&#62;&#62;</PaginationItemSpan>
        </PaginationItem>
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
