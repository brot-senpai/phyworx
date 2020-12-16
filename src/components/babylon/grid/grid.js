
import { 
    Vector3, 
    Color3,
    MeshBuilder,
    } from '@babylonjs/core';

let line;

var GridGen =(props)=>{
    const {scene, gridData} = props;
    var xStartPoint = gridData.xmin;
    var yStartPoint = gridData.ymin;
    var zStartPoint = gridData.zmin;
    var xRange = gridData.xmax;
    var yRange = gridData.ymax;
    var zRange = gridData.zmax;
    var resolution = gridData.resolution;
  
    var xy = [];
    //xy
    for(let i = yStartPoint; i<=yRange;i+=resolution){
      xy.push([
        new Vector3(xStartPoint, i, 0),
        new Vector3(xRange, i, 0),        
      ])
    }   
    for(let i = xStartPoint; i<=xRange;i+=resolution){
      xy.push([
        new Vector3(i, yStartPoint, 0),
        new Vector3(i, yRange, 0),        
      ])
    } 
  
    let xyGrid = MeshBuilder.CreateLineSystem("lineSystem", {lines: xy}, scene);
    xyGrid.position = new Vector3(0, 0, zRange)
    var xz = [];
     for(let i = xStartPoint; i<=xRange;i+=resolution){
      xz.push([
        new Vector3(i, 0, zStartPoint),
        new Vector3(i, 0, zRange)
      ]
    )}
    for(let i = zStartPoint; i<=zRange;i+=resolution){
      xz.push([
        new Vector3(xStartPoint, 0, i),
        new Vector3(xRange, 0, i),        
      ]
    )}
    let xzGrid = MeshBuilder.CreateLineSystem("lineSystem", {lines: xz}, scene);
    //yz
     
    var yz = [];
    for(let i = yStartPoint; i<=yRange;i+=resolution){
      yz.push([
        new Vector3(0, i, zStartPoint),
        new Vector3(0, i, zRange)
      ])
    }  
    for(let i = zStartPoint; i<=zRange;i+=resolution){
      yz.push([
        new Vector3(0, yStartPoint, i),
        new Vector3(0, yRange, i)
      ])
    }
    let yzGrid = MeshBuilder.CreateLineSystem("lineSystem", {lines: yz}, scene);
    //Animate(scene, xy, xz, yz)
    return[xyGrid, xzGrid, yzGrid]
}

var Animate = (scene, xy, xz, yz) =>{
    
    const xyl = xy.length;
    const xzl = xz.length;
    const yzl = yz.length;
    const max = Math.max(xyl,xzl,yzl);
    var counter = 0;
    var interval = .2*1000;  
    var myTimer = window.setInterval(timer, interval);
    
    function timer(){
        if(counter<xyl){
            line = MeshBuilder.CreateLines("lines", {points:xy[counter]}, scene);
            line.color = new Color3.Black();
        }
        if(counter<xzl){
            line = MeshBuilder.CreateLines("lines", {points:xz[counter]}, scene);
            line.color = new Color3.Black();
        }
        if(counter<yzl){
            line = MeshBuilder.CreateLines("lines", {points:yz[counter]}, scene);
            line.color = new Color3.Black();
        }
        if(max===counter){
            clearInterval(myTimer);
        }
        counter ++;
    }


}

export default GridGen;