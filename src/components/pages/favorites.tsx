import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
// TODO импортировать карточки и заменить их после лекции про хуки
// import CardPage from '../features/card/card';
// {new Array(cardCount).fill('card').map((item, id) => (
//   <CardPage key={`${item}-${id + 1}`} />
// ))}

// TODO поправить форматирование
// из "очень" важного - interface - ы в отдельные файлы
// из best practice
// import (что нужно) from 'react'
// и export const My:FC<MyProps> = (p)=>{ const {propA, propB} = p;}
const isEmpty = false;

export default function Favorites(): React.ReactElement {
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
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.LOGIN}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className={`page__main ${isEmpty ? 'page__main--favorites-empty' : 'page__main--favorites'}`}>
          <div className="page__favorites-container container">
            {!isEmpty
            && (
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
                      <article className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={AppRoute.OFFER}>
                            <img className="place-card__image" src="img/apartment-small-03.jpg" width={150} height={110} alt="Place" />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€180</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width={18} height={19}>
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: '100%' }} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={AppRoute.OFFER}>Nice, cozy, warm big bed apartment</Link>
                          </h2>
                          <p className="place-card__type">Apartment</p>
                        </div>
                      </article>
                      <article className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={AppRoute.OFFER}>
                            <img className="place-card__image" src="img/room-small.jpg" width={150} height={110} alt="Place" />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€80</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width={18} height={19}>
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: '80%' }} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={AppRoute.OFFER}>Wood and stone place</Link>
                          </h2>
                          <p className="place-card__type">Private room</p>
                        </div>
                      </article>
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
                      <article className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={AppRoute.OFFER}>
                            <img className="place-card__image" src="img/apartment-small-04.jpg" width={150} height={110} alt="Place" />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€180</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width={18} height={19}>
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: '100%' }} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={AppRoute.OFFER}>White castle</Link>
                          </h2>
                          <p className="place-card__type">Apartment</p>
                        </div>
                      </article>
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
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.MAIN}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </>
  );
}
