import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    top: 20%;
    left: 10%;
`

function Winamp() {
    return (
        <Wrapper id="winamp-container"></Wrapper>
    );
}

export default Winamp; 
