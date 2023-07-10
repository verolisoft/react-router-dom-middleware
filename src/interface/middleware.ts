import { Action } from 'history';
import { RouteInfo } from './router';

export interface NextFunction {
  (path?: string | null): void;
}

export interface MiddlewareFunction {
  ({ to, from }: RouteInfo, next: NextFunction): void;
}

export interface MiddlewareHandle {
  ({ to, from }: RouteInfo, action: Action): void;
}
