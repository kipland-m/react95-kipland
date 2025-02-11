import React, { useState, useContext, useEffect } from 'react';
import Winamp from './Winamp.js';
import Resume from './Resume.js';
import Terminal from './Terminal.js';
import Explorer from './Explorer.js';
import Shortcuts from './Shortcuts.js';
import DataContext from '../utils/context.js';

function Desktop(){
  const data = useContext(DataContext);

  const [isExplorerOpen, toggleExplorerOpen] = useState(false);
  const closeExplorer = () => toggleExplorerOpen(false);
  const openExplorer = () => toggleExplorerOpen(true);

  const [isResumeOpen, toggleResumeOpen] = useState(false);
  const closeResume = () => toggleResumeOpen(false);
  const openResume = () => toggleResumeOpen(true);
  
  const [isTerminalOpen, toggleTerminalOpen] = useState(false);
  const closeTerminal = () => toggleTerminalOpen(false); 
  const openTerminal = () => toggleTerminalOpen(true); 

  useEffect(
    () => {
      toggleExplorerOpen(false);
    }, [data]);
  
  // here we will render icons- or 'shortcuts'
  // we do not have to handle the winamp shortcut in the same way,
  // because all the opening and closing is handled by the library itself. 
  return (
    <React.Fragment>
      <Shortcuts openExplorer={openExplorer} openTerminal={openTerminal} openResume={openResume}/>
      { isExplorerOpen && (
        <Explorer closeExplorer={closeExplorer} />
        )
      }
      { isTerminalOpen && (
        <Terminal closeTerminal={closeExplorer} />
        )
      }
      { isResumeOpen && (
        <Resume closeResume={closeResume} />
        )
      }
      
      <Winamp />
    </React.Fragment>
  );
}

export default Desktop;
