import React from 'react';
import styled from 'styled-components';
import { WindowsExplorer, MediaCd } from '@react95/icons';
import startWebamp from '../utils/webamp.js';  


const ShortcutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #e2e2e2;
  }
`
const ShortcutText = styled.div`
  display: flex;
  align-items: center;
`
const IconWrapper = styled.div`
  margin-right: 10px;
`

function Shortcuts({ openExplorer }) {
  return ( 
    <div>
      <ShortcutWrapper onClick={ startWebamp }>
        <IconWrapper>
          <MediaCd variant="32x32_4" />
        </IconWrapper>
        <ShortcutText> 
          Winamp
        </ShortcutText>
      </ShortcutWrapper>
    </div>

  );
}

export default Shortcuts;
