import React from 'react';
import styled from 'styled-components';
import { List, TaskBar, Modal, Frame, TitleBar } from '@react95/core';
import { WindowsExplorer, ReaderClosed, Access219 } from '@react95/icons';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProfileInfo = styled.div`
  font-size: 14px;
`

const ProjectName = styled.a`
  margin-top: 10px;
  font-size: 18px;
`

const ProjectDetails = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`


// <a href="https://github.com/kipland-m"><h1>See my full GitHub</h1></a>
function Projects({closeProjects, isProjectsOpen}) {
    return <>

    { isProjectsOpen && (
    <Modal dragOptions={{
      defaultPosition: {
        x: 120,
        y: 120
      },
    }} 
    width="600px" 
    icon={<Access219 variant="32x32_4" />} 
    title="Kip's Projects" 
    titleBarOptions={[<Modal.Minimize key="minimize" />,
    <TitleBar.Close key="close" onClick={closeProjects} />
      ]}
    >
        <Modal.Content boxShadow="$in" bgColor="white">

          <Frame as="p" lineHeight="1.1rem">
          <ProjectName href="https://github.com/kipland-m/pz-portal">PzPortal</ProjectName>
      <ProjectDetails>
      <li>A blockchain-based message board. Front-end built with React and interacting with Solana via Rust.</li>
      <li>JavaScript (React), Rust (Anchor)
      </li></ProjectDetails>

          <ProjectName href="https://github.com/kipland-m/react95-kipland">ashbringer.us</ProjectName>
      <ProjectDetails>
      <li>This is the repo for this website. You can also find a link in the start menu.</li>
      <li>JavaScript (React)
      </li></ProjectDetails>

          <ProjectName href="https://github.com/kipland-m/homestats">Homestats</ProjectName>
      <ProjectDetails>
      <li>A server-client project that allows you to deploy agents across your network and connect to a central server for displaying hardware information.</li>
      <li>Python (FastAPI, Pygame), Bash</li>
      </ProjectDetails>

          <ProjectName href="https://github.com/kipland-m/cchat">C Chat</ProjectName>
      <ProjectDetails>
      <li>A server-client based project that allows a client to send messages to a server, the server will relay messages throughout connected clients.</li>
      <li>C (socket.h)</li>
      </ProjectDetails>

          <ProjectName href="https://github.com/kipland-m/cs-skin-tool">CS Skin Tool</ProjectName>
      <ProjectDetails>
      <li>A tool that allows a user to view a gallery of Counter-Strike skins. I plan to come back to this to expand functionality.</li>
      <li>JavaScript (React), Python (Django)</li>
      </ProjectDetails>

          <ProjectName href="https://github.com/kipland-m/winscp-transfer">WinSCP Transfer</ProjectName>
      <ProjectDetails>
      <li>A simple tool to automate and schedule FTP transfers.</li>
      <li>Python (TKinter), Bash/CMD (WinSCP interaction)</li>
      </ProjectDetails>


          </Frame>

        </Modal.Content>
      </Modal>
    )}
    </>;
}

export default Projects;
