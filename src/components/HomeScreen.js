import React, { useEffect, useState } from "react";
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
  const [heroes, setHeroes] = useState({ loading: true, list: [] });
  const [find, setFind] = useState("");

  useEffect(() => {
    let md5 = require("md5");
    let publickey = "244d171c01b75643f3d17d51e3c13238";
    let privatekey = "b06821a19c58afa31fb67fb0a699b64efd2b0d5f";
    let ts = new Date().getTime();
    let stringToHash = ts + privatekey + publickey;
    let hash = md5(stringToHash);
    let limit = 8;
    let baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
    let url = `${baseUrl}?ts=${ts}&apikey=${publickey}&hash=${hash}&limit=${limit}`;
    if (find !== "") {
      url = url.concat(`&nameStartsWith=${find}`);
    }
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setHeroes({ loading: false, list: res.data.results });
      })
      .catch(e => console.log(e));
  }, [find]);

  return (
    <MainContainer>
      {heroes.loading ? (
        <div>Cargando</div>
      ) : (
        <Container>
          <NavBar
            onChange={e => {
              setFind(String(e.target.value));
            }}
          />
          <ContainerList>
            <ListItems data={heroes.list} />
          </ContainerList>
        </Container>
      )}
    </MainContainer>
  );
};
