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
import { AdvancedDynamicTexture, Slider, Control } from "@babylonjs/gui";
import SceneComponent from './sceneComponent';


var gridGen =(props)=>{
    var {scene, psize} = props;
    var grid = new GridMaterial("grid", scene);	
    grid.gridRatio = 1;
    grid.opacity = 0.99;
    grid.lineColor = Color3.Black();

    const xPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(1, 0, 0));
    const yPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
    const zPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
    var planex = MeshBuilder.CreatePlane("planex", {size: psize, sourcePlane: xPlane, sideOrientation: Mesh.DOUBLESIDE});
    var planey = MeshBuilder.CreatePlane("planey", {size: psize, sourcePlane: yPlane, sideOrientation: Mesh.DOUBLESIDE});
    var planez = MeshBuilder.CreatePlane("planez", {size: psize, sourcePlane: zPlane, sideOrientation: Mesh.DOUBLESIDE});
    
    planex.material = grid;
    planey.material = grid;
    planez.material = grid;
    return [planex, planey, planez, grid];
}

const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, 
        3 * Math.PI / 8, 30, Vector3.Zero());
    scene.clearColor = Color3.White();
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    var light = new HemisphericLight("light", new Vector3(0,1,0), scene);
    light.intensity = 0.7;

    
    
    var psize = 1; 

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
    var xChar = makeTextPlane("X", "red", size / 5);
    xChar.position = new Vector3(0.9 * size, 0.1 * size, 0);
    var axisY = Mesh.CreateLines("axisY", [
        new Vector3.Zero(), new Vector3(0, size, 0), new Vector3( -0.05 * size, size * 0.95, 0), 
        new Vector3(0, size, 0), new Vector3( 0.05 * size, size * 0.95, 0)
        ], scene);
    axisY.color = new Color3(0, 1, 0);
    var yChar = makeTextPlane("U", "green", size / 5);
    yChar.position = new Vector3(0, 0.9 * size, 0.1 * size);
    var axisZ = Mesh.CreateLines("axisZ", [
        new Vector3.Zero(), new Vector3(0, 0, size), new Vector3( 0 , -0.05 * size, size * 0.95),
        new Vector3(0, 0, size), new Vector3( 0, 0.05 * size, size * 0.95)
        ], scene);
    axisZ.color = new Color3(0, 0, 1);
    var zChar = makeTextPlane("T", "blue", size / 5);
    zChar.position = new Vector3(size, 0.05 * size, 0.9 * size);

    var planes = gridGen({scene, psize});
    var planex = planes[0];
    var planey = planes[1];
    var planez = planes[2];
    var grid = planes[3];

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
            axisX.scaling.x = value/2;
            axisY.scaling.y = value/2;
            axisZ.scaling.z = value/2;
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
            xChar.scaling.x = value/2;
            xChar.scaling.y = value/2;
            xChar.position.x = value/2;
            yChar.scaling.x = value/2;
            yChar.scaling.y = value/2;
            yChar.position.y = value/2;
            zChar.scaling.x = value/2;
            zChar.scaling.y = value/2;
            zChar.position.x = value/1.85;
            zChar.position.z = value;        
            
            
        });
    
    advancedTexture.addControl(slider);   
    
  };
  showAxis(psize);
  

  
  

}




export default function Grid () {
    return(
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
    )
}