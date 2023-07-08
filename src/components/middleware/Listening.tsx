import React, { useEffect, Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { IRouterListeningProps } from '../../interface';

export function RouterListening({
  routes,
  history,
  suspense,
  onChange,
}: IRouterListeningProps): React.ReactElement {
  const Routes = () => useRoutes(routes);
  const { pathname } = useLocation();
  const locationCurrent = pathname;

  useEffect(() => {
    return history.listen(({ location, action }) => {
      onChange({ to: location.pathname, from: locationCurrent, action });
    });
  }, [history, locationCurrent, onChange]);

  return (
    <Suspense fallback={suspense}>
      <Routes />
    </Suspense>
  );
}
