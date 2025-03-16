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
 & .xterm .xterm-rows span {
    letter-spacing: 0 !important;
    font-kerning: none !important;
  }
`;

const ScrollableModalContent = styled(Modal.Content)`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
`

const Terminal = ({isTerminalOpen, closeTerminal}) => {
  const isMobile = window.innerWidth < 768;

  const modalWidth = isMobile ? '75%':'600px';
  const modalHeight = isMobile ? '60%':'300px';

  const terminalRef = useRef(null);

  useEffect(() => {
    const terminal = new XTerm({
      rendererType: 'dom',
      fontFamily: 'Courier New, monospace',
      scrollback: 0,
      theme: {
        background: '#000000',
        foreground: '#00FF00',
        cursor: '#FFFFFF',
      },
    });

    terminal.open(terminalRef.current);

    terminal.write('welcome to the terminal.\r\n> ');

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
    width={modalWidth}
    height={modalHeight}
    icon={<FlyingThroughSpace100 variant="16x16_4" />} 
    title="Terminal" 
    titleBarOptions={[<Modal.Minimize key="minimize" />,
    <TitleBar.Close key="close" onClick={closeTerminal}/>
    ]}
  >
      <ScrollableModalContent boxShadow="$in" bgColor="black">
        <TerminalWrapper>
            <div ref={terminalRef}  />
        </TerminalWrapper>
      </ScrollableModalContent>
    </Modal>
  )}
  </>;
}

export default Terminal;

