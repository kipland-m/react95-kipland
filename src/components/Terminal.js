import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { Frame } from '@react95/core';
import styled from 'styled-components';
import 'xterm/css/xterm.css';

const TerminalWrapper = styled.div`
  position: absolute;
  top: 50px; /* Example positioning */
  left: 50px;
`;

const Container = styled.div`
  position: absolute;
`;

function Terminal({ openTerminal }) {
  const terminalRef = useRef(null); 
  const terminalInstance = useRef(null); 

  useEffect(() => {
    const xterm = new XTerm();
    terminalInstance.current = xterm;

    if (terminalRef.current) {
      xterm.open(terminalRef.current);
    }
    return () => {
      xterm.dispose();
    };
  }, []);

  return(
    <Container>
      <Frame>
        <TerminalWrapper ref={terminalRef} />
      </Frame>
    </Container>
  );
}

export default Terminal;

