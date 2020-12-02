import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    HemisphericLight, 
    SceneLoader,
    Color3, 
    
    } from '@babylonjs/core';
import SceneComponent from './sceneComponent';
import { GLTFFileLoader } from 'babylonjs-loaders';


const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, 
        3 * Math.PI / 8, 30, Vector3.Zero());
    scene.clearColor = Color3.White();
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;

    
    SceneLoader.RegisterPlugin(new GLTFFileLoader());
    GLTFFileLoader.IncrementalLoading = false;
    
    
   SceneLoader.Append(process.env.PUBLIC_URL + '/assets/', "sol.glb" , scene, function (scene) {
      
      scene.createDefaultCameraOrLight(true, true, true);

      scene.activeCamera.alpha += Math.PI;
    
  });
  

  
  

}




export default function Grid () {
    return(
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
    )
}