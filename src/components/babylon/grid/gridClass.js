import { Component } from 'react';

import { 
  Vector3, 
  MeshBuilder,
  DynamicTexture,
  Mesh,
  StandardMaterial,
  } from '@babylonjs/core';

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
      this.xi = Math.floor(this.xmin);
      this.xf = Math.ceil(this.xmax);
      this.yi = Math.floor(this.ymin);
      this.yf = Math.ceil(this.ymax);
      this.zi = Math.floor(this.zmin);
      this.zf = Math.ceil(this.zmax);
      this.resolution = props.gridData.resolution;
      this.xyPlane();
      this.xzPlane();
      this.yzPlane();
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
    }

    yzPlanePosition(xpos){
      this.yzGrid.position = new Vector3(xpos, 0, 0)
    }
    render(){
      return [this.xyGrid, this.xzGrid, this.yzGrid];
    }
  }

  export default RectGridClass;