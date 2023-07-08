import * as React from 'react';

import { BrowserRouter, Link } from 'react-router-dom';
import { RouterView, ICollectionRoute } from '../../src';

export const routes: ICollectionRoute = [
  {
    path: '/',
    name: 'Home',
    element: (
      <>
        <Link to="/contact">Contact</Link>
        <h1>Pagina principal "Home"</h1>
      </>
    ),
    meta: {
      middleware: [],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    element: (
      <>
        <Link to="/">Home</Link>
        <h2>Pagina de contacto "Contact"</h2>
      </>
    ),
    meta: {
      middleware: [],
    },
  },
];

export function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <RouterView routes={routes} suspense={<div>Loading...</div>} />
    </BrowserRouter>
  );
}
