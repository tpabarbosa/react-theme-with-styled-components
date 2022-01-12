import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemedApp } from './Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemedApp>
      <App />
    </ThemedApp>
  </React.StrictMode>,
  document.getElementById('root')
);

