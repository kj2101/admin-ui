import React from "react";
import Pagination from "../../components/Pagination";
import { Container, Wrapper } from "./HomeElements";
import UserContextProvider from "../../contexts/UserContext";
import Search from "../../components/Search";
import Modal from "../../components/Modal";
const Home = () => {
  return (
    <Container>
      <Wrapper>
        <UserContextProvider>
          <Modal />
          <Search />
          <Pagination/>
        </UserContextProvider>
      </Wrapper>
    </Container>
  );
};

export default Home;
