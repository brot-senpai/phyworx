import { Component } from 'react';

import { 
  Vector3, 
  MeshBuilder,
  DynamicTexture,
  Mesh,
  StandardMaterial,
  } from '@babylonjs/core';
import { 
  Button,
  Control,
  TextBlock,
  } from "@babylonjs/gui";
import { Color3 } from '@babylonjs/core';
import Axis from '../axis/axis';

  class RectGridClass extends Component{
    constructor(props){
      super(props);
      this.scene = props.scene;
      this.xmin = props.gridData.xmin;
      this.ymin = props.gridData.ymin;
      this.zmin = props.gridData.zmin;
      this.xmax = props.gridData.xmax;
      this.ymax = props.gridData.ymax;
      this.zmax = props.gridData.zmax;
      this.alpha = props.gridData.alpha;
      this.gridAlpha = props.gridData.alpha;
      this.numAlpha = 1;
      this.xi = Math.floor(this.xmin);
      this.xf = Math.ceil(this.xmax);
      this.yi = Math.floor(this.ymin);
      this.yf = Math.ceil(this.ymax);
      this.zi = Math.floor(this.zmin);
      this.zf = Math.ceil(this.zmax);
      this.resolution = props.gridData.resolution;
      this.size = 3;
      this.gridColr = new Color3(1, 1, 1);
      this.xyPlane();
      this.xzPlane();
      this.yzPlane();
      this.xNum();
      this.yNum();
      this.zNum();
      this.showAxis();
    }

    xyPlane(){
      var xy = [];      
      for(let i = this.yi; i <= this.yf; i += this.resolution){
        xy.push([
          new Vector3(this.xi, i, 0),
          new Vector3(this.xf, i, 0)
        ]);
      }
     for(let i = this.xi; i <= this.xf; i += this.resolution){
        xy.push([
          new Vector3(i, this.yi, 0),
          new Vector3(i, this.yf, 0),        
        ]);
      } 
      this.xyGrid = MeshBuilder.CreateLineSystem("xyGrid", {lines:xy}, this.scene);
      this.xyPlanePostition(this.zmax);
      this.xyGrid.alpha = this.alpha;
      this.xyGrid.color = this.gridColr;
    
    }

    xyPlanePostition(zpos){
      this.xyGrid.position = new Vector3(0, 0, zpos);
    }

    xzPlane(){
      var xz = [];
      for(let i = this.xi; i <= this.xf; i += this.resolution){
        xz.push([
          new Vector3(i, 0, this.zi),
          new Vector3(i, 0, this.zf)
        ]);
      }
      for(let i = this.zi; i <= this.zf; i += this.resolution){
        xz.push([
          new Vector3(this.xi, 0, i),
          new Vector3(this.xf, 0, i)
        ]);
      }
      this.xzGrid = MeshBuilder.CreateLineSystem("xzGrid", {lines:xz}, this.scene);
      this.xzGrid.alpha = this.alpha;
      this.xzGrid.color = this.gridColr;
    }

    xzPlanePosition(ypos){
      this.xzGrid.position = new Vector3(0, ypos, 0);
    }

    yzPlane(){
      var yz = [];
      for(let i = this.yi; i <= this.yf; i += this.resolution){
        yz.push([
          new Vector3(0, i, this.zi),
          new Vector3(0, i, this.zf)
        ])
      }
      for(let i = this.zi; i <= this.zf; i += this.resolution){
        yz.push([
          new Vector3(0, this.yi, i),
          new Vector3(0, this.yf, i)
        ]);
      }
      this.yzGrid = MeshBuilder.CreateLineSystem("yzGrid", {lines: yz}, this.scene);
      this.yzGrid.alpha = this.alpha;
      this.yzGrid.color = this.gridColr;
    }

    yzPlanePosition(xpos){
      this.yzGrid.position = new Vector3(xpos, 0, 0)
    }

    makeTextPlane(text, color, size, rotate){
      var dynamicTexture = new DynamicTexture("text", 50, this.scene, true);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 10, 40, "15px Arial", color, "transparent", true);
      
      var plane = Mesh.CreatePlane("textplane", size, this.scene, true);
      var planeMat = new StandardMaterial("textplanematerial", this.scene);
      planeMat.alpha = this.numAlpha;
      plane.material = planeMat;
      if(rotate){ plane.rotation = rotate;};
      plane.material.backFaceCulling = false;
      plane.material.diffuseTexture = dynamicTexture;
      
      return plane;
    }

    xNum(){
      for(let i = this.xi; i <= this.xf; i+=this.resolution){
        var xChar = this.makeTextPlane(`${i}`, "red", this.size /5, false);
        xChar.position = new Vector3(i+0.1, 0, -this.resolution/2);
      }
    }
    yNum(){
      for(let i = this.yi; i <= this.yf; i+=this.resolution){
        var yChar = this.makeTextPlane(`${i}`, "green", this.size /5, false);
        yChar.position = new Vector3( 0, i+0.1, -this.resolution/2);
      }
    }

    zNum(){
      for(let i = this.zi; i <= this.zf; i+=this.resolution){
        var zChar = this.makeTextPlane(`${i}`, "blue", this.size /5, 
          new Vector3(0, -1, 0));
        zChar.position = new Vector3( this.xmax+this.resolution/2, 0, i+0.1);
      }
    }
    hideGrid(){
      this.alpha = 0;
      this.numAlpha = 0;
    }
    showGrid(){
      this.alpha = this.gridAlpha;
      this.numAlpha = 1;
    }

    gridGUI(textColor){
      var gridText = new TextBlock();
      gridText.text = "Grid Options";
      gridText.color = textColor;
      gridText.fontSize = "18px";
      gridText.fontFamily = "Helvetica";

      var selectText = new TextBlock();
      selectText.text = "Select";
      selectText.color = textColor;
      selectText.fontSize = "13px";
      selectText.fontFamily = "Helvetica";

      var gridButton = new Button();
      gridButton.cornerRadius = 2.5
      gridButton.addControl(selectText);
      gridButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

      return {gridText, gridButton}
    }

    showAxis(){
      var size = 1;
      var scene = this.scene
      var axis = Axis({scene, size})
      var axisX = axis[0]
      var xChar = axis[1]
      var axisY = axis[2]
      var yChar = axis[3]
      var axisZ = axis[4] 
      var zChar = axis[5] 
      axisX.scaling.x = this.xf;
      axisY.scaling.y = this.yf;
      axisZ.scaling.z = this.zf;
      xChar.scaling.x = 2;
      xChar.scaling.y = 2;
      xChar.position.x = this.xf + .5;
      yChar.scaling.x = 2;
      yChar.scaling.y = 2;
      yChar.position.y = this.yf + .5;
      zChar.scaling.x = 2;
      zChar.scaling.y = 2;
      zChar.position.x = this.xf + .5;
      zChar.position.z = this.zf + .5;
    }
    render(){
      return [this.xyGrid, this.xzGrid, this.yzGrid];
    }
  }

  export default RectGridClass;