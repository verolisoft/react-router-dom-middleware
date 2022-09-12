import { useNavigate } from 'react-router-dom';
import { Listening } from './Listening';

export function MiddlewareRoutes({ history, routes }) {
  const navigate = useNavigate();

  const next = (path = null) => {
    if (!path) return;
    navigate(path, { replace: true });
  };

  const handleMiddleware = ({ to, from }) => {
    for (const parentRoutes of routes) {
      if (from === parentRoutes.path) {
        parentRoutes.meta.middleware.forEach(function (middleware) {
          middleware(to, from, next);
        });
        break;
      }

      for (const childrenRoutes of parentRoutes.children) {
        if (from === `/${childrenRoutes.path}`) {
          childrenRoutes.meta.middleware.forEach(function (middleware) {
            middleware(to, from, next);
          });
          break;
        }
      }
    }
  };

  return (
    <Listening history={history} routes={routes} onChange={handleMiddleware} />
  );
}
