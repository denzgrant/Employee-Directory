import React from "react";
import styled from 'styled-components';

const Wrapper = styled.h1`

padding: 5px 10px;
border-radius: 3px;
border: none; 
color: Red; 
align-items: center;
width: 1000px; 
margin:0 auto;
margin-top: .5em;
margin-right: 5em; 
font-size: 4em; 
`

const Title = () => {
    return(
        <Wrapper>Professor X's Blue & Gold Team</Wrapper>
    )
}

export default Title;