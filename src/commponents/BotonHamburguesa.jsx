import React from 'react'
import styled from 'styled-components'

function BotonHamburguesa(props) {
  return (
    <Burguer>
        <div onClick={props.handleClick} class={`menu-icon ${props.clicked ? '#menu': ''}`}>
            <input type="checkbox" id="tmenu"></input>
            <label for="tmenu"></label>
        </div>
    </Burguer>
  )
}

export default BotonHamburguesa
const Burguer= styled.div`

.menu-icon {
    text-align: left;
    margin-right: 3cm;
    position: relative;
  }
  
  label {
    width: 6rem;
    height: 0.9rem;
    background-color: white;
    position: absolute;
    cursor: pointer;
  }
  
  label::before, label::after {
    content: "";
    width: 6rem;
    height: 0.9rem;
    background-color: white;
    position: absolute;
    display: block;
    color: red;
    transition: all 0.6s cubic-bezier(1, 0, 0, 1);
  }
  
  label::before {
    top: -200%;
    left: 0%;
    transform: rotateZ(0deg);
    transform-origin: left top;
  }
  
  label::after {
    bottom: -200%;
    left: 0%;
    transform: rotateZ(0deg);
    transform-origin: left bottom;
  }
  
  #tmenu:checked ~ label::before {
    content: "";
    background-color: #e6005c;
    transform: rotateZ(41deg);
    left: 10%;
  }
  
  #tmenu:checked ~ label::after {
    content: "";
    background-color: #e6005c;
    transform: rotateZ(-41deg);
    left: 10%;
  }
  
  #tmenu:checked ~ label {
    background-color: transparent;
  }
  
  #tmenu ~ label {
    transition: all 0.5s cubic-bezier(1, 0, 0, 1);
  }
  
  input {
    display: none;
  }
  
  .wrapper{
   width: 1cm;
   height: auto;
   text-align: left;
   margin: 10rem 2rem;
   position: absolute;
  }
  
`