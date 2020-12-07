import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    Color3, 
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Texture,
    BackgroundMaterial, 
    PhysicsImpostor,
    StandardMaterial,
    } from '@babylonjs/core';

import { 
    AdvancedDynamicTexture,
    Button,
    Control,
    SelectionPanel,
    InputText,
    TextBlock,
    Rectangle,
    } from "@babylonjs/gui";
import { GridMaterial } from "@babylonjs/materials/grid";
import SceneComponent from '../sceneComponent';
import * as CANNON from 'cannon';
window.CANNON = CANNON;


const onSceneReady = scene =>{
    var camera = new ArcRotateCamera("ArcRotateCamera", 4.7, 1.2, 15, 
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



function Collision (scene) {

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  
  var material = new StandardMaterial(scene);
  material.diffuseColor = new Color3(1.0, 0, 0);

  var velocity = 8;

  var rect1 = new Rectangle();
    rect1.width = 0.2;
    rect1.height = "20px";
    rect1.cornerRadius = 20;
    rect1.color = "red";
    rect1.thickness = 1;
    rect1.background = "white";
    advancedTexture.addControl(rect1);
    
    rect1.linkOffsetY = -50;

    

    var backgroundMaterial = new StandardMaterial("backgroundMaterial", scene);
    var sphere1 = Mesh.CreateSphere("sphere1", 16, 1.5, scene);
    backgroundMaterial.diffuseTexture = new Texture(process.env.PUBLIC_URL + '/assets/osu.png', scene);
    sphere1.material = backgroundMaterial;
    sphere1.position = new Vector3(-10, 2, 0);
    sphere1.rotate(new Vector3(0, 0, 4), 3)
    sphere1.physicsImpostor = new PhysicsImpostor(sphere1, PhysicsImpostor.SphereImpostor,
      {mass:1.5, restitution: 1.0, friction:0}, scene);

      rect1.linkWithMesh(sphere1);   
      var label1 = new TextBlock();
      label1.text = sphere1.physicsImpostor.getLinearVelocity()._x +' m/s';
      rect1.addControl(label1)
  
      var bgMat = new StandardMaterial("bg2", scene);
      bgMat.diffuseTexture = new Texture(process.env.PUBLIC_URL + '/assets/Mi.png', scene);
      var sphere2 = Mesh.CreateSphere("sphere1", 16, 1, scene);
      sphere2.position = new Vector3(0, 2, 0);
      sphere2.material = bgMat;
      sphere2.rotate(new Vector3(0, 0, 4), 3);
      sphere2.physicsImpostor = new PhysicsImpostor(sphere2, PhysicsImpostor.SphereImpostor,
        {mass:1, restitution: 1.0, friction:0}, scene);
      sphere2.physicsImpostor.registerOnPhysicsCollide(sphere1.physicsImpostor, function() {
        sphere2Text();
	});
  function sphere2Text(){
    var rect2 = new Rectangle();
    rect2.width = 0.2;
    rect2.height = "20px";
    rect2.cornerRadius = 20;
    rect2.color = "red";
    rect2.thickness = 1;
    rect2.background = "white";
    advancedTexture.addControl(rect2);
    
    rect2.linkOffsetY = -50;
    rect2.linkWithMesh(sphere2);   
    var label2 = new TextBlock();
    
    label2.text = 'HELP ME!';    
    rect2.addControl(label2);

  }
  function play(){
    
    
    
    sphere1.physicsImpostor.setLinearVelocity(new Vector3(velocity, 0, 0));
    
    

    var t = window.setInterval(timer, 100);
    function timer(){
      //label2.text = sphere2.physicsImpostor.getLinearVelocity()._x.toFixed(2) +' m/s';
      label1.text = sphere1.physicsImpostor.getLinearVelocity()._x.toFixed(2) +' m/s';
    };

    
    
  }
  var act = true;
  var menuButton = new Button.CreateSimpleButton("menu", "Start");
  menuButton.color = "black";
  menuButton.width = 1;
  menuButton.height = "20px";
  menuButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
  menuButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
  
  
  menuButton.onPointerDownObservable.add(function(){
    if(act === true){
      play();
      act = false;
      ;}
    else{
      play();
      act = true;
    }
    
  })
  
/*   var input = new InputText("Enter");
  input.width = 1;
  input.text = "Enter velocity";
  input.height = "40px";
  input.background = "black";
  input.color = "white";
  input.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  input.onPointerDownObservable.add(function(){
    input.text = "";
  })
  input.onTextChangedObservable.add(function(){
    velocity = input.text;
  }) */
  scene.enablePhysics();

   var displayGrid = new SelectionPanel("sp", []);
    displayGrid.color = "black";  
    displayGrid.width = "150px";
    displayGrid.height = "25px";
    displayGrid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    displayGrid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    displayGrid.top = "60px";
    displayGrid.left = "80px";

    advancedTexture.addControl(displayGrid);
    displayGrid.addControl(menuButton)
    //displayGrid.addControl(input); 
}


export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
)