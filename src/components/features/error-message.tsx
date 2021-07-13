import { ReactElement } from 'react';

function ErrorMessage({ text }: { text: string } ): ReactElement {
  return (
    <div className="container fixed">
      <div className="locations__item-link tabs__item--active">
        {text}
      </div>
    </div>
  );
}

export default ErrorMessage;
