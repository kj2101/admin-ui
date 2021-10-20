import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
`;

export const Label = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

export const Heading = styled.label`
  padding: 0 12px 12px 0;
  font-weight: bold;
  font-size: 1.75rem;
  display: inline-block;
`;

export const Submit = styled.input`
  background-color: #04aa6d;

  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
`;

export const Cancel = styled.input`
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: left;
`;

export const FormContainer = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  @media screen and (max-width: 480px) {
    top: 40%;
  }
`;

export const ColumnLabel = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`;

export const ColumnInput = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;
`;

export const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
