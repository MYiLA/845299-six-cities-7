import {
  FormEvent, ReactElement, useCallback, useEffect, useState
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppRoute, MESSAGE_DISPLAY_TIME, RegularExpression, MESSAGE_NOT_INTERNET
} from '../../const';
import { useGetLoginQuery, usePostLoginMutation } from '../../services/rtk-api';
import { getRoute } from '../../utils/common';
import { InputCheckType } from './type';
import Header from '../features/header';
import ErrorMessage from '../features/error-message';

function SignIn(): ReactElement {
  const { refetch } = useGetLoginQuery();
  const [postLogin] = usePostLoginMutation();
  const history = useHistory();
  const [emailCheck, setEmailCheck] = useState<InputCheckType>({
    data: '',
    message: '',
    success: false,
  });
  const [passwordCheck, setPasswordCheck] = useState<InputCheckType>({
    data: '',
    message: '',
    success: false,
  });
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const checkedFormData = (email: string, password: string) => {
    if (!RegularExpression.EMAIL.test(email)) {
      setEmailCheck({
        data: email,
        message: 'Typo in email',
        success: false,
      });
      return;
    }

    setEmailCheck({
      data: email,
      message: '',
      success: true,
    });

    if (!RegularExpression.ONE_SIMBOL.test(password)) {
      setPasswordCheck({
        data: password,
        message: 'Password should not consist of only spaces',
        success: false,
      });
      return;
    }

    setPasswordCheck({
      data: password,
      message: '',
      success: true,
    });
  };

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    checkedFormData(email, password);
  }, []);

  useEffect(() => {
    if (emailCheck.success && passwordCheck.success) {
      const formData = {
        email: emailCheck.data,
        password: passwordCheck.data,
      };
      const apiResult = postLogin(formData);

      apiResult.unwrap().then((user) => {
        sessionStorage.setItem('token', user.token);
        refetch();
        history.push(AppRoute.DEFAULT_CITY);
      })
        .catch(() => {
          setIsShowError(true);
          setTimeout(() => setIsShowError(false), MESSAGE_DISPLAY_TIME);
        });
    }
  }, [postLogin, emailCheck, passwordCheck, history, refetch]);

  return (
    <>
      {(isShowError
      && <ErrorMessage text={`???? ?????????????? ????????????????????????????????????. ${MESSAGE_NOT_INTERNET}`} />
      )}
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol>
          <symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol>
        </svg>
      </div>
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  {(emailCheck.message && <div>{emailCheck.message}</div>)}
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  {(passwordCheck.message && <div>{passwordCheck.message}</div>)}
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={getRoute(AppRoute.DEFAULT_CITY)}>
                  <span>{AppRoute.DEFAULT_CITY}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default SignIn;
