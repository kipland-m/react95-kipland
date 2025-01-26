import React, { useState, useContext, useEffect } from 'react';
import DataContext from '../utils/context.js';

function Desktop(){
  const data = useContext(DataContext);

  // here we will render icons- or 'shortcuts'
  return (
    <div>
      icon be here
    </div>
  );
}

export default Desktop;
