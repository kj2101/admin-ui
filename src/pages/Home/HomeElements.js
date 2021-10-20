import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Wrapper = styled.div`
  margin: 30px 0;
  background: #fff;
  padding: 20px 40px;
  min-width: 1000px;
  display: block;
  text-align: left;
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 70%;
  }
`;
