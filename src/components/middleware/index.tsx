import React from 'react';
// import { useNavigate } from "react-router-dom";

import { IRouterMiddlewareProps } from '../../interface';
import { RouterListening } from './Listening';

export function RouterMiddleware({
  history,
  routes,
  suspense,
}: IRouterMiddlewareProps): React.ReactElement {
  // const navigate = useNavigate();

  // const next = (path: string | null = null) => {
  //   if (!path) return;
  //   navigate(path, { replace: true });
  // };

  const handleMiddleware = ({ to, from }: { to: string; from: string }) => {
    // console.log(route);
    console.log({ to, from });
    // for (const parentRoutes of routes) {
    //   if (from === parentRoutes.path) {
    //     parentRoutes.meta.middleware.forEach(function (middleware: any) {
    //       middleware(to, from, next);
    //     });
    //     break;
    //   }

    //   for (const childrenRoutes of parentRoutes.children) {
    //     if (from === `/${childrenRoutes.path}`) {
    //       childrenRoutes.meta.middleware.forEach(function (middleware: any) {
    //         middleware(to, from, next);
    //       });
    //       break;
    //     }
    //   }
    // }
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
