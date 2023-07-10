import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IRouteObject } from '../../interface';
import { RouteFindByPath } from '../../utils';
import { RouterListening } from './Listening';

import {
  IRouterMiddlewareProps,
  IMiddlewareHandle,
  IMiddlewareFunction,
  INextFunction,
} from '../../interface';

export function RouterMiddleware({
  history,
  routes,
  suspense,
}: IRouterMiddlewareProps): React.ReactElement {
  const navigate = useNavigate();

  /**
   * next function to continue with the route.
   * @param path pass the path or leave it null.
   * @returns empty return.
   */
  const next: INextFunction = (path = null) => {
    if (!path) return;
    navigate(path, { replace: true });
  };

  const handleMiddleware: IMiddlewareHandle = ({ to, from }) => {
    const pathFound: IRouteObject = RouteFindByPath(to, routes);

    pathFound.meta.middleware.forEach((middleware: IMiddlewareFunction) => {
      middleware({ to, from }, next);
    });
  };

  return (
    <RouterListening
      history={history}
      routes={routes}
      suspense={suspense}
      onChange={handleMiddleware}
    />
  );
}
