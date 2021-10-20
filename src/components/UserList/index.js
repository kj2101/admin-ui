import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import User from "../User";
import { Table, TableHeading, UserRow } from "./UserListElements";

const UserList = ({ usersCurrent }) => {
  const {
    users,
    setUsers,

    filteredUsers,
    setFilteredUsers,
  } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUsers = users.map((user) => {
        if (user.isChecked === undefined) user.isChecked = false;
        return usersCurrent.includes(user)
          ? { ...user, isChecked: checked }
          : { ...user, isChecked: user.isChecked };
      });
      let tempFilteredUsers = filteredUsers.map((user) => {
        if (user.isChecked === undefined) user.isChecked = false;
        return usersCurrent.includes(user)
          ? { ...user, isChecked: checked }
          : { ...user, isChecked: user.isChecked };
      });
      setFilteredUsers(tempFilteredUsers);
      setUsers(tempUsers);
    } else {
      let tempUsers = users.map((user) =>
        user.id === name ? { ...user, isChecked: checked } : user
      );
      let tempFilteredUsers = filteredUsers.map((user) =>
        user.id === name ? { ...user, isChecked: checked } : user
      );
      setFilteredUsers(tempFilteredUsers);
      setUsers(tempUsers);
    }
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <TableHeading>
              <input
                type="checkbox"
                name="allSelect"
                checked={!usersCurrent.some((user) => user.isChecked !== true)}
                onChange={handleChange}
              ></input>
            </TableHeading>
            <TableHeading>Name</TableHeading>
            <TableHeading>Email</TableHeading>
            <TableHeading>Role</TableHeading>
            <TableHeading>Actions</TableHeading>
          </tr>
        </thead>
        <tbody>
          {usersCurrent.map((user) => (
            <UserRow key={user.id} isChecked={user.isChecked}>
              <User user={user} handleChange={handleChange} />
            </UserRow>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
