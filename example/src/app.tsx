import * as React from 'react';
import { RouterView, Link, ICollectionRoute } from 'react-router-dom-middleware';
import { middleware } from './middleware';

export const routes: ICollectionRoute = [
  {
    path: '/',
    name: 'Home',
    element: (
      <>
        <Link to="/contact">Contact</Link>
        <h1>Pagina principal 'Home'</h1>
      </>
    ),
    meta: {
      middleware: [middleware],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    element: (
      <>
        <Link to="/">Home</Link>
        <h2>Pagina de contacto 'Contact'</h2>
      </>
    ),
    meta: {
      middleware: [middleware],
    },
  },
  {
    path: '/about',
    name: 'About',
    element: (
      <>
        <Link to="/home">Contact</Link>
        <h1>Acerca de 'About'</h1>
      </>
    ),
    meta: {
      middleware: [middleware],
    },
  },
];

export function App(): React.ReactElement {
  return <RouterView routes={routes} suspense={<div>Loading...</div>} />;
}
