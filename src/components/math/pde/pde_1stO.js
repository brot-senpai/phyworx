import React from 'react';

import { 
  Vector3, 
  ArcRotateCamera,
  Color3,
  HemisphericLight,
  } from '@babylonjs/core';



import SceneComponent from '../../babylon/sceneComponent';
//import { Locator } from '../../babylon/locator/locator';
import GridGen from '../../babylon/grid/grid';
import GridClass from '../../babylon/grid/gridClass';

//import Data from './xsquared.json';
import Data from './points2.json';
import Ribbon from '../../babylon/shapes/ribbon';
import Axis from '../../babylon/axis/axis';


import CommandControl from '../../babylon/command/control';



const CreateLine = scene =>{
  
  var camera = new ArcRotateCamera("ArcRotateCamera", -.85, .8, 8, 
        new Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 10;
    scene.clearColor = new Color3(0,0,0)
    
    const canvas = scene.getEngine().getRenderingCanvas();
    var currentCanvasSizeWidth = canvas.style.width;
    //console.log(currentCanvasSizeWidth)
var currentCanvasSizeHeight = canvas.style.height;
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(1, 1, 0));//SpotLight("spotLight", new Vector3(0, 4, 0), 
        //new Vector3(0, -1, 0), Math.PI , .5, scene);
  light.diffuse = new Color3(1, 1, 1);
  
  
  CommandControl({scene});

  const solution = Data.solution;
  const resolution = Data.resolution;
  const charCurve = Data.umaxcurve;

  

   /* var c = document.getElementById("pde1sto-canvas");
  
  window.addEventListener('resize', function () {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    scene.getEngine().resize();
  }); */

  const gridData = {
    xmin: Data.xinitial,
    ymin: Data.umin-1,
    zmin: Data.tinitial,
    xmax: Data.xfinal,
    ymax: Data.umax+1,
    zmax: Data.tfinal,
    resolution: 0.5,
    alpha: 0.5,
  }

  var size = 1;
  var grid = new GridClass({scene,gridData});
  


  var axis = Axis({scene, size})
  var axisX = axis[0]
  var xChar = axis[1]
  //var axisY = axis[2]
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
  
  Ribbon(scene, solution, charCurve, resolution);
  //Locator({scene});
  

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