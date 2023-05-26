export const gridStyle = {
  height: "575px",
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

export const text = { fontWeight: "700", color: "#7F7F7F", fontSize: 30 };

export const box = { display: "flex", backgroundColor: '#0d1117', width: '100%',};

export const dashboardBox = {
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  p: 10,
  borderRadius: "50px 0 0 50px",
  borderColor: "#7F7F7F",
  width: '100%',
};

export const divider = {
  borderColor: "#0d1117",
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
    borderColor: "1px solid #7F7F7F",
  },
};

export const drawerPaper = {
  sx: {
    backgroundColor: "#161D27",
    borderLeft: "1px solid #7F7F7F",
  },
};
