import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
//import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
import PDE1st from './pde/pde_1stO';
import { tileData } from './tileData';

import {
  Switch,
  Route,
  Link, 
  HashRouter,
  useRouteMatch,
  useParams
} from "react-router-dom";

var w = window.innerWidth;
var h = window.innerHeight;
const useStyles = makeStyles((theme) => ({
  root: {
    width:w,
    height:h,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
  const classes = useStyles();
  let match = useRouteMatch();
  return (
    <div>
      <HashRouter>
    <div className={classes.root}>
      
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <Link to={tile.linkPath} key={tile.linkPath} >
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
            />
          </GridListTile>
          </Link>
        ))}
      </GridList>
      <Switch>
        
        <Route path={tileData[0].routePath}>
          <PDE1st />
        </Route>
      </Switch>      
      
    </div>
          
    </HashRouter>
    </div>
  );
}
