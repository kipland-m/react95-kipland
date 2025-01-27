import React, { useState, useContext, useEffect } from 'react';
import Winamp from './Winamp.js';
import Explorer from './Explorer.js';
import Shortcuts from './Shortcuts.js';
import DataContext from '../utils/context.js';

function Desktop(){
  const data = useContext(DataContext);

  const [isExplorerOpen, toggleExplorerOpen] = useState(false);

  useEffect(
    () => {
      toggleExplorerOpen(false);
    }, [data]);
  
  // move these modal toggle functions to utils?
  const closeExplorer = () => {
    toggleExplorerOpen(false);
  };
  const openExplorer = () => {
    toggleExplorerOpen(true);
  };

  // here we will render icons- or 'shortcuts'
  // we do not have to handle the winamp shortcut in the same way,
  // because all the opening and closing is handled by the library itself. 
  return (
    <React.Fragment>
      <Shortcuts openExplorer={openExplorer}/>
      { isExplorerOpen && (
        <Explorer closeExplorer={closeExplorer} />
        )
      }
      
      <Winamp />
    </React.Fragment>
  );
}

export default Desktop;
