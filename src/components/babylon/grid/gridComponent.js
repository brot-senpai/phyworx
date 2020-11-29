import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    HemisphericLight, 
    Color3, 
    } from '@babylonjs/core';
import { AdvancedDynamicTexture, Slider, Control } from "@babylonjs/gui";
import SceneComponent from '../sceneComponent';
import Grid from './grid';
import {Axis} from '../axis/axis';


const onSceneReady = scene =>{
  var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, 
      3 * Math.PI / 8, 30, Vector3.Zero());
  scene.clearColor = Color3.White();
  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
  light.intensity = 0.7;

  
  var psize = 1; 

  var plane = Grid(scene, psize);
  
  
  var planex = plane[0];
  var planey = plane[1];
  var planez = plane[2];
  var grid = plane[3];

/*   var axisX = axis[0];
  var xChar = axis[1];
  var axisY = axis[2];
  var yChar = axis[3];
  var axisZ = axis[4];
  var zChar = axis[5]; */
  
  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    var slider = new Slider();
        slider.minimum = 1;
        slider.maximum = 100;
        slider.value = 1;
        slider.height = "20px";
        slider.width = "200px";
        slider.color = "#003399";
        slider.background = "grey";
        slider.top= "20px";
        slider.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        slider.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        slider.onValueChangedObservable.add(function (value) {
            /* axisX.scaling.x = value/2;
            axisY.scaling.y = value/2;
            axisZ.scaling.z = value/2;
            xChar.scaling.x = value/2;
            xChar.scaling.y = value/2;
            xChar.position.x = value/2;
            yChar.scaling.x = value/2;
            yChar.scaling.y = value/2;
            yChar.position.y = value/2;
            zChar.scaling.x = value/2;
            zChar.scaling.y = value/2;
            zChar.position.x = value/1.85;
            zChar.position.z = value;  */     
            grid.gridRatio = 1/value;
            planex.scaling.x = value;
            planex.scaling.y = value;
            planey.scaling.y = value;
            planey.scaling.x = value;
            planez.scaling.y = value;
            planez.scaling.x = value;
            planex.position.z =value/2;
            planey.position.z = value/2
            planez.position.z = value;
              
            
            
        });
    
    advancedTexture.addControl(slider); 
    Axis(scene, psize);

}


export default function () {
  return(
  <div>
      <SceneComponent antialias onSceneReady={onSceneReady}
      id='my-canvas' />
  </div>
  )
}