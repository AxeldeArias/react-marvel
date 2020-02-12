import React from 'react'
import styled from 'styled-components'
import Card from './card'

// Contenedor de Cards
const ContainerHero = styled.section`
                        display:flex;
                        align-items: flex-start;
                        justify-content: center;
                        margin:auto;
                        background: #eee;
                        flex-wrap:wrap;
                        article {
                            flex: 18% 0 0;
                        }
    
                        `

export default ({data})=>{
    
    let cards = data.map((element,index)=>(
                        <Card key ={index}>
                            {element}
                        </Card>
                    )
                )

    return  <ContainerHero> 
                {cards}
            </ContainerHero>
    
}