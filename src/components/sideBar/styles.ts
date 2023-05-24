const drawerWidth = 370;

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
    backgroundColor: "#1B2430",
    borderRight: "1px solid #808080",
  },
};

export const logoTitle = { ...flex, padding: "45px 30px 20px" };

export const logo = { fontSize: 70, color: "#808080" };

export const titleBox = { ...flex, alignItems: "center", ml: "5px" };

export const title = {
  mt: 1,
  fontWeight: "900",
  color: "#808080",
  fontSize: 26,
};

export const divider = {
  borderColor: "#808080",
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
  "& .MuiListItemButton-root, & .MuiListItemIcon-root": {
    color: "#808080",
  },
  "&& .Mui-selected": {
    color: "white",
    backgroundColor: "#808080",
    borderRadius: "10px",
    "&, & .MuiListItemIcon-root": {
      color: "#EBF4FA",
    },
  },
  "&& .Mui-selected:hover": {
    backgroundColor: "#87AFC7",
    borderRadius: "10px",
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "#87AFC7",
    borderRadius: "10px",
    "&, & .MuiListItemIcon-root": {
      color: "#2B547E",
    },
  },
};
