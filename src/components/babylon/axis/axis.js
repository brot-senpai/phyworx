//import React from 'react';
import { 
    Vector3, 
    DynamicTexture,
    Mesh,
    StandardMaterial,
    Color3, 
    } from '@babylonjs/core';



var Axis =(props)=> {

  var { scene, size } = props;

  var makeTextPlane = function(text, color, size) {
  var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
  dynamicTexture.hasAlpha = true;
  dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
  var plane = new Mesh.CreatePlane("TextPlane", size, scene, true);
  plane.material = new StandardMaterial("TextPlaneMaterial", scene);
  plane.material.backFaceCulling = false;
  plane.material.specularColor = new Color3(1, 1, 1);
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
 
  
  return [axisX, xChar,
          axisY, yChar,
          axisZ, zChar
        ] 
  }

  export default Axis;
