
import { 
    Vector3, 
    MeshBuilder,
    DynamicTexture,
    Mesh,
    StandardMaterial,
    } from '@babylonjs/core';



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

  var makeTextPlane = function(text, color, size, rotate) {

    
    var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 10, 40, "bold 10px Arial", color , "transparent", true);
    var plane = Mesh.CreatePlane("TextPlane", size, scene, true);    
    plane.material = new StandardMaterial("TextPlaneMaterial", scene);
    if(rotate){plane.rotation = new Vector3(0, -1, 0);}
    
    plane.material.backFaceCulling = false;
    plane.material.diffuseTexture = dynamicTexture;
  
    return plane;
  };     
  


  //x-axis
  
  for(let i = Math.floor(gridNumData.xmin); i<=Math.ceil(gridNumData.xmax); i+=steps){    
    var xChar = makeTextPlane(` ${i}`, "red", size / 5, false);
    xChar.position = new Vector3(i+0.1 , 
      0, -gridNumData.resolution/2);
  }

  for(let i = Math.floor(gridNumData.ymin); i<=Math.ceil(gridNumData.ymax); i+=steps){  
    if(i===0){
      continue;
    }  
    var yChar = makeTextPlane(` ${i}`, "green", size / 5, false );
    yChar.position = new Vector3(0, 
      i+0.1, -gridNumData.resolution/2);
  }

  for(let i = Math.floor(gridNumData.zmin); i<=Math.ceil(gridNumData.zmax); i+=steps){  
    var zChar = makeTextPlane(` ${i}`, "blue", size / 5, true);
    zChar.position = new Vector3(gridNumData.xmax+(gridNumData.resolution/2),
      0, i+0.1);
  }
  

}

//scene.onPointerObservable.add(function(){console.log(sphere.getPositionExpressedInLocalSpace())})
export default GridGen;