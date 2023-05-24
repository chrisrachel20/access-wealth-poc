export const gridStyle = {
  height: "500px",
  width: "500px",
  mr: 5,
  mt: 5,
  mb: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  borderRadius: "30px",
};

export const container = { textAlign: "center", p: 3 };

export const text = { fontWeight: "700", color: "#808080", fontSize: 30 };

export const box = { display: "flex" };

export const dashboardBox = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  p: 10,
  borderRadius: "50px 0 0 50px",
  borderColor: "#808080",
};

export const divider = {
  borderColor: "#808080",
  height: "2px",
  width: "100%",
  mb: 5,
  mt: 5,
};

export const drawer = {
  width: 500,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 500,
    boxSizing: "border-box",
    borderRadius: "50px 0 0 50px",
    borderColor: "1px solid #808080",
  },
};

export const drawerPaper = {
  sx: {
    backgroundColor: "#1B2430",
    borderLeft: "1px solid #808080",
  },
};
