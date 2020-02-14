import React from "react";
import styled from "styled-components";

const ContainerHero = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  padding: 5px;
  width: min-content;
  max-width: 180px;
  background: ${props => props.theme.primary};
  border-radius: 5px;

  border: 0.5px solid ${props => props.theme.tertiary};
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.tertiary};
  }
  &:hover div {
    max-height: 3rem;
    height: auto;
    min-height: auto;
    overflow: none;
    color: white;
    font-weight: bold;
  }
  div {
    max-height: 1.5rem;
    min-height: 1.5rem;
    overflow: hidden;
  }
`;

// Cards
const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8px;
  img {
    margin: auto;
  }
`;

export default props => {
  const { name, thumbnail } = props.children;
  //genero la ruta de la imagen
  const imagen = `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`;
  return (
    <Card>
      <ContainerHero>
        <img src={imagen} alt="Hero" />
        <div>{name}</div>
      </ContainerHero>
    </Card>
  );
};
