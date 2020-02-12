import React from 'react'
import styled from 'styled-components'

// Cards
const Card = styled.article`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background: #eee;
    padding:5px;
    flex-wrap:wrap;
    &:hover{
        cursor: pointer;
        background: grey;
        span{
            color:white;
            font-weight: bold;
        }
    }
    img {
        
        flex: auto 0 0;
        margin:auto;
    }
    div {
        flex-basis: 20px;
        padding: 5px;
        span{
            margin:auto
        }
    }
    @media (max-width: 400px) {
        flex: 100% 0 0;
    }

 
    `

export default (props)=>{
    const {name,thumbnail}= props.children
    const imagen = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`
    return <Card>
                <img src={imagen} alt="Hero"/>
                <div><span>{name}</span></div>
            </Card>
    
}