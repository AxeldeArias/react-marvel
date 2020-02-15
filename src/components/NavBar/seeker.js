import React from "react";
import styled from "styled-components";
import { ProviderHero } from "../ProviderHero/index";
let md5 = require("md5");

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
  ${Lupa}  {
    position: absolute;
    border-right: 1.5px solid #eee;
    top: 3px;
    img {
      margin: auto;
      padding: 3px;
      width: 25px;
    }
  }
`;


export default class Seeker extends React.Component{

  static contextType  = ProviderHero;
  
  componentDidMount(){
    this.getHeroes("")
  
  }

  //Rutina que trae personajes
  //Se ejecuta al inciar y cada vez que se escribe en el buscador
  getHeroes = (HeroesName) => {
    let apikey = "244d171c01b75643f3d17d51e3c13238";
    let privatekey = "b06821a19c58afa31fb67fb0a699b64efd2b0d5f";
    let ts = new Date().getTime();
    let stringToHash = ts + privatekey + apikey;
    let hash = md5(stringToHash);
    let limit = 8;
    let baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

    let url = `${baseUrl}?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}`;

    if (HeroesName !== "") {
      url = url.concat(`&nameStartsWith=${HeroesName}`);
    }

    fetch(url)
      .then(res => res.json())
      .then(res => {
        //Actualizo Provider (asi el resto de componentes lo pueden consumir)
        this.context.setHeroes(res.data.results);
      })
      .catch(e => console.log(e));
  }

  
  render(){
   return(
    <ContainerInput>
      <Lupa>
        <img src={require("../../assets/images/lupa.jpg")} alt={"search"}/>
      </Lupa>
      {/* actualizo la busqueda con cada cambio */}
      <input autoFocus onChange={e => this.getHeroes(e.target.value)} />
    </ContainerInput>)
  }
  
 
}