import React from "react";
import styled from "styled-components";
import Card from "./card";

// Contenedor de Cards
const ContainerHero = styled.section`
  flex: 1;
  align-content: flex-start;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background: ${props => props.theme.secondary};
  flex-wrap: wrap;
  padding: 5px;
  article {
    flex: 25% 0 0;
  }
  @media screen and (max-width: 515px) {
    article {
      flex: 100% 0 0;
    }
  }
  @media screen and (max-width: 579px) and (min-width: 516px) {
    article {
      flex: 50% 0 0;
    }
  }
  @media screen and (max-width: 750px) and (min-width: 580px) {
    article {
      flex: 33% 0 0;
    }
  }
`;

export default ({ data }) => {
  let cards = data.map((element, index) => <Card key={index}>{element}</Card>);

  return <ContainerHero>{cards}</ContainerHero>;
};
