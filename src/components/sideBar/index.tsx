import { Link, Outlet } from "react-router-dom";
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
import * as styles from "./styles";

export const SideBar = (props: any) => {
  const location = props;

  return (
    <Box sx={styles.flex}>
      <Drawer
        sx={styles.drawer}
        variant="permanent"
        anchor="left"
        PaperProps={styles.drawerPaper}
      >
        <Box sx={styles.logoTitle}>
          <TerrainIcon sx={styles.logo} />
          <Box sx={styles.titleBox}>
            <Typography sx={styles.title}>{Strings.ACCESS_WEALTH}</Typography>
          </Box>
          <Toolbar />
        </Box>
        <Divider sx={styles.divider} />
        <Box sx={styles.switchBox}>
          <SwitchLabel />
        </Box>

        <List sx={styles.list}>
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
