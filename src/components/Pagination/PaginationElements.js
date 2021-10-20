import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: ${(props) => (props.users.length ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  margin-top: -45px;
`;

export const PaginationItem = styled.button`
  background: ${(props) => (props.current ? "#0069d9" : "#fff")};
  border: ${(props) =>
    props.disabled ? "2px solid lightgrey" : "2px solid #666"};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  padding: 10px 15px;
  border-radius: 100%;
  height: 45px;
  width: 45px;
  position: relative;
  margin: 0 5px;
  cursor: pointer;
`;

export const PaginationItemSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
`;
