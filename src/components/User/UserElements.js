import styled from "styled-components";

export const TableData = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #dee2e6;
`;

export const DeleteButton = styled.button`
  color: #dc3545 !important;
  background: ${(props) => (props.isChecked ? "#EFEFEF" : "white")};
  border: 0;
  cursor: pointer;
`;

export const EditButton = styled.button`
  color: #ffc107 !important;
  background: ${(props) => (props.isChecked ? "#EFEFEF" : "white")};
  border: 0;
  cursor: pointer;
  margin-right: 1rem;
`;
