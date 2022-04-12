import React from 'react';
/* import ReactDOM from 'react-dom'; */
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalProvider from '../src/context/BookState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
