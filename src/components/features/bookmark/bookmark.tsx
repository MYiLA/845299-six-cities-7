import {
  ReactElement, MouseEvent, useState, useCallback
} from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppRoute, BookmarkType, MESSAGE_DISPLAY_TIME, MESSAGE_NOT_INTERNET
} from '../../../const';
import useLogin from '../../../hooks/selectors/use-login';
import { usePostFavoriteStatusMutation } from '../../../services/rtk-api';
import { BookmarkParams } from '../types';
import BookmarkView from './bookmark-view';
import ErrorMessage from '../error-message';

const defaultStyle = {
  type: BookmarkType.PROPERTY,
  width: 31,
  height: 33,
};

function Bookmark(params: BookmarkParams): ReactElement {
  const { id, isFavorite, style = defaultStyle } = params;
  const { type, width, height } = style;

  const { isAuth } = useLogin();
  const [isShowError, setIsShowError] = useState(false);
  const history = useHistory();
  const [favoriteStatus] = usePostFavoriteStatusMutation();

  const onSetFavorite = useCallback((evt: MouseEvent<HTMLElement>) => {
    console.log('функция');
    evt.preventDefault();

    if (!isAuth) {
      history.push(`/${AppRoute.LOGIN}`);
      return;
    }

    const changedStatus = !isFavorite ? 1 : 0;
    const data = { id, status: changedStatus };
    const apiResult = favoriteStatus(data);

    apiResult.unwrap()
      .catch(() => {
        setIsShowError(true);
        setTimeout(() => setIsShowError(false), MESSAGE_DISPLAY_TIME);
      });
  }, [isAuth, isFavorite]);

  return (
    <>
      {(isShowError
      && <ErrorMessage text={`Не удалось изменить статус карточки. ${MESSAGE_NOT_INTERNET}`} />
      )}
      <BookmarkView
        onSetFavorite={onSetFavorite}
        type={type}
        isFavorite={isFavorite}
        width={width}
        height={height}
      />
    </>
  );
}

export default Bookmark;
