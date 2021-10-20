import React, { useContext } from "react";
import { DeleteButton, TableData, EditButton } from "./UserElements";
import { UserContext } from "../../contexts/UserContext";

const User = ({ user, handleChange }) => {
  const {
    setShowModal,
    setModalUser,
    setUsers,
    setFilteredUsers,
    setFirstRender,
    setIsSearching,
    users,
    filteredUsers,
  } = useContext(UserContext);
  const handleShow = (user) => {
    setShowModal(true);
    setModalUser(user);
  };
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
    setFirstRender(false);
    setIsSearching(false);
  };

  return (
    <>
      <TableData>
        <input
          type="checkbox"
          name={user.id}
          checked={user.isChecked || false}
          onChange={handleChange}
        ></input>
      </TableData>
      <TableData>{user.name}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>{user.role}</TableData>
      <TableData>
        <EditButton onClick={() => handleShow(user)} isChecked={user.isChecked}>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </EditButton>
        <DeleteButton
          onClick={() => deleteUser(user.id)}
          isChecked={user.isChecked}
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </DeleteButton>
      </TableData>
    </>
  );
};

export default User;
