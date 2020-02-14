import React from "react";
import styled from "styled-components";

const Lupa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerInput = styled.div`
  position: relative;
  flex-basis: 70%;
  input {
    width: 100%;
    height: 1.5rem;
    font-size: 1rem;
    padding: 0.5rem;
    padding: 0.5rem 0.5rem 10px 35px;
  }

  @media screen and (max-width: 699px) {
    margin-top: 5px;
    flex-basis: 100%;
    order: 2;
    input {
      width: 100%;
    }
  }
  ${Lupa} {
    position: absolute;
    border-right: 1.5px solid #eee;
    top: 0.4px;
    img {
      margin: auto;
      padding: 3px;
      width: 30px;
    }
  }
`;

export default props => (
  <ContainerInput>
    <Lupa>
      <img src={require("../../assets/images/lupa.jpg")} />
    </Lupa>
    <input autoFocus onChange={props.onChange} />
  </ContainerInput>
);
