import React from 'react';
import ReactDOM from 'react-dom';
import { ClippyProvider } from '@react95/clippy';
import { DataProvider } from './utils/context';

import './styles/index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <DataProvider>
    <ClippyProvider>
    <App />
    </ClippyProvider>
  </DataProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
