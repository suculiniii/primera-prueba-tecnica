import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Movie>
    <div>
      <a href="">Popular Movies</a>
      <a href="">Popular Series</a>
    </div>
    </Movie>
  )
}

export default Movies
const Movie= styled.body`
a{
    text-decoration: none;
    font-family: Arial;
    margin: 200px;
    font-size: 30px;
}
`