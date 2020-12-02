import React from 'react';
import { 
    Color3,
    Vector3, 
    Mesh,
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
import * as CANNON from 'cannon';
window.CANNON = CANNON;


export default (scene) =>{

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  
  var material = new StandardMaterial(scene);
  material.diffuseColor = new Color3(1.0, 0, 0);

  var velocity = 5;

  
  function play(){
    
    var rect1 = new Rectangle();
    rect1.width = 0.1;
    rect1.height = "20px";
    rect1.cornerRadius = 20;
    rect1.color = "red";
    rect1.thickness = 1;
    rect1.background = "white";
    advancedTexture.addControl(rect1);
    
    rect1.linkOffsetY = -50;

    var rect2 = new Rectangle();
    rect2.width = 0.1;
    rect2.height = "20px";
    rect2.cornerRadius = 20;
    rect2.color = "red";
    rect2.thickness = 1;
    rect2.background = "white";
    advancedTexture.addControl(rect2);
    
    rect2.linkOffsetY = -50;

    
    var sphere1 = Mesh.CreateSphere("sphere1", 16, 1, scene);
    sphere1.material = material;
    sphere1.position = new Vector3(-2, 2, 0);
    sphere1.color = new Color3(1, 0, 0);
    sphere1.physicsImpostor = new PhysicsImpostor(sphere1, PhysicsImpostor.SphereImpostor,
      {mass:1, restitution: 1.0, friction:0}, scene);
    sphere1.physicsImpostor.setLinearVelocity(new Vector3(velocity, 0, 0));
    
    rect1.linkWithMesh(sphere1);   
    var label1 = new TextBlock();
    label1.text = sphere1.physicsImpostor.getLinearVelocity()._x +' m/s';
    rect1.addControl(label1)

    var sphere2 = Mesh.CreateSphere("sphere1", 16, 1, scene);
    sphere2.position = new Vector3(2, 2, 0);
    sphere2.physicsImpostor = new PhysicsImpostor(sphere2, PhysicsImpostor.SphereImpostor,
      {mass:1, restitution: 1.0, friction:0}, scene);

    rect2.linkWithMesh(sphere2);   
    var label2 = new TextBlock();
    
    label2.text = sphere2.physicsImpostor.getLinearVelocity()._x +' m/s';    
    rect2.addControl(label2);

    var t = window.setInterval(timer, 1000);
    function timer(){
      label2.text = sphere2.physicsImpostor.getLinearVelocity()._x.toFixed(2) +' m/s';
      label1.text = sphere1.physicsImpostor.getLinearVelocity()._x.toFixed(2) +' m/s';
    };

    
    
  }
  var act = true;
  var menuButton = new Button.CreateSimpleButton("menu", "Start");
  menuButton.color = "black";
  menuButton.width = 1;
  menuButton.height = "40px";
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
  
  var input = new InputText("Enter");
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
  })
  scene.enablePhysics();

  var displayGrid = new SelectionPanel("sp", []);
    displayGrid.color = "black";  
    displayGrid.width = "150px";
    displayGrid.height = "100px";
    displayGrid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    displayGrid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    displayGrid.top = "60px";
    displayGrid.left = "80px";

    advancedTexture.addControl(displayGrid);
    displayGrid.addControl(menuButton)
    displayGrid.addControl(input);
}