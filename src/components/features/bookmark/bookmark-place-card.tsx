import { ReactElement } from 'react';
import { BookmarkParams } from '../types';
import { BookmarkType } from '../../../const';
import Bookmark from './bookmark';

function BookmarkPlaceCard(props: BookmarkParams): ReactElement {
  const { id, isFavorite } = props;

  const style = {
    type: BookmarkType.PLACE_CARD,
    width: 18,
    height: 19,
  }

  return (
    <Bookmark
      id={id}
      isFavorite={isFavorite}
      style={style}
    />
  );
}

export default BookmarkPlaceCard;
