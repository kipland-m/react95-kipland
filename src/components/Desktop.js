import React, { useState, useContext, useEffect } from 'react';
import Winamp from './Winamp.js';
import Resume from './Resume.js';
import Terminal from './Terminal.js';
import Projects from './Projects.js';
import Explorer from './Explorer.js';
import Shortcuts from './Shortcuts.js';

function Desktop(){
  const [isExplorerOpen, toggleExplorerOpen] = useState(false);
  const [isResumeOpen, toggleResumeOpen] = useState(false);
  const [isProjectsOpen, toggleProjectsOpen] = useState(false);
  const [isTerminalOpen, toggleTerminalOpen] = useState(false);
  const closeResume = () => toggleResumeOpen(false);
  const openResume = () => toggleResumeOpen(true);
  const closeProjects = () => toggleProjectsOpen(false);
  const openProjects = () => toggleProjectsOpen(true);
  
  const closeExplorer = () => {
    if (isExplorerOpen) {
      console.log('Closing Explorer');
      toggleExplorerOpen(false);
    }
  };
  const openExplorer = () => {
    if (!isExplorerOpen) {
      console.log('Opening Explorer');
      toggleExplorerOpen(true);
    }
  };
  const closeTerminal = () => {
    if (isTerminalOpen) {
      console.log('Closing Terminal');
      toggleTerminalOpen(false);
    }
  }; 
  const openTerminal = () => {
    if (!isTerminalOpen) {
      console.log('Opening Terminal');
      toggleTerminalOpen(true);
    }
  }; 

  //  useEffect(
  //    () => {
  //      toggleExplorerOpen(true);
  //    }, [data]);
  
  // here we will render icons- or 'shortcuts'
  // we do not have to handle the winamp shortcut in the same way,
  // because all the opening and closing is handled by the library itself. 
  return (
    <React.Fragment>
      <Shortcuts openExplorer={openExplorer} openTerminal={openTerminal} openResume={openResume} openProjects={openProjects}/>
      { isExplorerOpen && (
        <Explorer isExplorerOpen={isExplorerOpen} closeExplorer={closeExplorer}/>
        )
      }
      { isTerminalOpen && (
        <Terminal isTerminalOpen={isTerminalOpen} closeTerminal={closeTerminal} />
        )
      }
      { isResumeOpen && (
        <Resume isResumeOpen={isResumeOpen} closeResume={closeResume} />
        )
      }
      { isProjectsOpen && (
        <Projects isProjectsOpen={isProjectsOpen} closeProjects={closeProjects} />
        )
      }
      
      <Winamp />
    </React.Fragment>
  );
}

export default Desktop;
