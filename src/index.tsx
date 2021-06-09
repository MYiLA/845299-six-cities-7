import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { hotelsData } from './mocks/hotels';

ReactDOM.render(
  <React.StrictMode>
    <App
      hotelsData={hotelsData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
