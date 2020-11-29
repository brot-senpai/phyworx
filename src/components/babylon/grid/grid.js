import {  
    Vector3,     
    MeshBuilder,    
    Mesh,    
    Plane,
    Color3, 
    } from '@babylonjs/core';
import { GridMaterial } from "@babylonjs/materials/grid";


export default function(props){
    var {scene, psize} = props;
    var grid = new GridMaterial("grid", scene);	
    grid.gridRatio = 1;
    grid.opacity = 0.99;
    grid.lineColor = Color3.Black();

    const xPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(1, 0, 0));
    const yPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 1, 0));
    const zPlane = Plane.FromPositionAndNormal(new Vector3(0, 0, 0), new Vector3(0, 0, 1));
    var planex = MeshBuilder.CreatePlane("planex", {size: psize, sourcePlane: xPlane, sideOrientation: Mesh.DOUBLESIDE});
    var planey = MeshBuilder.CreatePlane("planey", {size: psize, sourcePlane: yPlane, sideOrientation: Mesh.DOUBLESIDE});
    var planez = MeshBuilder.CreatePlane("planez", {size: psize, sourcePlane: zPlane, sideOrientation: Mesh.DOUBLESIDE});
    
    planex.material = grid;
    planey.material = grid;
    planez.material = grid;
    return [planex, planey, planez, grid];
}