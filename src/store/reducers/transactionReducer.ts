import { SET_TRANSACTION_DATA } from "../actionCreators/transactions";

const initialState = {
  transactions: {},
};
export const transactionReducer = (
  state = initialState,
  action: { type: any; payload: any; }
) => {
  switch (action.type) {
    case SET_TRANSACTION_DATA:
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return { ...state };
  }
};
