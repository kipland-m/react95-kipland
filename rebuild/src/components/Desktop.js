import React, { useState, useContext, useEffect } from 'react';
import Winamp from './Winamp.js';
import Shortcuts from './Shortcuts.js';
import DataContext from '../utils/context.js';

function Desktop(){
  const data = useContext(DataContext);

  // here we will render icons- or 'shortcuts'
  return (
    <React.Fragment>
        <div>
          icon be here
        </div>
      <Shortcuts />
      <Winamp />
    </React.Fragment>
  );
}

export default Desktop;
