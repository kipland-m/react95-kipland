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
      toggleExplorerOpen(true);
    }, [data]);

  const closeExplorer = () => {
    toggleExplorerOpen(false);
  };
  const openExplorer = () => {
    toggleExplorerOpen(true);
  };

  // here we will render icons- or 'shortcuts'
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
