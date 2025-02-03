import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import { Frame, Modal, TitleBar } from '@react95/core';
import styled from 'styled-components';
import { FlyingThroughSpace100 } from '@react95/icons';
import 'xterm/css/xterm.css';
 
 const TerminalWrapper = styled.div`
  width: 588px;  
  height: 355px; 
  overflow: hidden;
`;

const Terminal = () => {
  const terminalRef = useRef(null);
  const [terminalOpen, toggleOpenTerminal] = useState(true);

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

    terminal.write('welcome to the terminal. it does not work correctly yet.\n');

    terminal.onKey(({ key }) => {
      terminal.write(key);
    });

    return () => terminal.dispose();
  }, []);

  return <>

  { terminalOpen && (
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
    <TitleBar.Close key="close" onClick={() => toggleOpenTerminal(false)}/>
    ]}
  >
      <Modal.Content boxShadow="$in" bgColor="black">
        <TerminalWrapper>
            <div ref={terminalRef} style={{ width: '100%', height: '100%' }} />
        </TerminalWrapper>
      </Modal.Content>
    </Modal>
  )}
  </>;
}

export default Terminal;

