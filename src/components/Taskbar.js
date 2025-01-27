import React, { useContext } from 'react';
import { TaskBar, List } from '@react95/core';
import { WindowsExplorer, FolderOpen } from '@react95/icons';
import DataContext from '../utils/context.js';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`;

function Taskbar() {
  const { 
    projectRepo,
    react95Repo 
  } = useContext(DataContext).getProjectInfo(); 

  return (
      <TaskBar 
        list={
          <List>
            <List.Item icon={<WindowsExplorer variant="32x32_4" />}>
              <Link href={react95Repo}>Built with React95</Link>
            </List.Item>
            <List.Divider />
            <List.Item icon={<FolderOpen variant="32x32_4" />}>
              <Link href={projectRepo}>This repo</Link>
            </List.Item>
          </List>
        }
      />
  );
}

export default Taskbar;

