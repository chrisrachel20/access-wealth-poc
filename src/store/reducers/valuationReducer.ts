import { SET_MASTER_DATA } from "../actionCreators/valuation";

const initialState = {
  masterData: {},
};
export const valuationReducer = (
  state = initialState,
  action: { type: any; payload: any; }
) => {
  switch (action.type) {
    case SET_MASTER_DATA:
      return {
        ...state,
        masterData: action.payload,
      };
    default:
      return { ...state };
  }
};
