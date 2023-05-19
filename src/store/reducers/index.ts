import { combineReducers } from "redux";
import { valuationReducer } from "./valuationReducer";
import { transactionReducer } from "./transactionReducer";
import { appReducer } from "./appReducer";

const reducers = combineReducers({
  valuationReducer,
  transactionReducer,
  appReducer,
});
export { reducers };
