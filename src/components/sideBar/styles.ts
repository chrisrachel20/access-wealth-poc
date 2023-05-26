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
    backgroundColor: "#0d1117",
    // borderRight: "1px solid #7F7F7F",
  },
};

export const logoTitle = { ...flex, padding: "45px 30px 20px" };

export const logo = { fontSize: 70, color: "#7F7F7F" };

export const titleBox = { ...flex, alignItems: "center", ml: "5px" };

export const title = {
  mt: 1,
  fontWeight: "900",
  color: "#7F7F7F",
  fontSize: 30,
};

export const divider = {
  borderColor: "#7F7F7F",
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
    color: "#7F7F7F",
  },
  "&& .Mui-selected": {
    color: "white",
    backgroundColor: "#7F7F7F",
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
