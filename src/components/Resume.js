import React from 'react';
import styled from 'styled-components';
import { List, TaskBar, Modal, Frame, TitleBar } from '@react95/core';
import { FileText } from '@react95/icons';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ScrollableModalContent = styled(Modal.Content)`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
`

const ContactInfo = styled.div`
  font-size: 14px;
`

const JobDetails = styled.div`
  margin-top: 10px;
  font-size: 14px;
`

const JobAccomplishments = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`

function Resume({isResumeOpen, closeResume}) {
    const isMobile = window.innerWidth < 768;

    const modalWidth = isMobile ? '75%':'600px';
    const modalHeight = isMobile ? '60%':'600px';

    return <>

    { isResumeOpen && (
      <Modal dragOptions={{
        defaultPosition: {
          x: 120,
          y: 60
          },
        }} 
      width={modalWidth}
      height={modalHeight}
      icon={<FileText variant="16x16_4" />} 
      title="Kip's Resume" 
      titleBarOptions={[<Modal.Minimize key="minimize" />,
      <TitleBar.Close key="close" onClick={closeResume} />
        ]}>

        <ScrollableModalContent boxShadow="$in" bgColor="white">
          <Frame as="p" lineHeight="1.1rem">
            <h1>Kipland Melton</h1>
            <ContactInfo>
      kiplandmelton@gmail.com | linkedin.com/in/kipland-melton | github.com/kipland-m
            </ContactInfo>

            <JobDetails>
      Full Stack Developer, ECM Tek, LLC (Present)
            </JobDetails>
            
            <JobAccomplishments>
<li>Developed scalable back-end services using FastAPI and Flask to power web applications supporting multiple clients.</li>
<li>Extended front-end functionality in React, enhancing user workflows for both standard and authentication-related processes.</li>
<li>Rebuilt and streamlined authentication workflows using AWS Cognito, ensuring secure user access and API interaction across applications.</li>
<li>Leveraged MongoDB for efficient data storage and retrieval, and built query libraries for clear, optimized database operations across multiple collections.</li>
<li>Designed and implemented CI/CD pipelines, accelerating delivery cycles and reducing deployment errors.</li>
            </JobAccomplishments>

            <JobDetails>
        Computer Science Mentor, Code: You
            </JobDetails> 
            <JobAccomplishments>
        <li>Guided 30+ students through Python, Git, with 90% completing their first project.</li>
            </JobAccomplishments>

            <JobDetails>
        Systems Integration Specialist, Bluegrass Supply Chain
            </JobDetails>            
            <JobAccomplishments>
<li>Designed and implemented Python-based data solutions, developing an API with Flask to handle connecting to many data sources and clients to clean, transform and display data into Excel supporting a team of over 15 accountants.</li>
<li>Successfully integrated new customers into warehouse management systems. Handled API configuration for order systems.</li>
<li>Utilized AutoCAD to create precise floor plans, optimizing warehouse layouts and significantly improving space utilization.</li>

            </JobAccomplishments>

            <JobDetails>
        Open Source Contributions
            </JobDetails>
            <JobAccomplishments>
        <li>Solathon: Added methods to a Python Solana SDK, enhancing blockchain interaction efficiency.</li>
            </JobAccomplishments>

            <JobDetails>
        Technologies and Languages
            </JobDetails>
            <JobAccomplishments>
        <li>Languages: Python, JavaScript, C</li>
        <li>Frameworks & Tools: Flask, FastAPI, React, Django, Docker, CI/CD</li>
        <li>Databases: MongoDB, PostgreSQL, MySQL</li>
        <li>Cloud: AWS (Cognito, Lambda, S3), Google Cloud</li>
        <li>Other: RabbitMQ, AutoCAD, Pandas, Postman, Atlassian Suite (Bitbucket, Jira), OAuth</li>
            </JobAccomplishments>

          </Frame>
        </ScrollableModalContent>

      </Modal>
    )}
    </>;
}

export default Resume;
