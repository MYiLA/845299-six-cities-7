import { PropsWithChildren, ReactElement } from 'react';
import { ErrorMessageParams } from './types';

function ErrorMessage(params: PropsWithChildren<ErrorMessageParams>): ReactElement {
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
