
import { 
    Vector3, 
    Color3,
    MeshBuilder,
    DynamicTexture,
    Mesh,
    StandardMaterial,
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
    for(let i = Math.floor(yStartPoint); i<=Math.ceil(yRange);i+=resolution){
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
    for(let i = Math.floor(yStartPoint); i<=Math.ceil(yRange);i+=resolution){
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
    const gridNumData = {
      xmin: gridData.xmin,
      ymin: gridData.ymin,
      zmin: gridData.zmin,
      xmax: gridData.xmax,
      ymax: gridData.ymax,
      zmax: gridData.zmax,
      showminor: true,
      showmajor: true,
      resolution: 0.5,
    }
    gridNum({scene, gridNumData});

    return[xyGrid, xzGrid, yzGrid]
}

var gridNum = (props) =>{

  var {scene, gridNumData} = props;

  var size = 3;
  var steps = 1;
  if(gridNumData.showminor){
    steps = gridNumData.resolution;
  }

  var makeTextPlane = function(text, color, size) {

    
    var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 10, 40, "bold 10px Arial", color , "transparent", true);
    var plane = new Mesh.CreatePlane("TextPlane", size, scene, true);    
    plane.material = new StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    //plane.material.specularColor = new Color3(1, 1, 1);
    plane.material.diffuseTexture = dynamicTexture;
  
    return plane;
  };     
  


  //x-axis
  
  for(let i = Math.floor(gridNumData.xmin); i<=Math.ceil(gridNumData.xmax); i+=steps){    
    var xChar = makeTextPlane(` ${i}`, "red", size / 5);
    xChar.position = new Vector3(i+0.1 , 
      0, -gridNumData.resolution/2);
  }

  for(let i = Math.floor(gridNumData.ymin); i<=Math.ceil(gridNumData.ymax); i+=steps){  
    if(i===0){
      continue;
    }  
    var yChar = makeTextPlane(` ${i}`, "green", size / 5 );
    yChar.position = new Vector3(0, 
      i+0.1, -gridNumData.resolution/2);
  }

  for(let i = Math.floor(gridNumData.zmin); i<=Math.ceil(gridNumData.zmax); i+=steps){  
    var zChar = makeTextPlane(` ${i}`, "blue", size / 5);
    zChar.position = new Vector3(gridNumData.xmax+(gridNumData.resolution/2),
      0, i+0.1);
    //zChar.normal = Vector3.TransformNormal(new Vector3(1, 0, 0))
  }
  
  
  /* var yChar = makeTextPlane("U", "green", size / 5);
  yChar.position = new Vector3(0, 0.9 * size, 0.1 * size);
  var zChar = makeTextPlane("T", "blue", size / 5);
  zChar.position = new Vector3(size, 0.05 * size, 0.9 * size); */
}



/* var Animate = (scene, xy, xz, yz) =>{
    
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


} */
//scene.onPointerObservable.add(function(){console.log(sphere.getPositionExpressedInLocalSpace())})
export default GridGen;