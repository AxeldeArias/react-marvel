import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ProviderHero from "../ProviderHero/index";
import { FaSignOutAlt } from "react-icons/fa";

const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background: ${props => props.theme.secondary};
`;
const BoxModal = styled.div`
  margin: auto;
  position: relative;
  background: ${props => props.theme.tertiary};
`;
const Exit = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
export default () => {
  const themeContext = useContext(ProviderHero);

  const hero = themeContext.listHeroes.filter(
    hero => hero.id === themeContext.modalIdHero
  );
  if (hero.length > 0) {
    console.warn(hero);
  }
  return (
    <ContainerModal>
      <BoxModal>
        <Exit>
          <FaSignOutAlt color={"red"} />
        </Exit>
        {hero.length > 0 ? <div>{hero[0].name}</div> : null}}
      </BoxModal>
    </ContainerModal>
  );
};
