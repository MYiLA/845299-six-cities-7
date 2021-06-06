import * as React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Urls } from 'src/constants';

export default function NotFound(): React.ReactElement {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        do you want to
        <a href="/">go back?</a>
      </p>
    </div>
  );
}

// NotFoundPage.displayName = 'NotFoundPage';
