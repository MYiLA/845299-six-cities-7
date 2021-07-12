import { ReactElement } from 'react';

function Spinner(): ReactElement {
  return (
    <div className="cities__places-container container">
      <p className="login__title">
        Loading...
      </p>
    </div>
  );
}

export default Spinner;
