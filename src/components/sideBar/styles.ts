const drawerWidth = 400;

export const flex = { display: "flex" };

export const drawer = {
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
};

export const drawerPaper = {
  sx: {
    background: "linear-gradient(to bottom, #EBF4FA , #B0CFDE)",
    borderRadius: "0.75rem",
    margin: 5,
  },
};

export const logoTitle = { ...flex, padding: "45px 30px 20px" };

export const logo = { fontSize: 70, color: "#001E3C" };

export const titleBox = { ...flex, alignItems: "center", ml: 2 };

export const title = {
  mt: 1,
  fontWeight: "900",
  color: "#2B547E",
  fontSize: 26,
};

export const divider = {
  borderColor: "#282c34",
  height: "2px",
  margin: "0 20px",
};

export const switchBox = {
  display: "flex",
  justifyContent: "center",
  padding: "30px 30px 10px",
};

export const list = {
  padding: "45px 30px 8px",
  "&& .Mui-selected": {
    color: "#EBF4FA",
    bgcolor: "#282c34",
    borderRadius: "10px",
    "&, & .MuiListItemIcon-root": {
      color: "#EBF4FA",
    },
  },
  "&& .Mui-selected:hover": {
    bgcolor: "#87AFC7",
    borderRadius: "10px",
  },
  "& .MuiListItemButton-root:hover": {
    bgcolor: "#87AFC7",
    borderRadius: "10px",
    "&, & .MuiListItemIcon-root": {
      color: "#2B547E",
    },
  },
};
