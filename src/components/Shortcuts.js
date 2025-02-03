import React from 'react';
import styled from 'styled-components';
import { WindowsExplorer, MediaCd, FlyingThroughSpace100 } from '@react95/icons';
import startWebamp from '../utils/shortcut-handlers/winamp.js';  

const ShortcutWrapper = styled.div`
  cursor: pointer;
  padding-top: 15px;
  padding-left: 15px;
  &:hover {
    opacity: 30%;
  }
`
const IconWrapper = styled.div`
  margin-right: 10px;
`

function Shortcuts({ openExplorer, openTerminal }) {
  return ( 
    <div>
      <ShortcutWrapper onClick={ openExplorer }>
        <IconWrapper>
          <WindowsExplorer variant="32x32_4" />
        </IconWrapper>
          Explorer
      </ShortcutWrapper>

      <ShortcutWrapper onClick={ openTerminal }>
        <IconWrapper>
          <FlyingThroughSpace100 variant="32x32_4" />
        </IconWrapper>
          Terminal 
      </ShortcutWrapper>

      <ShortcutWrapper onClick={ startWebamp }>
        <IconWrapper>
          <MediaCd variant="32x32_4" />
        </IconWrapper>
          Winamp
      </ShortcutWrapper>

    </div>
  );
}

export default Shortcuts;
