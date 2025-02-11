import React from 'react';
import styled from 'styled-components';
import { List, TaskBar, Modal, Frame, TitleBar } from '@react95/core';
import { FileText } from '@react95/icons';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function Explorer() {
    const [explorer, toggleOpenExplorer] = React.useState(true);
    const closeExplorer = () => toggleOpenExplorer(false); // start defining handler functions like this
    
    // <> denotes a React.Fragment
    return <>

    { explorer && (
    <Modal dragOptions={{
      defaultPosition: {
        x: 120,
        y: 120
      },
    }} 
    width="300px" height="220px" 
    icon={<FileText variant="16x16_4" />} 
    title="Kip's Resume" 
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
