import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './style/index.css';
import { Provider } from './components/provider/Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Router />
    </Provider>
  </React.StrictMode>,
);
