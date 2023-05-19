import { AxiosInstance } from "../../network/axiosInstance";
import { VALUATION } from "../../network/endpoints";

export const SET_MASTER_DATA = "SET_MASTER_DATA";

export const setMasterData = (data: any) => {
  return {
    type: SET_MASTER_DATA,
    payload: data,
  };
};

export const getMasterData = () => async (dispatch: any) => {
  try {
    const response = await AxiosInstance.get(VALUATION);
    dispatch(setMasterData(response.data));
  } catch (err) {
    console.log("error", err);
  }
};
