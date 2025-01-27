import React, { useEffect } from 'react';
import Taskbar from './components/Taskbar.js';
import Desktop from './components/Desktop.js';
import styled from 'styled-components';
import { useClippy } from '@react95/clippy';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css'; // Apply the Windows 95 theme


const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

function App() {
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) {
      clippy.play('GetAttention');
    }
  }, [clippy]);

  return (
    <div>
      <Taskbar />
      <Desktop />
    </div>
  );
}

export default App;

