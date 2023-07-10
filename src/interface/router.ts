import { ReactNode } from 'react';
import { MiddlewareFunction } from './middleware';

interface Meta {
  middleware: Array<MiddlewareFunction>;
}

export interface RouteInfo {
  to: string;
  from: string;
}

export interface RouteObject {
  children?: Array<RouteObject>;
  element?: ReactNode;
  path: string;
  name: string;
  meta: Meta;
}

export interface CollectionRoute extends Array<RouteObject> {}
