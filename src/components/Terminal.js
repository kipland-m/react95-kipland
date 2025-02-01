import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { Frame } from '@react95/core';
import styled from 'styled-components';
import 'xterm/css/xterm.css';
 
 const TerminalWrapper = styled.div`
  width: 600px;  
  height: 400px; 
  background: black; 
  color: #00FF00; 
  overflow: hidden;
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
`;

const Terminal = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new XTerm({
      fontSize: 14,  
      fontFamily: 'Fira Code, monospace', 
      lineHeight: 1, 
      theme: {
        background: '#000000', 
        foreground: '#00FF00',
        cursor: '#FFFFFF', 
      },
    });
    terminal.open(terminalRef.current);

    terminal.write('Hello from xterm.js!\r\n');

    return () => terminal.dispose();
  }, []);

  return(
    <Container>
      <TerminalWrapper ref={terminalRef} />
    </Container>
  );
};


export default Terminal;

