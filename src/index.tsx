import { StrictMode } from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { InitialStateType } from './store/types';
import { initialState } from './store/reducer';
import App from './components/app/app';

// import { store } from './store/index';
// import { createAPI } from './services/api';
// import { reducer } from './store/reducer';
// import { AuthorizationStatus } from './const';
// import { ActionCreator } from './store/action';
// import { checkAuth, fetchHotelsList } from './store/api-actions';
// import { redirect } from './store/middlewares/redirect';
// TODO удалить комменты
// const api = createAPI(
//   () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
// );

const store = createStore(
  (state: InitialStateType = initialState) => state,
  // composeWithDevTools(
  //   applyMiddleware(thunk.withExtraArgument(api)),
  //   applyMiddleware(redirect),
  // ),
);

// store.dispatch(checkAuth());
// store.dispatch(fetchHotelsList());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
