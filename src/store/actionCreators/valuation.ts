import { AxiosInstance } from "../../network/axiosInstance";
import { VALUATION } from "../../network/endpoints";

export const SET_MASTER_DATA = "SET_MASTER_DATA";

export const setMasterData = (data: any) => {
  return {
    type: SET_MASTER_DATA,
    payload: data,
  };
};

export const getMasterData = (data?: any) => async (dispatch: any) => {
  try {
    const params = {
      currencyCode: data,
    };
    const response = await AxiosInstance.get(VALUATION, { params });
    dispatch(setMasterData(response.data));
  } catch (err) {
    console.log("error", err);
  }
};
