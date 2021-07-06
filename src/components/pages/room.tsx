import { ReactElement } from 'react';
import { getRating } from '../../utils/common';
import { useHotel } from '../../utils/selectors/use-hotel';
import Header from '../features/header';
import Comment from '../features/comment';
import CardNearPlaces from '../features/card/card-near-places';
import NewComment from '../features/new-comment';

const isLogged = true;

function Room(): ReactElement {
  const { hotels, hotel } = useHotel();

  // TODO Беда с декомпозицией свойств отеля. Тайпскрипт ругается.
  // Надо подумать, как можно заменить запись типа hotel с вопросом?

  return (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol>
        </svg>
      </div>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {hotel?.images.map((image, idImg) => {
                  const keyValue = `${idImg}-${image}`;
                  return (
                    <div key={keyValue} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="studio" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {hotel?.isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {hotel?.title}
                  </h1>
                  <button className={`property__bookmark-button button ${hotel?.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: getRating(hotel?.rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{hotel?.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {/* TODO подумать как красивее оформить различие текста.
                    Тип пишется с заглавной Apartment. Пока захардкодила */}
                    {hotel?.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {hotel?.bedrooms}
                    {' '}
                    Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max
                    {' '}
                    {hotel?.maxAdults}
                    {' '}
                    adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    €
                    {hotel?.price}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&lsquo;s inside</h2>
                  <ul className="property__inside-list">
                    {hotel?.goods.map((item, idItem) => {
                      const keyValue = `${idItem}-${item}`;
                      return (
                        <li key={keyValue} className="property__inside-item">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${hotel?.host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                      <img className="property__avatar user__avatar" src={hotel?.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {hotel?.host.name}
                    </span>
                    {hotel?.host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {hotel?.description}
                    </p>
                    {/* TODO возможно тут разбиение на абзацы, уточнить в ТЗ
                     <p className="property__text">
                      An independent House, strategically located between Rembrand
                      Square and National Opera, but where the bustle of the city comes
                      to rest in this alley flowery and colorful.
                    </p> */}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews ·
                    {' '}
                    <span className="reviews__amount">1</span>
                  </h2>
                  {/* TODO подключить данные для комментариев */}
                  <ul className="reviews__list">
                    <Comment />
                  </ul>
                  {isLogged && (
                    <NewComment />
                  )}
                </section>
              </div>
            </div>
            <section className="property__map map" />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {/* TODO если карточка в этом городе одна, то её и показывает. нужна заглушка */}
              <div className="near-places__list places__list">
                {hotels.slice(0, 3).map((item) => (
                  <CardNearPlaces
                    key={item.id}
                    cardData={item}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Room;
