import React from 'react';
import styled from 'styled-components';
import { List, TaskBar, Modal, Frame, TitleBar } from '@react95/core';
import { FileText } from '@react95/icons';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    return <>

    { isResumeOpen && (
      <Modal dragOptions={{
        defaultPosition: {
          x: 120,
          y: 120
          },
        }} 
      width="600px" height="400px" 
      icon={<FileText variant="16x16_4" />} 
      title="Kip's Resume" 
      titleBarOptions={[<Modal.Minimize key="minimize" />,
      <TitleBar.Close key="close" onClick={closeResume} />
        ]}>

        <Modal.Content boxShadow="$in" bgColor="white">
          <Frame as="p" lineHeight="1.1rem">
            <h1>Kipland Melton</h1>
            <ContactInfo>
      kiplandmelton@gmail.com | linkedin.com/in/kipland-melton | github.com/kipland-m
            </ContactInfo>

            <JobDetails>
      Full Stack Developer, ECM Tek, LLC (Present)
            </JobDetails>
            
            <JobAccomplishments>
      <li>Built scalable backend services with FastAPI and Flask, powering web apps for 5+ clients with 99.9% uptime.</li>
      <li>Enhanced React frontend functionality, improving user workflows and authentication processes.</li>
      <li>Rebuilt authentication workflows using AWS Cognito, ensuring secure access for 100+ users.</li>
      <li>Optimized MongoDB queries, reducing data retrieval time by 15%.</li>
      <li>Designed CI/CD pipelines, cutting deployment errors by 25%.</li>
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
        <li>Developed a Flask API to connect 10+ data sources, streamlining data transformation into Excel.</li>
        <li>Integrated 10+ customers into WMS, reducing onboarding time by 20%.</li>  
        <li>Created AutoCAD floor plans, improving warehouse space utilization by 30%.</li>  
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
        </Modal.Content>

      </Modal>
    )}
    </>;
}

export default Resume;
