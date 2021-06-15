import React from 'react';
import { Link } from 'react-router-dom';
import { CardType, AppRoute } from '../../const';
import { CardProps } from './types';
import { getRating } from '../../utils/common';

// TODO пропсами нужно настраивать вид компонента.
// Сам компонент не знает, где его рендерят. Обёртка передаёт необходимые пераметры через пропсы
// Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения
// самого компонента, а уже во вторую тех компонентов, которые его рендерят.

// Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar)
// или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести
// в независимый компонент.

// Компонент никогда не должен что-то записывать в свои пропсы —
// вне зависимости от того, функциональный он или классовый.

// воспользоваться useHistory чтобы убрать пропс с типом карточки
// getArticleClass разумно вынести в отдельную настройку.
// Дополнительно, вся эта функция напрашивается в отдельный модуль.
// Кажется, что компилятор не должен вызывать данную функцию каждый рез при рендеринге карточки.
// Если карточка отрендерена, то она уже должна знать, какого она вида.
// То есть настройка идёт извне. Тут мы только пользуемся этой настройкой. В лекции такое было

const getArticleClass = (cardType:string) => {
  switch (cardType) {
    case CardType.CITIES:
      return 'cities__place-card';
    case CardType.FAVORITES:
      return 'favorites__card';
    case CardType.NEAR_PLACES:
      return 'near-places__card';
    default:
      console.error(`Error, unknown card type ${cardType}.`);
      return null;
  }
};

function Card(props: CardProps): React.ReactElement {
  const { cardData, cardType = CardType.CITIES } = props;
  const {
    isPremium, isFavorite, previewImage, price, rating, title, type, id,
  } = cardData;

  return (
    <article className={`${getArticleClass(cardType)} place-card`}>
      {(isPremium && cardType === CardType.CITIES)
      && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/:${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardType === CardType.FAVORITES ? 'favorites__card-info' : ''}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              €
              {price}
            </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {/* TODO isFavorite стейт */}
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
