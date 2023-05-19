import { AxiosInstance } from "../../network/axiosInstance";
import { TRANSACTIONS } from "../../network/endpoints";

export const SET_TRANSACTION_DATA = "SET_TRANSACTION_DATA";

export const setTransactionData = (data: any) => {
  return {
    type: SET_TRANSACTION_DATA,
    payload: data,
  };
};

export const getTransactions = () => async (dispatch: any) => {
  try {
    const response = await AxiosInstance.get(TRANSACTIONS);
    dispatch(setTransactionData(response.data));
  } catch (err) {
    console.log("error", err);
  }
};
