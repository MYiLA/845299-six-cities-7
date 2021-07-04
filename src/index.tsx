import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
// import { createAPI } from './services/api';
import App from './components/app/app';
// import { reducer } from './store/reducer';
// import { AuthorizationStatus } from './const';
// import { ActionCreator } from './store/action';
// import { checkAuth, fetchHotelsList } from './store/api-actions';
// import { redirect } from './store/middlewares/redirect';

// const api = createAPI(
//   () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
// );

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(thunk.withExtraArgument(api)),
//     applyMiddleware(redirect),
//   ),
// );

// store.dispatch(checkAuth());
// store.dispatch(fetchHotelsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
