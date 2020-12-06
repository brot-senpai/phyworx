import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    Color3, 
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Texture,
    BackgroundMaterial, 
    } from '@babylonjs/core';
import { GridMaterial } from "@babylonjs/materials/grid";
import SceneComponent from '../sceneComponent';
import * as CANNON from 'cannon';
import Collision from './collision';
window.CANNON = CANNON;

const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("ArcRotateCamera", 4.7, 1.2, 12, 
        new Vector3(0, 0, 0), scene);
    camera.setTarget(Vector3.Zero());
    const light = new HemisphericLight("light", new Vector3(1, 1, 0));
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var gravityVector = new Vector3(0, 0, 0);
    scene.enablePhysics(gravityVector);
    
      
    var skyMaterial = new GridMaterial("skyMaterial", scene);
      skyMaterial.majorUnitFrequency = 6;
      skyMaterial.minorUnitVisibility = 0.43;
      skyMaterial.gridRatio = 0.5;
      skyMaterial.mainColor = new Color3(1, 1, 1);
      skyMaterial.lineColor = new Color3(0, 1.0, 1.0);	
      skyMaterial.backFaceCulling = false;

    var skySphere = Mesh.CreateSphere("skySphere", 30, 90, scene);
      skySphere.material = skyMaterial;

    var ground = MeshBuilder.CreateGround("ground1", {width:6, height:6}, scene);
    var backgroundMaterial = new BackgroundMaterial("backgroundMaterial", scene);
    backgroundMaterial.diffuseTexture = new Texture(process.env.PUBLIC_URL + '/assets/osu.png', scene);
    ground.material = backgroundMaterial;
    //ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    

    //Menu();
    Collision(scene);

}


export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
)