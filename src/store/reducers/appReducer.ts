import { SET_SIDEBAR_TEXT } from "../actionCreators/app";

const initialState = {
  appState: {
    sideBar: "dashboard",
  },
};
export const appReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SET_SIDEBAR_TEXT:
      return {
        ...state,
        sideBar: action.payload,
      };
    default:
      return { ...state };
  }
};
