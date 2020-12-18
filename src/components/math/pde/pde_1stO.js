import React from 'react';

import { 
  Vector3, 
  ArcRotateCamera,
  Color3,
  SpotLight,
  HemisphericLight
  } from '@babylonjs/core';

import SceneComponent from '../../babylon/sceneComponent';
//import {data} from './points3';
import GridGen from '../../babylon/grid/grid';
import Data from './points1.json';
import Ribbon from '../../babylon/shapes/ribbon';
import Axis from '../../babylon/axis/axis';

const CreateLine = (scene) =>{
  var camera = new ArcRotateCamera("ArcRotateCamera", -.85, .8, 8, 
        new Vector3(0, 0, 0), scene);
    scene.clearColor = Color3.Black();
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(1, 1, 0));//SpotLight("spotLight", new Vector3(0, 4, 0), 
        //new Vector3(0, -1, 0), Math.PI , .5, scene);
	light.diffuse = new Color3(1, 1, 1);

  const solution = Data.solution;
  const resolution = Data.resolution;
  const charCurve = Data.umaxcurve;
  
  const gridData = {
    xmin: Data.xinitial,
    ymin: Data.umin-1,
    zmin: Data.tinitial,
    xmax: Data.xfinal,
    ymax: Data.umax+1,
    zmax: Data.tfinal,
    resolution: 0.5,
  }

  var size = 1;
  var grid = GridGen({scene,gridData});
  
  var xyGrid = grid[0];
  var xzGrid = grid[1];
  var yzGrid = grid[2];
  xyGrid.alpha = 0.2;
  xzGrid.alpha = 0.2;
  yzGrid.alpha = 0.2; 

  var axis = Axis({scene, size})
  var axisX = axis[0]
  var xChar = axis[1]
  var axisY = axis[2]
  var yChar = axis[3]
  var axisZ = axis[4] 
  var zChar = axis[5] 
  axisX.scaling.x = Data.xfinal;
  axisZ.scaling.z = Data.tfinal;
  xChar.scaling.x = 2;
  xChar.scaling.y = 2;
  xChar.position.x = Data.xfinal + .5;
  yChar.scaling.x = 2;
  yChar.scaling.y = 2;
  yChar.position.y = Data.umax + .5;
  zChar.scaling.x = 2;
  zChar.scaling.y = 2;
  zChar.position.x = Data.xfinal + .5;
  zChar.position.z = Data.tfinal + .5;  
  
  var ribbon = Ribbon(scene, solution, charCurve, resolution);
  
}




function firstO(){
  
  return(
    <div >
      <SceneComponent style={{display:"block"}} antialias onSceneReady={CreateLine}
        id='my-canvas' />      
    </div>
  )
}



export default firstO;