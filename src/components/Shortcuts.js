import React from 'react';
import styled from 'styled-components';
import { WindowsExplorer, MediaCd, FlyingThroughSpace100, FileText, Access219 } from '@react95/icons';
import startWebamp from '../utils/shortcut-handlers/winamp.js';  

const ShortcutWrapper = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-top: 20px;
  padding-left: 15px;
  width: fit-content;
  &:hover {
    opacity: 30%;
    transform: translateX(2px);
  }
`
const IconWrapper = styled.div`
  margin-right: 10px;
`

// Putting this here in case I revisit the explorer 'program'
//      <ShortcutWrapper onClick={ openExplorer }>
//        <IconWrapper>
//          <WindowsExplorer variant="32x32_4" />
//        </IconWrapper>
//          Explorer
//      </ShortcutWrapper>

function Shortcuts({ openExplorer, openTerminal, openResume, openProjects }) {
  return ( 
    <div>
      <ShortcutWrapper onClick={ openResume }>
        <IconWrapper>
          <FileText variant="32x32_4"/>
        </IconWrapper>
          Resume
      </ShortcutWrapper>

      <ShortcutWrapper onClick={ openProjects }>
        <IconWrapper>
          <Access219 variant="32x32_4"/>
        </IconWrapper>
          Projects 
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
