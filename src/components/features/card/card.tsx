import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { CardType, AppRoute } from '../../../const';
import { CardParams } from '../types';
import { getRating, getRoute } from '../../../utils/common';
import BookmarkPlaceCard from '../bookmark/bookmark-place-card'

// TODO
// Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar)
// или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести
// в независимый компонент.
const imgSizeDefault = {
  width: 260,
  height: 200,
}

function Card(props: CardParams): ReactElement {
  const {
    cardData,
    cardType = CardType.CITIES,
    className,
    children,
    imgSize = imgSizeDefault,
    onMouseOver,
  } = props;

  const {
    isFavorite, previewImage, price, rating, title, type, id,
  } = cardData;

  return (
    <article
      className={`place-card ${className}`}
      role="button"
      tabIndex={0}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
    >
      {/* TODO поправить отображение при снятии мышки и настроить отображение текущего норода в карточке на карте */}

        {children}
        <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
          <Link to={getRoute(AppRoute.OFFER, id)}>
            <img
              className="place-card__image"
              src={previewImage}
              width={imgSize.width}
              height={imgSize.height}
              alt="Place"
            />
          </Link>
        </div>
        <div className={`place-card__info ${cardType === CardType.FAVORITES ? 'favorites__card-info' : ''}`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">
                &euro;{price}
              </b>
              <span className="place-card__price-text">
                &#47;&nbsp;night
              </span>
            </div>
            <BookmarkPlaceCard id={id} isFavorite={isFavorite} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: getRating(rating) }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={getRoute(AppRoute.OFFER, id)}>{title}</Link>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>

    </article>
  );
}

export default Card;
