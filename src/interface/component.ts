import { BrowserHistory } from "history";
import { CollectionRoute } from "./routes";

export interface RouterViewProps {
  routes: CollectionRoute;
  suspense?: React.ReactElement;
}

export interface RouterMiddlewareProps extends RouterViewProps {
  history: BrowserHistory;
}

export interface RouterListeningProps extends RouterMiddlewareProps {
  onChange: (location: any) => void; 
}
