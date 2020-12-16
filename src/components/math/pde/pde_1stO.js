import React from 'react';
import { DynamicGrid } from '../../babylon/dynamicGrid';
import { 
  Vector3, 
  ArcRotateCamera,
  HemisphericLight,
  Color3,
  } from '@babylonjs/core';

import SceneComponent from '../../babylon/sceneComponent';
import {points} from './points2';


const CreateLine = (scene) =>{
  var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, 
        3 * Math.PI / 8, 30, Vector3.Zero());
    scene.clearColor = Color3.White();
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;
  
  //var point = points[10]
  //let lines = MeshBuilder.CreateLines("lines", {points:points[2]}, scene);
  //lines.color = new Color3.Black();
  var data = [
    {
      xlength:20,
      tlength:11,
      ylength:5,
      interval:0.5,
    },
    {
      lines:points,
    }
  ];
  
  DynamicGrid({scene, data});
}

function firstO(){
  
  return(
    <div >
      <div style={{color:"black"}}>
        
        
      </div>      
      
      <SceneComponent style={{display:"block"}} antialias onSceneReady={CreateLine}
        id='my-canvas' />
      
    </div>
  )
}



export default firstO;