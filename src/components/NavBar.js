import React from 'react'
import styled from 'styled-components'

// Cards
const NavBar = styled.nav`
    display:flex;
    justify-content: flex-start;
 
    `

export default (prop)=>{
    return <NavBar>
                <div>
                    {/* <img src={} alt="Logo"/> */}
                </div>
                <div>                
                    <input  onChange={prop.onChange}/>
                </div>
            </NavBar>
    
}