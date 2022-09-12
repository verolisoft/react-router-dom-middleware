import React, { useEffect } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

export function Listening({ routes, history, onChange }) {
  const Routes = () => useRoutes(routes);
  const { pathname } = useLocation();
  const locationCurrent = pathname;

  useEffect(() => {
    return history.listen(({ location, action }) => {
      onChange({ to: location.pathname, from: locationCurrent, action });
    });
  }, [history, locationCurrent, onChange]);

  return <Routes />;
}
