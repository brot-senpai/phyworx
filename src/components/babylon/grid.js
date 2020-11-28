import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder,
    DynamicTexture,
    Mesh,
    StandardMaterial,
    Plane,
    Color3, 
    } from '@babylonjs/core';
import { GridMaterial } from "@babylonjs/materials/grid";

import SceneComponent from './sceneComponent';


const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, 
        3 * Math.PI / 8, 30, Vector3.Zero());
    //scene.clearColor = Color3.Black();
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;

    var psize = 5;

    var grid = new GridMaterial("grid", scene);	
    grid.gridRatio = 1;
    
    const gridPosition = [
        new Vector3(0, psize/2, psize/2),
        new Vector3(psize/2, 0, psize/2),
        new Vector3(psize/2, psize/2, 0)
    ]
    const xPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(1, 0, 0));
    const yPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
    const zPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
    const planex = MeshBuilder.CreatePlane("planex", {size: psize, sourcePlane: xPlane, sideOrientation: Mesh.DOUBLESIDE});
    const planey = MeshBuilder.CreatePlane("planey", {size: psize, sourcePlane: yPlane, sideOrientation: Mesh.DOUBLESIDE});
    const planez = MeshBuilder.CreatePlane("planez", {size: psize, sourcePlane: zPlane, sideOrientation: Mesh.DOUBLESIDE});
    
    planex.position = gridPosition[0];
    planey.position = gridPosition[1];
    planez.position = gridPosition[2];

    planex.material = grid;
    planey.material = grid;
    planez.material = grid;

    var showAxis = function(size) {
    var makeTextPlane = function(text, color, size) {
    var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
    var plane = new Mesh.CreatePlane("TextPlane", size, scene, true);
    plane.material = new StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
     };
  
    var axisX = Mesh.CreateLines("axisX", [ 
      new Vector3.Zero(), new Vector3(size, 0, 0), new Vector3(size * 0.95, 0.05 * size, 0), 
      new Vector3(size, 0, 0), new Vector3(size * 0.95, -0.05 * size, 0)
      ], scene);
    axisX.color = new Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = Mesh.CreateLines("axisY", [
        new Vector3.Zero(), new Vector3(0, size, 0), new Vector3( -0.05 * size, size * 0.95, 0), 
        new Vector3(0, size, 0), new Vector3( 0.05 * size, size * 0.95, 0)
        ], scene);
    axisY.color = new Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = Mesh.CreateLines("axisZ", [
        new Vector3.Zero(), new Vector3(0, 0, size), new Vector3( 0 , -0.05 * size, size * 0.95),
        new Vector3(0, 0, size), new Vector3( 0, 0.05 * size, size * 0.95)
        ], scene);
    axisZ.color = new Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new Vector3(0, 0.05 * size, 0.9 * size);
  };

  
  showAxis(5);

}




export default function Grid () {
    return(
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
    )
}