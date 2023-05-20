export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_PROCESSING_TRUE = "SET_PROCESSING_TRUE";
export const SET_DATA_FAILED = "SET_DATA_FAILED";
export const SET_PROCESSING_FALSE = "SET_PROCESSING_FALSE";

export const setProcessingTrue = () => {
  return {
    type: SET_PROCESSING_TRUE,
  };
};

export const setDataFailed = (data: any) => {
  return {
    type: SET_DATA_FAILED,
    payload: data,
  };
};

export const setProcessingFalse = () => {
  return {
    type: SET_PROCESSING_FALSE,
  };
};

export const setLoginError = (data: any) => {
  return {
    type: SET_LOGIN_ERROR,
    payload: data,
  };
};
