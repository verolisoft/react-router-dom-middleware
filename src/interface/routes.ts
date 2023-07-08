import React from 'react';

interface NextFunction {
  (): void;
}

interface MiddlewareFunction {
  (to: string, from: string, next: NextFunction): void;
}

interface Meta {
  middleware?: Array<MiddlewareFunction>;
}

export interface RouteObject {
  caseSensitive?: boolean;
  children?: Array<RouteObject>;
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  name: string;
  meta: Meta;
}

export interface CollectionRoute extends Array<RouteObject> {}
