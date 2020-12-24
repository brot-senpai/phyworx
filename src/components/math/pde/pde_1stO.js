import React from 'react';

import { 
  Vector3, 
  ArcRotateCamera,
  Color3,
  HemisphericLight,
  } from '@babylonjs/core';



import SceneComponent from '../../babylon/sceneComponent';

import GridClass from '../../babylon/grid/gridClass';

//import Data from './xsquared.json';
import Data from './points2.json';
import Ribbon from '../../babylon/shapes/ribbon';
import Rect3D from '../../grapher/rect3D';
import CommandControl from '../../babylon/command/control';
import World from '../../babylon/world/world';
import DashBoard from '../../babylon/command/dashBoard';

const CreateLine = scene =>{
  

  const solution = Data.solution;
  const resolution = Data.resolution;
  const charCurve = Data.umaxcurve;

  const gridData = {
    xmin: Data.xinitial,
    ymin: Data.umin,
    zmin: Data.tinitial,
    xmax: Data.xfinal,
    ymax: Data.umax,
    zmax: Data.tfinal,
    resolution: 0.5,
    alpha: 0.5,
  }

  var db = DashBoard({scene})
  var grid = new GridClass({scene,gridData});
  
  var curve = new Rect3D({scene, solution, resolution});
  

  //Ribbon(scene, solution, charCurve, resolution);
  

  //camera.onViewMatrixChangedObservable.add(function(){console.log(camera.getViewMatrix())})
  
  
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