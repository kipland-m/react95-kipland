import React from 'react';
import Winamp from './Winamp.js';
import Shortcuts from './Shortcuts.js';

function Desktop(){
  // const data = useContext(DataContext);

  // here we will render icons- or 'shortcuts'
  return (
    <React.Fragment>
      <Shortcuts />
      <Winamp />
    </React.Fragment>
  );
}

export default Desktop;
