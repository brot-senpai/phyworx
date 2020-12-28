import React from 'react';

import { 
  Vector3, 
  ArcRotateCamera,
  Color3,
  HemisphericLight,
  } from '@babylonjs/core';



import SceneComponent from '../../babylon/sceneComponent';

import GridClass from '../../babylon/grid/gridClass';

import Data from './xsquared.json';
//import Data from './points2.json';
import Rect3D from '../../grapher/rect3D';
import DashBoard from '../../babylon/command/dashBoard';

const CreateLine = scene =>{
  

  const solution = Data.solution;
  const resolution = Data.resolution;
  
  var gridColor = new Color3(1, 1, 1);
  var bgColor = new Color3(0, 0, 0);
  var dbColor = "yellow";

  const gridData = {
    xmin: Data.xinitial,
    ymin: Data.umin,
    zmin: Data.tinitial,
    xmax: Data.xfinal,
    ymax: Data.umax,
    zmax: Data.tfinal,
    resolution: 0.5,
    alpha: 0.5,
    gridColor: gridColor,
  }
  const dz = Data.tfinal - Data.tinitial;

  const worldData = {
    cameraDist: dz,
    backgroundColor: bgColor,
    DBColor:dbColor,
  }
  var grid = new GridClass({scene,gridData});  
  var curve = new Rect3D({scene, solution, resolution});
  var db = DashBoard({scene, worldData})  
  
}




function firstO(){
  
  return(
    <div >
      <SceneComponent style={{display:"block"}} antialias onSceneReady={CreateLine}
        id='pde1sto-canvas' />      
    </div>
  )
}



export default firstO;