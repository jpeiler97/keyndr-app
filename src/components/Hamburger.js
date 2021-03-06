import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  CollectionsBookmark,
  AssignmentTurnedIn,
  Settings,
  RotateLeft,
} from "@material-ui/icons";

import LogoutButton from "./LogOutButton";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#c2ede4",
    justifyContent: "space-between",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(
              classes.menuButton,
              open ? classes.hide : undefined
            )}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography className={classes.title}>KeyndR</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            to="/meetaneed"
            className={location.pathname === "/meetaneed"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <AssignmentTurnedIn />
              </ListItemIcon>
              <ListItemText primary="Fill a Need"></ListItemText>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/commitments"
            className={location.pathname === "/commitments"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <CollectionsBookmark />
              </ListItemIcon>
              <ListItemText primary="My Commitments"></ListItemText>
            </ListItem>
          </Link>
        </List>
        {/* Add after adding Follow stuff */}
        {/* <List>
          <Link
            to="/follow"
            className={location.pathname === "/follow"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText primary="Follow a Registry"></ListItemText>
            </ListItem>
          </Link>
        </List> */}
        <List>
          <Link
            to="/settings"
            className={location.pathname === "/settings"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings"></ListItemText>
            </ListItem>
          </Link>
        </List>
        <List>
          <Link
            to="/changepassword"
            className={location.pathname === "/changepassword"}
            style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <RotateLeft />
              </ListItemIcon>
              <ListItemText primary="Change Password"></ListItemText>
            </ListItem>
          </Link>
        </List>
        <LogoutButton closeDrawer={handleDrawerClose}></LogoutButton>
        <br />
        v5
      </Drawer>
    </div>
  );
}
