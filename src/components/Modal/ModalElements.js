import styled from "styled-components";

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  transition: all 0.3s;
  display: ${(prop) => (prop.show ? "block" : "none")};
  height: 100%;
`;
