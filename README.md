# **React Router Dom Middleware** &middot; [![npm package][npm-badge]][npm] ![npm](https://img.shields.io/npm/dt/react-router-dom-middleware) ![NPM](https://img.shields.io/npm/l/react-router-dom-middleware)

[npm-badge]: https://img.shields.io/npm/v/react-router-dom-middleware
[npm]: https://www.npmjs.com/package/react-router-dom-middleware

> `react-router-dom-middleware` : is a library that takes the power of `react-router-dom` and encapsulates it, to create a more organized and middleware-protected, routing system within your react application.

## Install

```bash
npm i react-router-dom-middleware
```

## Documentation

In **`react-router-dom-middleware`** there is a main router component called `<RouterView />`. This component is used to render views with middleware.

```typescript
import { RouterView } from 'react-router-dom-middleware';
```

To make `<RouterView />` work, you must pass an array of routes to the `routes` property of the component. There is also a `suspense` property to represent the loading component of views.

If you are coding in `typescript` import the interface from the routes array.

```typescript
import { ICollectionRoute } from 'react-router-dom-middleware';
```

#### **Routes** `routes/index.tsx`

```typescript
import { HomeView, ContactView } from '../views'; // view component import.
import { isLogged } from '../middleware'; // middleware import

export const routes: ICollectionRoute = [
  {
    path: '/',
    name: 'Home',
    element: <HomeView />,
    children: [], // add child routes here.
    meta: {
      middleware: [isLogged], // add middleware functions here.
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    element: <ContactView />,
    meta: {
      middleware: [], // this view has no protection.
    },
  },
];
```

#### **Component `<App />`.**

Your `<App />` component configure the `<RouterView />` component

```typescript
import { routes } from './routes';

export function App(): React.ReactElement {
  return <RouterView routes={routes} suspense={<div>Loading...</div>} />;
}
```

To create a middleware guard on your route, import the interface if you're coding in `typescript`.

#### **Middleware** `middleware/index.ts`

```typescript
import { IMiddlewareFunction } from 'react-router-dom-middleware';
```

Then create a midlleware function taking two parameters as input, the first is a `to` and `from` object, the second is the `next` function where you can tell it if it should change the path or continue its course.

```typescript
export const isLogged: IMiddlewareFunction = ({ to, from }, next) => {
  if (!_auth) next('/login');
  return next();
};
```

## Suggestions

> `react-router-dom-middleware` is ready to use anything from the `react-router-dom` library. You can use `<Link />` simply by importing it.

```typescript
import { Link } from 'react-router-dom-middleware';
```

> This is the folder structure we suggest using:

```txt
/src
  /middleware
    index.ts ----------- # add route protection functions.
  /routes
    index.tsx ---------- # add the routes array.
  /views
    index.tsx ---------- # centralized views.
    home.tsx
    contact.tsx
  app.tsx -------------- # use the <RouterView /> component

```

> So that you can export the components of the views, add them in the file `views/index.tsx`

```typescript
import React, { lazy, LazyExoticComponent } from 'react';

const HomeView: LazyExoticComponent<React.ComponentType<any>> = lazy(() =>
  import('./home')
);
const ContactView: LazyExoticComponent<React.ComponentType<any>> = lazy(() =>
  import('./contact')
);

export { HomeView, ContactView };
```

## License

[MIT](LICENSE)
