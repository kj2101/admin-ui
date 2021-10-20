import React, { useContext, useState, useEffect } from "react";
import {
  FormContainer,
  Input,
  Submit,
  Row,
  ColumnInput,
  ColumnLabel,
  Label,
  Cancel,
  Heading,
} from "./EditFormElements";
import { UserContext } from "../../contexts/UserContext";

const EditForm = () => {
  const { users,filteredUsers,setUsers,setFilteredUsers,setShowModal, modalUser, showModal } = useContext(UserContext);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [role, setRole] = useState(undefined);
  useEffect(() => {
    setName(modalUser.name);
    setEmail(modalUser.email);
    setRole(modalUser.role);
  }, [showModal]);

  const id = modalUser.id;
  const updatedUser = { id, name, email, role };
  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    setFilteredUsers(filteredUsers.map((user) => (user.id === id ? updatedUser : user)));
  };
  

  const handleClose = () => setShowModal(false);

  return (
    <FormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Row>
          <Heading>Edit User</Heading>
        </Row>
        <Row>
          <ColumnLabel>
            <Label>Name</Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              value={name || ""}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label>Email</Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              value={email || ""}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </ColumnInput>
        </Row>
        <Row>
          <ColumnLabel>
            <Label>Role</Label>
          </ColumnLabel>
          <ColumnInput>
            <Input
              type="text"
              value={role || ""}
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
          </ColumnInput>
        </Row>
        <Row>
          <Submit
            onClick={() => {
              handleClose();
              updateUser(id, updatedUser);
            }}
            type="submit"
            value="Submit"
          />
          <Cancel
            onClick={() => {
              handleClose();
            }}
            type="submit"
            value="Cancel"
          />
        </Row>
      </form>
    </FormContainer>
  );
};

export default EditForm;
