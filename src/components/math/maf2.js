import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PDE1st from './pde/pde_1stO';
import {
  Switch,
  Route,
  Link, 
  HashRouter,

} from "react-router-dom";

import pde from '../../img/pde1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  container:{
    paddingTop:50
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.container}>
    <HashRouter>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            1st
          </Avatar>
        }
        title="First Order PDE"
      />
      <Link to="/phyworx/pdefirst">
      <CardMedia
        className={classes.media}
        image={pde}
        title="PDE1"
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          First Order Partial Differential Equations
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details under construction</Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Switch>
      <Route path="/phyworx/pdefirst">
          <PDE1st />
      </Route>
    </Switch>
    </HashRouter>
    </div>
  );
}