import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    HemisphericLight, 
    MeshBuilder,
    DynamicTexture,
    Mesh,
    StandardMaterial,
    Plane,
    Color3, 
    } from '@babylonjs/core';
import { 
        AdvancedDynamicTexture,
        Button,
        Control,
        Slider,
        SelectionPanel,
        } from "@babylonjs/gui";
import { GridMaterial } from "@babylonjs/materials/grid";

//import SceneComponent from './sceneComponent';

var lines = [];

const makeRibbon = (props) =>{

    const {scene, datas} = props;
    const mat = new StandardMaterial("mat1", scene);
  	mat.diffuseColor = new Color3(1.0, 0, 0.5);
    mat.backFaceCulling = false;

    
    const data = datas[1].lines
    var l = Object.keys(data).length
    var s = Object.keys(data[0]).length
    
    const paths = [];
    for(let i = 0; i<l; i++){

        let path = [];
        for(let j = 0; j < s; j++){
        let x = data[i][j][0];
        let y = data[i][j][1];
        let u = data[i][j][2];
        path.push(new Vector3(x, y, u));
        }
        paths.push(path);
        MeshBuilder.CreateLines("path", {points:path})
    }
    const ribbon = MeshBuilder.CreateRibbon("ribbon", {pathArray: paths, sideOrientation: Mesh.DOUBLESIDE});
    ribbon.material = mat;
    return ribbon; 
    
}

const DynamicGrid = (props) =>{
    
    var {scene, size} = props;
    
/*     var camera = new ArcRotateCamera("ArcRotateCamera", 4.7, 1.2, 12, 
        new Vector3(0, 0, 0), scene);
    camera.setTarget(Vector3.Zero());
    const light = new HemisphericLight("light", new Vector3(1, 1, 0));
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true); */
   
    
    
/*     var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    var act = true;
    var menuButton = new Button.CreateSimpleButton("menu", "Start");
    menuButton.color = "black";
    menuButton.width = "150px";
    menuButton.height = "40px";
    menuButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
    menuButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    
    var displayGrid = new SelectionPanel("sp", []);
    displayGrid.color = "black";  
    displayGrid.width = "150px";
    displayGrid.height = "100px";
    displayGrid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    displayGrid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    displayGrid.top = "60px";
    displayGrid.left = "80px";

    //advancedTexture.addControl(displayGrid);
    advancedTexture.addControl(menuButton)
    
   
    
    light.intensity = 0.7; */

    //var size = 1;
    var axis = showAxis({scene, size});
    //var grids = gridGen({scene, size});


    //SliderControl({scene, axis, grids});
    //Animation({scene, axis, grids, data});

/*     menuButton.onPointerDownObservable.add(function(){
        if(act === true){
        scene.clearColor = Color3.White();
       
        if(lines){
            lines.forEach(function(i){i.dispose()})
        }
        //Animation({scene, axis, grids, data});
        const ribbon = makeRibbon({scene, datas})
          act = false;
          ;}
        else{
        //Animation({scene, axis, grids, data});
          act = true;
        }
        
      }) */
}

var Animation = (props) =>{
    var {scene, axis, grids, data} = props;
    
    var axisX = axis[0];
    var xChar = axis[1];
    var axisY = axis[2];
    var yChar = axis[3];
    var axisZ = axis[4];
    var zChar = axis[5];
    var planex = grids[0];
    var planey = grids[1];
    var planez = grids[2];
    var grid = grids[3];
      
    var value = .1;
    axisX.scaling.x = value/2;
    axisY.scaling.y = value/2;
    axisZ.scaling.z = value/2;
    grid.gridRatio = 1/value;
    planex.scaling.x = value;
    planex.scaling.y = value;
    planey.scaling.y = value;
    planey.scaling.x = value;
    planez.scaling.y = value;
    planez.scaling.x = data[0].xlength;
    planex.position.z =value/2;
    planey.position.z = value/2;
    planez.position.z = value;
    xChar.scaling.x = value/2;
    xChar.scaling.y = value/2;
    xChar.position.x = value/2;
    yChar.scaling.x = value/2;
    yChar.scaling.y = value/2;
    yChar.position.y = value/2;
    zChar.scaling.x = value/2;
    zChar.scaling.y = value/2;
    zChar.position.x = value/1.85;
    zChar.position.z = value;

    Timer();
    function Timer(){
        var t = 0;
        const lineEnd = Object.keys(data[1].lines).length;
        var interval = data[0].interval*1000;  
        var myTimer = window.setInterval(timer, interval);
        function timer(){
            if(t===data[0].tlength){
                var line = MeshBuilder.CreateLines("lines", {points:data[1].lines[lineEnd-1]}, scene);
                line.color = new Color3.Yellow();
                lines.push(line);
                clearInterval(myTimer);
            }
            else{
                
                if((t%1)===0){
                    var line = MeshBuilder.CreateLines("lines", {points:data[1].lines[t]}, scene);
                    line.color = new Color3.Black();
                    lines.push(line);
                } 
                t += data[0].interval
                
                axisX.scaling.x = data[0].xlength/2;
                axisY.scaling.y = data[0].ylength;
                axisZ.scaling.z = t;
                grid.gridRatio = 1/t;
                planex.scaling.x = t;
                planex.scaling.y = t;
                planey.scaling.y = data[0].xlength;
                planey.scaling.x = t;
                planez.scaling.y = t;
                planez.scaling.x = data[0].xlength;
                planex.position.z =t/2;
                planey.position.z = t/2;
                planez.position.z = t;
                xChar.scaling.x = data[0].xlength/2;
                xChar.scaling.y = data[0].xlength/2;
                xChar.position.x = data[0].xlength/2;
                yChar.scaling.x = data[0].ylength/2;
                yChar.scaling.y = data[0].ylength;
                yChar.position.y = data[0].ylength/2;
                zChar.scaling.x = data[0].xlength/2;
                zChar.scaling.y = data[0].xlength/2;
                zChar.position.x = data[0].tlength/1.85;
                zChar.position.z = t;
            }
        }
        
    }
    
}

