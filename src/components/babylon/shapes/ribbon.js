import { 
    Vector3,     
    MeshBuilder,    
    Mesh,
    StandardMaterial,   
    Color3, 
    HighlightLayer
    } from '@babylonjs/core';


const makeRibbon = (scene, solution, charCurve, resolution) =>{

  const mat = new StandardMaterial("mat1", scene);
  mat.diffuseColor = new Color3(0.5, 0, 0);
  mat.backFaceCulling = false;
  

  const steps = solution.length ;
  const s = steps * resolution;
  var l = solution[1].length;

  
  const paths = [];
  for(let i = 0; i<steps; i++){

      let path = [];
      for(let j = 0; j < l; j++){
        let x = solution[i][j][0];
        let y = solution[i][j][1];
        let u = solution[i][j][2];
      path.push(new Vector3(x, y, u));
      }
      paths.push(path);
      if(i%s===0){
        MeshBuilder.CreateLines("path", {points:path})}
  } 
  const ribbon = MeshBuilder.CreateRibbon("ribbon", {pathArray: paths, sideOrientation: Mesh.DOUBLESIDE});
  ribbon.material = mat;
  
  

  let l2 = charCurve.length;
  const cCurve = [];
  for(let j = 0; j < l2; j++){
    let x = charCurve[j][0];
    let y = charCurve[j][1];
    let u = charCurve[j][2];
  cCurve.push(new Vector3(x, y, u));
  }
  var cLine = MeshBuilder.CreateLines("charCurve", {points:cCurve})
  var hl = new HighlightLayer("hl1", scene);
  hl.addMesh(cLine, Color3.Yellow());
  cLine.edgesWidth = 2;
  return ribbon; 
  
}

export default makeRibbon;

