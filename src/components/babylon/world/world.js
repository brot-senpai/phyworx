import React from 'react';

import { 
  Vector3, 
  ArcRotateCamera,
  Color3,
  HemisphericLight,
  } from '@babylonjs/core';

class World extends React.Component{
  constructor(props){
    super(props);
    this.scene = props.scene;
    this.engine = this.scene.getEngine();
    this.canvas = this.scene.getEngine().getRenderingCanvas();
    this.data = props.worldData;
    this.Camera(this.data.cameraDist);
    this.Background(this.data.backgroundColor);
    this.Lighting();

  }

  Camera(cameraDist){
    this.camera = new ArcRotateCamera("ArcRotateCamera", -.85, .8, cameraDist, 
      new Vector3(0, 0, 0), this.scene);
    this.camera.attachControl(this.canvas, true);
  }
  Background(color){
    this.scene.clearColor = color;
  }
  Lighting(){
    var light = new HemisphericLight("light", new Vector3(1, 1, 0));
    light.diffuse = new Color3(1, 1, 1);
  }

  render(){
    
    return;
  }
}

export default World;