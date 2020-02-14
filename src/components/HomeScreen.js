import React, { useEffect, useState } from "react";
import { ProviderHero } from "./ProviderHero/index";
import ListItems from "./ListItems";
import NavBar from "./NavBar/index";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerList = styled.div`
  flex: 1;
  align-content: flex-start;
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  justify-content: flex-start;
`;
const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${NavBar} {
    flex: auto 0 0;
  }
`;

export default () => {
  const [listHeroes, setHeroes] = useState([]);

  return (
    <ProviderHero.Provider value={{ listHeroes, setHeroes }}>
      <MainContainer>
        {/* {heroes.loading ? (
          <div>Cargando</div>
        ) : ( */}
        <Container>
          <NavBar />
          <ContainerList>
            <ListItems />
          </ContainerList>
        </Container>
        {/* )} */}
      </MainContainer>
    </ProviderHero.Provider>
  );
};
