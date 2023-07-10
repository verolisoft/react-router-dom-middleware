import { BrowserHistory } from "history";
import { CollectionRoute } from "./router";
import { MiddlewareHandle } from "./middleware";

export interface RouterViewProps {
  routes: CollectionRoute;
  suspense?: React.ReactElement;
}

export interface RouterMiddlewareProps extends RouterViewProps {
  history: BrowserHistory;
}

export interface RouterListeningProps extends RouterMiddlewareProps {
  onChange: MiddlewareHandle;
}
