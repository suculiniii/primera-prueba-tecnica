import React, {useState}from 'react'
import styled from 'styled-components'
import BotonHamburguesa from './BotonHamburguesa'


function Navbar() {

    const {clicked, setclicked}= useState(false)

    const handleclick = () =>{
        //lo pasa de false a true y vice versa
        setclicked(!clicked)
    }

  return (
    <>
    <NavbarContenedor>
    <h1>DEMO Streaming <span>Responsive</span></h1>
        <div className={`links  ${clicked ? 'active' : ''}`}>
        <a href="/">Log in</a>
        <a href="/">Start your free trial</a>
        </div>
        <div className='burguer'>
      <BotonHamburguesa clicked={clicked} handleclick={handleclick}></BotonHamburguesa>
      </div>
    </NavbarContenedor>
   
    </>
  )
}

export default Navbar
const NavbarContenedor =styled.header`
h1{
    margin: .5cm;
    padding: none;
}
    font-family: Arial;
    padding: 0.5cm;
    background-color: yellow;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: none;
    
    a{
        color: black;
        text-decoration: none;
        margin-left: 1cm ; 
    }
    .links{
        text-align: center;                                                                                                                                                 
        position: absolute;
        top: -700px;
        left: -2000;
        margin-left: auto;
        margin-right: auto;
        
        a{
            color: black;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 769px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: black;
                display: inline;
            
            } 
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left:0;
        right:0;
        text-align: center;
        a{
            color:black;
        }
    }
    .burguer{
        @media(min-width: 770px){
            display: none;
        }
    }
  
    `
    
