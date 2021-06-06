import React from 'react';
import MainPage from '../main-page/main-page';
import { PageMainProps } from '../pages/types';

export default function App({ cardCount, placesToStay }: PageMainProps): React.ReactElement {
  return (
    <MainPage
      cardCount={cardCount}
      placesToStay={placesToStay}
    />
  );
}
