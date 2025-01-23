import React, { useContext } from 'react';
import { TaskBar, List } from '@react95/core';
import DataContext from '../utils/context.js';
import styled from 'styled-components';

function Taskbar() {
  const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo(); 

  console.log(projectRepo, react95Repo);
}

export default Taskbar;
