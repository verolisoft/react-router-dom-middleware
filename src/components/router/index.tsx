import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory, BrowserHistory } from 'history';

import { RouterMiddleware } from '../middleware';
import { IRouterViewProps } from '../../interface';

export function RouterView({
  routes,
  suspense,
}: IRouterViewProps): React.ReactElement {
  const history: BrowserHistory = createBrowserHistory();
  return (
    <HistoryRouter history={history}>
      <RouterMiddleware history={history} routes={routes} suspense={suspense} />
    </HistoryRouter>
  );
}
