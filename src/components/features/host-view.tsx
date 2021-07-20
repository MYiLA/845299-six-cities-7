import { PropsWithChildren, ReactElement } from 'react';
import { HostParams } from './types';

function HostView(params: PropsWithChildren<HostParams>): ReactElement {
  const {
    host,
    children,
  } = params;

  const { avatarUrl, isPro, name } = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''}`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt={`Avatar ${name}`} />
        </div>
        <span className="property__user-name">
          {name}
        </span>
        {isPro && (
          <span className="property__user-status">
            Pro
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default HostView;
