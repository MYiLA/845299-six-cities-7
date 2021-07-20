import { PropsWithChildren, ReactElement } from 'react';
import { getRating } from '../../utils/common';
import Header from '../features/header';
import CardNearPlaces from '../features/card/card-near-places';
import CommentsList from '../features/comments-list';
import Map from '../features/map';
import BookmarkProperty from '../features/bookmark/bookmark-property';
import { MAX_IMAGES_IN_ROOM_PAGE } from '../../const';
import HostView from '../features/host-view';
import { RoomViewParams } from './type';

function RoomView(params: PropsWithChildren<RoomViewParams>): ReactElement {
  const { isAuth, hotel, hotels } = params;
  const {
    type: hotelType,
    images,
    isPremium,
    title,
    id: hotelId,
    isFavorite,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
  } = hotel;
  const hotelsInMap = [...hotels, hotel];

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
                {images.slice(0, MAX_IMAGES_IN_ROOM_PAGE).map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt={hotelType} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BookmarkProperty id={hotelId} isFavorite={isFavorite} />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: getRating(rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {hotelType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms}
                    {' '}
                    Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max
                    {' '}
                    {maxAdults}
                    {' '}
                    adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    €
                    {price}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&lsquo;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <HostView host={host}>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </HostView>
                <CommentsList isAuth={isAuth} hotelId={hotelId} />
              </div>
            </div>
            <section className="property__map map">
              <Map activeCity={city} hotels={hotelsInMap} selectedPoint={hotel} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
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

export default RoomView;
