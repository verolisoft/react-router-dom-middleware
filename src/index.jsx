import { unstable_HistoryRouter as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { MiddlewareRoutes } from './middleware';

export function RouterView({ routes }) {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <MiddlewareRoutes history={history} routes={routes} />
    </BrowserRouter>
  );
}
