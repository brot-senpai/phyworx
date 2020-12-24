import { 
  Vector3,     
  MeshBuilder,    
  Mesh,
  StandardMaterial,   
  Color3, 
  HighlightLayer
  } from '@babylonjs/core';

import React from 'react';

class Rect3D extends React.Component{
  constructor(props){
    super(props);
    this.scene = props.scene;
    this.solution = props.solution;
    this.steps = this.solution.length;
    this.range = this.steps*props.resolution;
    this.indysteps = this.solution[1].length;   
    this.paths = [];
    this.maxCurve = [];
    this.minCurve = [];
    this.drawLines();
    this.drawRibbon();
    this.drawMaxCurve();
    this.drawMinCurve();
  }

  drawLines(){
    
    for(let i = 0; i < this.steps; i++){
      let path = [];
      let tempminmax = [];
      for(let j = 0; j < this.indysteps; j++){
        let x = this.solution[i][j][0];
        let y = this.solution[i][j][1];
        let z = this.solution[i][j][2];
        tempminmax.push(y);
        path.push(new Vector3(x, y, z));
      }
      let maxidx = tempminmax.indexOf(Math.max(...tempminmax));
      let minidx = tempminmax.indexOf(Math.min(...tempminmax));
      //console.log(path.length)
      this.maxCurve.push(path[maxidx]);
      this.minCurve.push(path[minidx]); 
      this.paths.push(path);
      
      var lines = MeshBuilder.CreateLines("paths",{ points: path});
      lines.alpha = 0.5
      
    }
  }
  drawRibbon(){
    const mat = new StandardMaterial("ribbon", this.scene);
    mat.diffuseColor = new Color3(0.5, 0, 0);
    mat.backFaceCulling = false;
    const ribbon = MeshBuilder.CreateRibbon("ribbon", {pathArray: this.paths,
      sideOrientation: Mesh.DOUBLESIDE});
    ribbon.material = mat;
  }
  drawMaxCurve(){
    
    this.maxLine = MeshBuilder.CreateLines("maxline", {points:this.maxCurve});
    var hl = new HighlightLayer("hl1", this.scene);
    hl.addMesh(this.maxLine, Color3.Yellow());
    this.maxLine.edgesWidth = 5;
    
  }
  drawMinCurve(){
    this.minLine = MeshBuilder.CreateLines("minline", {points:this.minCurve});
    var hl = new HighlightLayer("hl1", this.scene);
    hl.addMesh(this.minLine, Color3.Purple());
    this.minLine.outlineWidth = 5;
  }
}

export default Rect3D;