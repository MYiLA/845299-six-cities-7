import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARD_COUNT: 5,
  PLACES_TO_STAY: 200,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardCount={Setting.CARD_COUNT}
      placesToStay={Setting.PLACES_TO_STAY}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
