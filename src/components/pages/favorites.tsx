import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, CardType } from '../../const';
import { FavoritesPageProps } from './types';
import Header from '../features/header';
import Footer from '../features/footer';
import Card from '../features/card';
// TODO импортировать карточки и заменить их после лекции про хуки
// import CardPage from '../features/card';
// {new Array(cardCount).fill('card').map((item, id) => (
//   <CardPage key={`${item}-${id + 1}`} />
// ))}

// TODO поправить форматирование
// из "очень" важного - interface - ы в отдельные файлы
// из best practice
// import (что нужно) from 'react'
// и export const My:FC<MyProps> = (p)=>{ const {propA, propB} = p;}

export default function Favorites(props: FavoritesPageProps): React.ReactElement {
  const { hotelsData } = props;
  const isEmpty = (hotelsData.length === 0);

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
              // TODO разнести карточки по городам и отрендерить для каждого города свой блок
              // выделить город в отдельный компонент
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoute.MAIN}>
                          <span>Amsterdam</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {hotelsData.map((item) => (
                        <Card
                          key={item.id}
                          cardData={item}
                          cardType={CardType.FAVORITES}
                        />
                      ))}
                    </div>
                  </li>
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoute.OFFER}>
                          <span>Cologne</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {hotelsData.map((item) => (
                        <Card
                          key={item.id}
                          cardData={item}
                          cardType={CardType.FAVORITES}
                        />
                      ))}
                    </div>
                  </li>
                </ul>
              </section>
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
