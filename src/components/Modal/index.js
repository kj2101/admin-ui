import React, { useContext } from "react";
import EditForm from "../EditForm";
import { ModalWindow } from "./ModalElements";
import { UserContext } from "../../contexts/UserContext";

const Modal = () => {
  const { showModal, user } = useContext(UserContext);
  return (
    <ModalWindow show={showModal}>
      <EditForm user={user} />
    </ModalWindow>
  );
};

export default Modal;
