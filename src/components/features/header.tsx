import {
  ReactElement, MouseEvent, CSSProperties, useState, useCallback
} from 'react';
import useLogin from '../../hooks/selectors/use-login';
import { api } from '../../services/rtk-api';
import HeaderView from './header-view';
import { MESSAGE_DISPLAY_TIME, MESSAGE_NOT_INTERNET } from '../../const';
import ErrorMessage from './error-message';

function Header(): ReactElement {
  const { data, isAuth, refetch } = useLogin();
  const [deleteLogout] = api.endpoints.deleteLogout.useMutation();
  const [isShowError, setIsShowError] = useState<boolean>(false);

  const onSignOut = useCallback((evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const apiResult = deleteLogout();
    apiResult.unwrap()
      .catch(() => {
        setIsShowError(true);
        setTimeout(() => setIsShowError(false), MESSAGE_DISPLAY_TIME);
      }).finally(() => {
        sessionStorage.removeItem('token');
        refetch();
      });
  }, [isAuth]);

  const avatarStyles = {
    backgroundImage: `url(${data?.avatarUrl})`,
  } as CSSProperties;

  return (
    <>
      {(isShowError
        && <ErrorMessage text={`${MESSAGE_NOT_INTERNET} Не беспокойтесь о ваших данных. Мы их успешно очистили :-)`} />
      )}
      <HeaderView
        isAuth={isAuth}
        avatarStyles={avatarStyles}
        email={data?.email}
        onSignOut={onSignOut}
      />
    </>
  );
}

export default Header;
