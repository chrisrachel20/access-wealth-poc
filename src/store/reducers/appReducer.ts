import {
  SET_PROCESSING_TRUE,
  SET_LOGIN_ERROR,
  SET_PROCESSING_FALSE,
} from "../actionCreators/app";

const initialState = {
  isProcessing: false,
};
export const appReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_PROCESSING_TRUE:
      return {
        ...initialState,
        isProcessing: true,
      };
    case SET_PROCESSING_FALSE:
      return {
        ...initialState,
        isProcessing: false,
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return { ...state };
  }
};
