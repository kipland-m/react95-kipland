import React, { useEffect, useRef, useState } from 'react';
import { Terminal as XTerm } from 'xterm';
import { Frame, Modal, TitleBar } from '@react95/core';
import styled from 'styled-components';
import { FlyingThroughSpace100 } from '@react95/icons';
import 'xterm/css/xterm.css';
 
 const TerminalWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Terminal = ({isTerminalOpen, closeTerminal}) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new XTerm({
      rendererType: 'dom',
      fontFamily: 'Courier New, monospace',
      theme: {
        background: '#000000',
        foreground: '#00FF00',
        cursor: '#FFFFFF',
      },
    });

    terminal.open(terminalRef.current);

    terminal.write('welcome to the terminal.\r\n');
    terminal.write('this implementation doesn\'t render text correctly.\r\n');
    terminal.write('the awful spacing. it\'s driving me crazy.\r\n> ');

    terminal.onKey(({ key, domEvent }) => {
      if (domEvent.key === 'Enter') {
        terminal.write('\r\n');
        terminal.write('> ');
      } else {
        terminal.write(key);
      }
    });

    return () => terminal.dispose();
  }, []);

  return <>

  { isTerminalOpen && (
  <Modal dragOptions={{
    defaultPosition: {
      x: 120,
      y: 120
    },
  }} 
    width="600px" 
    icon={<FlyingThroughSpace100 variant="16x16_4" />} 
    title="Terminal" 
    titleBarOptions={[<Modal.Minimize key="minimize" />,
    <TitleBar.Close key="close" onClick={closeTerminal}/>
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

