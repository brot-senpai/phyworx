import React from 'react';
import { FreeCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder } from '@babylonjs/core';
import SceneComponent from './sceneComponent';

let box;

const onSceneReady = scene =>{
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;
    box = MeshBuilder.CreateSphere("sphere", {diameter:2,segments:32}, scene);
    box.position.y =1;
    MeshBuilder.CreateGround("ground", {width:6,height:6}, scene);

}

const onRender = scene =>{
    if( box !== undefined){
        var deltaTimeInMillis = scene.getEngine().getDeltaTime();
        const rpm = 10;
        box.rotation.y += ((rpm/60) * Math.PI * 2 * (deltaTimeInMillis/1000));
    }
}

export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        onRender={onRender} id='my-canvas' />
    </div>
)