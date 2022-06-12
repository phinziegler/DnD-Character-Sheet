import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Intro'
import "./SASS/main.css";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const hasData = false;

root.render(
  <React.StrictMode>
    <App 
      hasData={hasData}
    />
  </React.StrictMode>
);