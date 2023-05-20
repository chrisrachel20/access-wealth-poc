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
import * as Strings from "../../constants/index";
import TerrainIcon from "@mui/icons-material/Terrain";
import { SwitchLabel } from "../switch/index";

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
            background: "linear-gradient(to bottom, #EBF4FA , #B0CFDE)",
            borderRadius: "0.75rem",
            margin: 5,
          },
        }}
      >
        <Box sx={{ display: "flex", padding: "45px 30px 20px" }}>
          <TerrainIcon sx={{ fontSize: 70, color: "#001E3C" }} />
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Typography
              sx={{ mt: 1, fontWeight: "900", color: "#2B547E", fontSize: 26 }}
            >
              {Strings.ACCESS_WEALTH}
            </Typography>
          </Box>
          <Toolbar />
        </Box>
        <Divider
          sx={{ borderColor: "#282c34", height: "2px", margin: "0 20px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 30px 10px",
          }}
        >
          <SwitchLabel />
        </Box>

        <List
          sx={{
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
          }}
        >
          {Strings.SIDEBAR.map((item, index) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 5 }}>
              <ListItemButton
                selected={(location.pathname as any) === item.route}
                component={Link}
                to={item.route}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
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
