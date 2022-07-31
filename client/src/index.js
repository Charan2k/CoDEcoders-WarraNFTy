import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://kkecxpvsth9u.usemoralis.com:2053/server" appId="xOy6sC2R1nfuZXDB3582g7dZAiEEE4Uc43ZBOfzb">
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
