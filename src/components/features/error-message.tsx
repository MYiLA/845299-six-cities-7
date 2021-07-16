import { ReactElement } from 'react';

function ErrorMessage({ text }: { text: string } ): ReactElement {
  return (
    <div className="container fixed">
      <div className="form__submit">
        {text}
      </div>
    </div>
  );
}

export default ErrorMessage;
