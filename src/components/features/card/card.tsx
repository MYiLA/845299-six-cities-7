import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

// TODO пропсами нужно настраивать вид компонента.
// Сам компонент не знает, где его рендерят. Обёртка передаёт необходимые пераметры через пропсы
// Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения
// самого компонента, а уже во вторую тех компонентов, которые его рендерят.

// Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar)
// или сама по себе достаточно сложная (App, FeedStory, Comment), имеет смысл её вынести
// в независимый компонент.

// Компонент никогда не должен что-то записывать в свои пропсы —
// вне зависимости от того, функциональный он или классовый.

function Card(): React.ReactElement {
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.OFFER}>
          <img className="place-card__image" src="img/apartment-01.jpg" width={260} height={200} alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€120</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.OFFER}>Beautiful &amp; luxurious apartment at great location</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default Card;
