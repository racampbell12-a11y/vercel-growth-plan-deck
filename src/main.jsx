import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PasswordProtect from './PasswordProtect';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordProtect>
      <App />
    </PasswordProtect>
  </React.StrictMode>,
);
