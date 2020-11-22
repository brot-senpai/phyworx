import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    Color3, 
    ParticleHelper} from '@babylonjs/core';
import SceneComponent from './sceneComponent';



const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("ArcRotateCamera", 1, 0.8, 5, 
        new Vector3(0, 0, 0), scene);
    //camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = 2.5;
    camera.upperRadiusLimit = 10;
    camera.pinchDeltaPercentage = 0.01;
    camera.wheelDeltaPercentage = 0.01;

    scene.clearColor = new Color3(0.0, 0.0, 0.0);

    ParticleHelper.CreateAsync("sun", scene).then((set) => {
        set.start();
    });

}


export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
)