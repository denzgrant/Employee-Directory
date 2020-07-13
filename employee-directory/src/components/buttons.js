import React from "react";
import styled from 'styled-components';

const Button = styled.button`
background: blue;
padding: 5px 10px;
border-radius: 3px;
border: none; 
color: white; 

`

const Buttons = () => {
    return(
        <Button>Test</Button>
    )
}

export default Buttons;