import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';

import Home from '../home/home';
//import ThreeApp from '../three_app/threeApp';
import PhysicsWorld from '../babylon/physworld/physworld';
//import BabylonApp from '../babylon/particleSun';
//import Grid from '../babylon/grid';
import DynamicGrid from '../babylon/dynamicGrid';
import GLB from '../babylon/glbLoader';
import Atom from '../../img/atom.svg';
import BabylonIcon from '../../img/babylon_gray2.svg';

import {
    //BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    HashRouter,
  } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'black',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <HashRouter>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Link to="/phyworx" style={{ textDecoration: 'none' }}>
        <ListItem button key='Home'>          
          <ListItemIcon>
              <HomeIcon />
          </ListItemIcon>
          <ListItemText >Home</ListItemText>          
        </ListItem>
        </Link>
        <Link to="/phyworx/babylon" style={{ textDecoration: 'none' }}>
        <ListItem button key='Babylon' >        
          <ListItemIcon >
              <img src={ BabylonIcon } alt="babylonicon" height="25"/>
          </ListItemIcon>
          <ListItemText >Babylon</ListItemText>        
        </ListItem>
        </Link>
        <Divider />
        <Link to="/phyworx/physims" style={{ textDecoration: 'none' }}>
        <ListItem button key='Three'>        
          <ListItemIcon>
              <img src={ Atom } alt="atomicon" height="25"/>
          </ListItemIcon>
          <ListItemText >Physic Sims</ListItemText>        
        </ListItem>
        </Link>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
            
            <Route exact path="/phyworx" >
            <Home />
            </Route>      
            <Route path="/phyworx/babylon" >
              <GLB />
            </Route> 
            <Route path="/phyworx/physims" >
              <PhysicsWorld />
            </Route>        
        </Switch>
        
      </main>
      </HashRouter>
    </div>
  );
}
