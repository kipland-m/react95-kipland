import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import { Frame, Modal, TitleBar } from '@react95/core';
import styled from 'styled-components';
import { FlyingThroughSpace100 } from '@react95/icons';
import 'xterm/css/xterm.css';
 
 const TerminalWrapper = styled.div`
  width: 600px;  
  height: 355px; 
  padding-right: 20px;
  padding-bottom: 10px;
  color: #00FF00; 
  overflow: hidden;
`;

const Terminal = () => {
  const terminalRef = useRef(null);
  const [terminal, toggleOpenTerminal] = useState(true);
  const closeTerminal = () => toggleOpenTerminal(false);

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

  return <>

  { terminal && (
  <Modal dragOptions={{
    defaultPosition: {
      x: 120,
      y: 120
    },
  }} 
    width="600px" height="400px" 
    icon={<FlyingThroughSpace100 variant="16x16_4" />} 
    title="Terminal" 
    titleBarOptions={[<Modal.Minimize key="minimize" />,
    <TitleBar.Close key="close" onClick={closeTerminal}/>
    ]}
  >
      <Modal.Content>

        <TerminalWrapper ref={terminalRef} />

      </Modal.Content>
    </Modal>
  )}
  </>;
}

export default Terminal;

