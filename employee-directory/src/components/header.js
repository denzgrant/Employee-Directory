import React from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import './header.css';



const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 class="title">Professor X's Blue & Gold Team</h1>
      </Container>
    </Jumbotron>

  );
}



export default Header;

