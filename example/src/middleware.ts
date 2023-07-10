import { IMiddlewareFunction } from 'react-router-dom-middleware';

export const middleware: IMiddlewareFunction = ({to, from}, next) => {
    console.log({ to, from });
  // if (!_auth) next('/login');
  return next();
};
