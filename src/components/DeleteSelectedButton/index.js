import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { DeleteSelectedWrapper } from "./DeleteSelectedElements";
const DeleteSelectedButton = () => {
  const {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    setCurrentPage,
  } = useContext(UserContext);
  const handleDeleteSelected = () => {
    setUsers(users.filter((user) => !user.isChecked));
    setFilteredUsers(filteredUsers.filter((user) => !user.isChecked));
  };
  return (
    <DeleteSelectedWrapper
      onClick={() => {
        handleDeleteSelected();
        setCurrentPage(1);
      }}
      type="submit"
      value="Delete Selected"
      users={filteredUsers}
    />
  );
};

export default DeleteSelectedButton;
