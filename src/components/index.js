import React , {useEffect, useState} from 'react'
import ListItems from './ListItems'
import NavBar from './NavBar'
import styled from 'styled-components'


const Container = styled.div`
                    margin:auto;
                    max-width: 1300px;
                    background: black;
                 `

export default ()=>{

    const [heroes, setHeroes] = useState({loading:true,list:[]})
    const [find,setFind] = useState("")

    useEffect(()=>{
        let md5 = require('md5')
        let publickey = '244d171c01b75643f3d17d51e3c13238'
        let privatekey = 'b06821a19c58afa31fb67fb0a699b64efd2b0d5f'
        let ts = new Date().getTime()
        let stringToHash = ts + privatekey + publickey
        let hash = md5(stringToHash)
        let baseUrl = 'https://gateway.marvel.com:443/v1/public/characters'
        let url = `${baseUrl}?ts=${ts}&apikey=${publickey}&hash=${hash}`
        if(find !== ""){
            url = url.concat(`&nameStartsWith=${find}`) 
        }
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setHeroes({ loading: false,
                        list : res.data.results})
        })
        .catch((e)=>console.log(e))

    
    },[find])


    
    return (
        <div>
            {heroes.loading?
            <span>cargando</span>:
            <Container>
                <NavBar onChange={(e)=>{setFind(String(e.target.value))}} />
                <ListItems data = {heroes.list}/>
            </Container>
            }   
        </div>
    )


}
