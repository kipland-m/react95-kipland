import React from 'react';
import styled from 'styled-components';
import { List, TaskBar, Modal, Frame, TitleBar } from '@react95/core';
import { WindowsExplorer, ReaderClosed } from '@react95/icons';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function Explorer({closeExplorer, isExplorerOpen}) {
    return <>

    { isExplorerOpen && (
    <Modal dragOptions={{
      defaultPosition: {
        x: 120,
        y: 120
      },
    }} 
    width="300px" height="220px" 
    icon={<ReaderClosed variant="16x16_4" />} 
    title="Local Disk (C:)" 
    titleBarOptions={[<Modal.Minimize key="minimize" />,
    <TitleBar.Close key="close" onClick={closeExplorer} />
      ]}
    >
        <Modal.Content boxShadow="$in" bgColor="white">

          <Frame as="p" lineHeight="1.1rem">
            This is a test
          </Frame>

        </Modal.Content>
      </Modal>
    )}
    </>;
}

export default Explorer;
