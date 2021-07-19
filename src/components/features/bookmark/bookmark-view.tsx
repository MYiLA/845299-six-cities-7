import { ReactElement } from 'react';
import { BookmarkViewParams } from '../types';

function BookmarkView(params: BookmarkViewParams): ReactElement {
  const {
    onSetFavorite, type, isFavorite, width, height,
  } = params;

  return (
    <button
      className={`${type}__bookmark-button button ${isFavorite ? `${type}__bookmark-button--active` : ''}`}
      type="button"
      onClick={onSetFavorite}
    >
      <svg className={`${type}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkView;
