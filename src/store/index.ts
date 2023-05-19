import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

let middleware = [thunk, logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
