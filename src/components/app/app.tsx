import React from 'react';
import MainPage from '../main-page/main-page';

interface Props {
  cardCount: number,
  placesToStay: number,
}

function App({ cardCount, placesToStay }: Props): React.ReactElement {
  return (
    <MainPage
      cardCount={cardCount}
      placesToStay={placesToStay}
    />
  );
}

export default App;
