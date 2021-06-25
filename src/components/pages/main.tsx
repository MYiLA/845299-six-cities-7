import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MainPageProps } from './types';
import Header from '../features/header';
import OffersList from '../features/offersList';

const isEmpty = false;
// TODO переделать на внутреннюю проверку после получения данных
// пока не очень понимаю, как это отформатировать
// export const My:FC<MyProps> = (p)=>{ const {propA, propB} = p;}
function Main(props: MainPageProps): React.ReactElement {
  const { hotelsData } = props;

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <Header />
        <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.MAIN}>
                    <span>Paris</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.MAIN}>
                    <span>Cologne</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.MAIN}>
                    <span>Brussels</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item tabs__item--active" to={AppRoute.MAIN}>
                    <span>Amsterdam</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.MAIN}>
                    <span>Hamburg</span>
                  </Link>
                </li>
                <li className="locations__item">
                  <Link className="locations__item-link tabs__item" to={AppRoute.MAIN}>
                    <span>Dusseldorf</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            {!isEmpty
            && (
              <OffersList hotelsData={hotelsData} />
            )}
            {isEmpty
            && (
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section" />
              </div>
            )}
          </div>
        </main>

      </div>
    </>
  );
}

export default Main;