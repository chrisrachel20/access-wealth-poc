import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Typography,
  Box,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import * as Strings from "../../constants/index";

const drawerWidth = 400;

export const SideBar = (props: any) => {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "#EBF4FA",
          },
        }}
      >
        <Box sx={{ display: "flex", padding: "45px 50px 8px" }}>
          <Toolbar />
          <Typography variant="h5" sx={{ mt: 1, fontWeight: "700", color: '#2B547E' }}>
            {Strings.ACCESS_WEALTH}
          </Typography>
          <Toolbar />
        </Box>
        <Divider
          sx={{ borderColor: "#282c34", height: "2px", margin: "0 20px" }}
        />
        <List
          sx={{
            padding: "45px 50px 8px",
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
          }}
        >
          {Strings.SIDEBAR.map((item, index) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 5 }}>
              <ListItemButton
                selected={(location.pathname as any) === item.route}
                component={Link}
                to={item.route}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <DashboardIcon /> : <LineAxisIcon />}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 24 }}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Outlet />
      </Drawer>
    </Box>
  );
};
