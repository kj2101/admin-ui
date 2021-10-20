import styled from "styled-components";

export const Table = styled.table`
  width: 90%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;
  margin-left: 1rem;
  height: 100%;
`;

export const TableHeading = styled.th`
  padding: 0.75rem;
  vertical-align: top;
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
`;

export const UserRow = styled.tr`
  background: ${(props) => (props.isChecked ? "#EFEFEF" : "white")};
`;
