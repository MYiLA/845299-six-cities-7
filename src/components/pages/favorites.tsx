import { ReactElement } from 'react';
import Header from '../features/header';
import Footer from '../features/footer';
import useFavoritesHotels from '../../hooks/selectors/use-favorites-hotels';
import OffersListLocations from '../features/offers-list-locations';

function Favorites(): ReactElement {
  const hotels = useFavoritesHotels();
  const isEmpty = (hotels.length === 0);

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol>
        </svg>
      </div>
      <div className={`page ${isEmpty ? 'page--favorites-empty' : ''}`}>
        <Header />
        <main className={`page__main ${isEmpty ? 'page__main--favorites-empty' : 'page__main--favorites'}`}>
          <div className="page__favorites-container container">
            {!isEmpty
            && (
              <OffersListLocations hotels={hotels} />
            )}
            {isEmpty
            && (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Favorites;