var gridGen =(props)=>{
    var {scene, data} = props;
    var psize = data;
    var grid = new GridMaterial("grid", scene);	
    grid.gridRatio = psize;
    grid.opacity = 0.99;
    grid.lineColor = Color3.Gray();

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

var showAxis = function(props) {
    var {scene, size} = props;
    var makeTextPlane = function(text, color, size) {
    var dynamicTexture = new DynamicTexture("DynamicTexture", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
    var plane = new Mesh.CreatePlane("TextPlane", size, scene, true);
    plane.material = new StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
     };     
  
    var axisX = Mesh.CreateLines("axisX", [ 
      new Vector3.Zero(), new Vector3(size, 0, 0), new Vector3(size * 0.95, 0.05 * size, 0), 
      new Vector3(size, 0, 0), new Vector3(size * 0.95, -0.05 * size, 0)
      ], scene);
    axisX.color = new Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 5);
    xChar.position = new Vector3(0.9 * size, 0.1 * size, 0);
    var axisY = Mesh.CreateLines("axisY", [
        new Vector3.Zero(), new Vector3(0, size, 0), new Vector3( -0.05 * size, size * 0.95, 0), 
        new Vector3(0, size, 0), new Vector3( 0.05 * size, size * 0.95, 0)
        ], scene);
    axisY.color = new Color3(0, 1, 0);
    var yChar = makeTextPlane("U", "green", size / 5);
    yChar.position = new Vector3(0, 0.9 * size, 0.1 * size);
    var axisZ = Mesh.CreateLines("axisZ", [
        new Vector3.Zero(), new Vector3(0, 0, size), new Vector3( 0 , -0.05 * size, size * 0.95),
        new Vector3(0, 0, size), new Vector3( 0, 0.05 * size, size * 0.95)
        ], scene);
    axisZ.color = new Color3(0, 0, 1);
    var zChar = makeTextPlane("T", "blue", size / 5);
    zChar.position = new Vector3(size, 0.05 * size, 0.9 * size);

    return [axisX, xChar, axisY, yChar, axisZ, zChar]
}

var SliderControl = (props) =>{
    var {scene, axis, grids} = props;
    var axisX = axis[0];
    var xChar = axis[1];
    var axisY = axis[2];
    var yChar = axis[3];
    var axisZ = axis[4];
    var zChar = axis[5];
    var planex = grids[0];
    var planey = grids[1];
    var planez = grids[2];
    var grid = grids[3];

    var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
    var slider = new Slider();
        slider.minimum = 5;
        slider.maximum = 100;
        slider.value = 5;
        slider.height = "20px";
        slider.width = "200px";
        slider.color = "#003399";
        slider.background = "grey";
        slider.top= "20px";
        slider.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        slider.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        slider.onValueChangedObservable.add(function (value) {
            axisX.scaling.x = value/2;
            axisY.scaling.y = value/2;
            axisZ.scaling.z = value/2;
            grid.gridRatio = 1/value;
            planex.scaling.x = value;
            planex.scaling.y = value;
            planey.scaling.y = value;
            planey.scaling.x = value;
            planez.scaling.y = value;
            planez.scaling.x = value;
            planex.position.z =value/2;
            planey.position.z = value/2;
            planez.position.z = value;
            xChar.scaling.x = value/2;
            xChar.scaling.y = value/2;
            xChar.position.x = value/2;
            yChar.scaling.x = value/2;
            yChar.scaling.y = value/2;
            yChar.position.y = value/2;
            zChar.scaling.x = value/2;
            zChar.scaling.y = value/2;
            zChar.position.x = value/1.85;
            zChar.position.z = value;        
            
            
        });
    
    advancedTexture.addControl(slider);   
}
/* function Grid () {
    
    return(
    <div>
        <SceneComponent style={{display:"block"}} antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
    )
} */

export { DynamicGrid };