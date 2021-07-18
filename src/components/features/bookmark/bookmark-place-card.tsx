import { ReactElement } from 'react';
import { BookmarkParams } from '../types';
import { BookmarkType } from '../../../const';
import Bookmark from './bookmark';

const style = {
  type: BookmarkType.PLACE_CARD,
  width: 18,
  height: 19,
}

function BookmarkPlaceCard(params: BookmarkParams): ReactElement {
  const { id, isFavorite } = params;

  return (
    <Bookmark
      id={id}
      isFavorite={isFavorite}
      style={style}
    />
  );
}

export default BookmarkPlaceCard;
