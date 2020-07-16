import React from "react";
import styled from 'styled-components';


const Heading = styled.header`
  font-size: 9rem;
  border: 5px solid black;
  padding: 2em;
  background: yellow;
  margin: 0; 
  background-image: url(${'/xmen_logo.png'});
  background-repeat: no-repeat;
  background-position: center;

`

const Header = () => {
  return (

    <Heading imgUrl={process.env.PUBLIC_URL + 'xmen_logo.png'}></Heading>

  );
}



export default Header;

