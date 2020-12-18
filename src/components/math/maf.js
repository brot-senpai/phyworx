import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


import {
  Switch,
  Route,
  Link, 
  HashRouter,

} from "react-router-dom";
import { tileData } from './tileData';
import PDE1st from './pde/pde_1stO';

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "black"//theme.palette.primary.light,
  },
  titleBar: {
    background: "white"
      //'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
  },
}));




export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HashRouter>
      <GridList className={classes.gridList} cols={1}>
        {tileData.map((tile) => (
          <Link to={tile.linkPath} key={tile.linkPath} >
          <GridListTile key={tile.img}>
            <img src={tile.img} style={{height:150}}alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
          </Link>
        ))}
      </GridList>
      <main>
        <div >
          
      
        
        <Route path={tileData[0].routePath}>
          <PDE1st />
        </Route>
        
        </div>
        </main>
      </HashRouter>
    </div>
  );
}
