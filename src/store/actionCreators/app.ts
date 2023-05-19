export const SET_SIDEBAR_TEXT = "SET_SIDEBAR_TEXT";

export const setSideBarText = (data: any) => {
  return {
    type: SET_SIDEBAR_TEXT,
    payload: data,
  };
};
