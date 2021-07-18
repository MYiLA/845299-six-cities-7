import { ReactElement } from 'react';

function ErrorMessage(params: {text: string}): ReactElement {
  const { text } = params;

  return (
    <div className="container fixed">
      <div className="form__submit">
        {text}
      </div>
    </div>
  );
}

export default ErrorMessage;
