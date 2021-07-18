import { ReactElement, MouseEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppRoute, BookmarkType, messageDisplayTime } from "../../../const";
import { useLogin } from '../../../hooks/selectors/use-login';
import { usePostFavoriteStatusMutation } from "../../../services/rtk-api";
import { BookmarkParams } from "../types";
import BookmarkView from "./bookmark-view";
import ErrorMessage from "../error-message";

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

  const onSetFavorite = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (!isAuth) {
      history.push(`/${AppRoute.LOGIN}`);
      return
    }

    const changedStatus = !isFavorite ? 1 : 0;
    const data = {id, status: changedStatus};
    const apiResult = favoriteStatus(data);

    apiResult.unwrap()
    .catch(() => {
      setIsShowError(true);
      setTimeout(()=> setIsShowError(false), messageDisplayTime);
    })
  }

  return (
  <>
  {( isShowError &&
    <ErrorMessage text='Проблема с серверорм. Попробуйте позже'/>
  )}
    <BookmarkView
      onSetFavorite={onSetFavorite}
      type={type}
      isFavorite={isFavorite}
      width={width}
      height={height} />
  </>
  )
}

export default Bookmark;
