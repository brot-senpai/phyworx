import React from 'react';
import { 
  AdvancedDynamicTexture,
  Button,
  Grid,
  Control,
  TextBlock,
  Rectangle,
  ColorPicker,
  Slider,
  StackPanel,
  } from "@babylonjs/gui";
import { Color3 } from '@babylonjs/core';
import { Locator, deleteLocator, locatorGUI } from '../locator/locator';
import World from '../world/world';

class DashBoard extends React.Component{
  constructor(props){
    super(props);
    this.scene = props.scene;
    this.DBisOpen = false;
    this.advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    this.grid = new Grid();
    this.gbox = new Rectangle();
    this.advancedTexture.addControl(this.gbox);
    this.advancedTexture.addControl(this.grid);
    this.DBcolor = "yellow";
    this.gridWidth = "250px";
    this.gridOpenHeight = "310px";
    this.gboxOpenHeight = "160px";
    this.gridClosedHeight = "30px";
    this.DBGrid();
    this.DBBox();
    this.addColumnRow();
    this.OpenCloseButton();
    this.header();
    
  }
  
  DBGrid(){
    this.grid.background = "transparent";
    this.grid.width = this.gridWidth;
    this.grid.height = this.gridClosedHeight;
    this.grid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    this.grid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    this.advancedTexture.addControl(this.grid);
  }

  DBBox(){    
    this.gbox.width = this.gridWidth;
    this.gbox.height = this.gridClosedHeight;
    this.gbox.cornerRadius = 2.5;
    this.gbox.alpha = 0.5;
    this.gbox.color = "transparent";
    this.gbox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    this.gbox.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  }
  addColumnRow(){
    this.grid.addColumnDefinition(150,true);
    this.grid.addColumnDefinition(100, true);  
    this.grid.addRowDefinition(40, true);
    this.grid.addRowDefinition(30, true);
    this.grid.addRowDefinition(30, true);
    this.grid.addRowDefinition(30, true); 
    this.grid.addRowDefinition(30, true);
    this.grid.addRowDefinition(150, true);
  }
  OpenCloseButton(){
    this.tb1 = Button.CreateImageOnlyButton("tb1", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiPjxkZWZzPjxwYXRoIGQ9Ik01MTEuMjUgNDg5LjYzQzUyMyA1MDEuMzcgNTIzIDUyMC4zOCA1MTEuMjUgNTMyQzUwOC40MyA1MzQuODMgNDg1LjgzIDU1Ny40MiA0ODMgNTYwLjI1QzQ3MS4yNSA1NzIgNDUyLjI1IDU3MiA0NDAuNjMgNTYwLjI1QzQzMi41OCA1NTIuMjIgMzkyLjM4IDUxMi4xIDMyMCA0MzkuODhDMjQ3LjcgNTEyLjE3IDIwNy41MyA1NTIuMzQgMTk5LjUgNTYwLjM4QzE4Ny43NSA1NzIuMTIgMTY4Ljc1IDU3Mi4xMiAxNTcuMTMgNTYwLjM4QzE1NC4yOSA1NTcuNTUgMTMxLjU5IDUzNC45NSAxMjguNzUgNTMyLjEzQzExNyA1MjAuMzggMTE3IDUwMS4zNyAxMjguNzUgNDg5Ljc1QzE0NS43NSA0NzIuNzUgMjgxLjc1IDMzNi43NSAyOTguNzUgMzE5Ljc1QzMxMC41IDMwNy44OCAzMjkuNSAzMDcuODggMzQxLjI1IDMxOS42M0MzNzUuMjUgMzUzLjYzIDQ5NC4yNSA0NzIuNjMgNTExLjI1IDQ4OS42M1pNMTI4Ljc1IDI0OS42M0MxMTcgMjYxLjM4IDExNyAyODAuMzggMTI4Ljc1IDI5MkMxMzEuNTcgMjk0LjgzIDE1NC4xOCAzMTcuNDMgMTU3IDMyMC4yNUMxNjguNzUgMzMyIDE4Ny43NSAzMzIgMTk5LjM4IDMyMC4yNUMyMDcuNDEgMzEyLjIyIDI0Ny41OCAyNzIuMDUgMzE5Ljg4IDE5OS43NUMzOTIuMTcgMjcyLjA1IDQzMi4zNCAzMTIuMjIgNDQwLjM4IDMyMC4yNUM0NTIuMTMgMzMyIDQ3MS4xMyAzMzIgNDgyLjc1IDMyMC4yNUM0ODUuNTggMzE3LjQzIDUwOC4xOCAyOTQuODMgNTExIDI5MkM1MjIuNzUgMjgwLjI1IDUyMi43NSAyNjEuMjUgNTExIDI0OS42M0M0OTQgMjMyLjYzIDM1OCA5Ni42MiAzNDEgNzkuNjJDMzI5LjUgNjcuODcgMzEwLjUgNjcuODcgMjk4Ljc1IDc5LjYyQzI2NC43NSAxMTMuNjMgMTQ1Ljc1IDIzMi42MyAxMjguNzUgMjQ5LjYzWiIgaWQ9ImI0V2pBTUxkVyI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiNFdqQU1MZFciIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYjRXakFNTGRXIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==");
    this.tb1.width = "20px";
    this.tb1.height = "20px";
    this.tb1.color = "transparent";
    this.tb1.background = "black";

    this.tb2 = Button.CreateImageOnlyButton("tb2", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiPjxkZWZzPjxwYXRoIGQ9Ik0xMjguNzUgMTUwLjMyQzExNyAxMzguNTcgMTE3IDExOS41NyAxMjguNzUgMTA3Ljk1QzEzMS41NyAxMDUuMTIgMTU0LjE4IDgyLjUyIDE1NyA3OS43QzE2OC43NSA2Ny45NSAxODcuNzUgNjcuOTUgMTk5LjM4IDc5LjdDMjA3LjQxIDg3LjczIDI0Ny41OCAxMjcuOSAzMTkuODggMjAwLjJDMzkyLjE3IDEyNy45IDQzMi4zNCA4Ny43MyA0NDAuMzggNzkuN0M0NTIuMTMgNjcuOTUgNDcxLjEzIDY3Ljk1IDQ4Mi43NSA3OS43QzQ4NS42IDgyLjUxIDUwOC40IDEwNS4wMSA1MTEuMjUgMTA3LjgyQzUyMyAxMTkuNTcgNTIzIDEzOC41NyA1MTEuMjUgMTUwLjJDNDk0LjI1IDE2Ny4yIDM1OC4yNSAzMDMuMiAzNDEuMjUgMzIwLjJDMzI5LjUgMzMyLjA3IDMxMC41IDMzMi4wNyAyOTguNzUgMzIwLjMyQzI2NC43NSAyODYuMzIgMTQ1Ljc1IDE2Ny4zMiAxMjguNzUgMTUwLjMyWk01MTEuMjUgMzkwLjMyQzUyMyAzNzguNTcgNTIzIDM1OS41NyA1MTEuMjUgMzQ3Ljk1QzUwOC40MyAzNDUuMTIgNDg1LjgzIDMyMi41MiA0ODMgMzE5LjdDNDcxLjI1IDMwNy45NSA0NTIuMjUgMzA3Ljk1IDQ0MC42MyAzMTkuN0M0MzIuNTggMzI3LjcyIDM5Mi4zOCAzNjcuODUgMzIwIDQ0MC4wN0MyNDcuNyAzNjcuNzcgMjA3LjUzIDMyNy42IDE5OS41IDMxOS41N0MxODcuNzUgMzA3LjgyIDE2OC43NSAzMDcuODIgMTU3LjEzIDMxOS41N0MxNTQuMjkgMzIyLjQgMTMxLjU5IDM0NSAxMjguNzUgMzQ3LjgyQzExNyAzNTkuNTcgMTE3IDM3OC41NyAxMjguNzUgMzkwLjJDMTQ1Ljc1IDQwNy4yIDI4MS43NSA1NDMuMiAyOTguNzUgNTYwLjJDMzEwLjUgNTcyLjA3IDMyOS41IDU3Mi4wNyAzNDEuMjUgNTYwLjMyQzM3NS4yNSA1MjYuMzIgNDk0LjI1IDQwNy4zMiA1MTEuMjUgMzkwLjMyWiIgaWQ9ImFoNEpWVGFFUiI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhaDRKVlRhRVIiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYWg0SlZUYUVSIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==");
    this.tb2.width = "20px";
    this.tb2.height = "20px";
    this.tb2.color = "transparent";
    this.tb2.background = "black";
  }
  
  header(){
    var cmdText = new TextBlock();
    cmdText.text = "Dashboard";
    cmdText.color = this.DBcolor;
    cmdText.fontSize = "15";
    cmdText.fontFamily = "Helvetica";

    this.grid.addControl(this.tb2, 0, 1);           
    this.grid.addControl(cmdText, 0, 0);   
  }
}

function DBControl(props){
  
  var scene = props.scene;
  var worldData = props.worldData;
  var db = new DashBoard({scene});
  headerControl(db);
  locatorControl(db);  
  worldControl({db, worldData});

} 



var worldControl = (props) =>{
  var {db, worldData} = props;
  var scene = db.scene;
  const world = new World({scene, worldData})

  var bgText = new TextBlock();
  bgText.text = "Background Color";
  bgText.color = db.DBcolor;
  bgText.fontSize = "13";
  bgText.fontFamily = "Helvetica"; 

  db.grid.addControl(bgText, 2, 0);

  var pickerText = new TextBlock();
  pickerText.text = "Open";
  pickerText.color = db.DBcolor;
  pickerText.fontSize = "13";
  pickerText.fontFamily = "Helvetica";

  var pickerEvent = true;
  
  var bgButton = new Button();
  bgButton.cornerRadius = 2.5
  bgButton.addControl(pickerText);
  bgButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  bgButton.onPointerDownObservable.add(function(){
    if(pickerEvent){
      db.grid.addControl(picker, 5, 0);    
      pickerText.text = "Close"
      pickerEvent = false;
    }
    else{
      db.grid.removeControl(picker, 5, 0);
      pickerText.text = "Open"
      pickerEvent = true;
    }
  })

  db.grid.addControl(bgButton, 2,1);

  var picker = new ColorPicker();
  picker.value = new Color3(0, 0, 0)
  picker.height = "150px";
  picker.width = "150px";
  picker.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  picker.onValueChangedObservable.add(function(value) { // value is a color3
      scene.clearColor.copyFrom(value);
  });  

  world.engine.runRenderLoop(function () {
    world.scene.render();
  });

  window.addEventListener("resize", function () {
        world.engine.resize();
        console.log("resize")
  });
}

var locatorControl = (db) =>{
  var scene = db.scene;
  var event = false;
  var {locText, locatorButton, onRadio} = locatorGUI(db.DBcolor);
  db.grid.addControl(locatorButton, 1, 1);
  db.grid.addControl(locText, 1, 0);
  locatorButton.onPointerDownObservable.add(function(){
    if(event){
      onRadio.text = "Off";
      deleteLocator();
      event = false;
    }
    else{
      onRadio.text = "On";
      Locator({scene});      
      event = true;
    }
  })
}

var headerControl = (db) =>{
  var DBisOpen = false
  var collapse = function(){
    if(!DBisOpen){
      db.grid.height = db.gridOpenHeight;
      db.gbox.height = db.gboxOpenHeight;
      db.gbox.color = "yellow";
      db.grid.removeControl(db.tb2);
      db.grid.addControl(db.tb1, 0, 1);
      DBisOpen = true;
    }
    else{      
      db.grid.height = db.gridClosedHeight;
      db.gbox.height = db.gridClosedHeight;
      db.gbox.color = "transparent";
      db.grid.removeControl(db.tb1);
      db.grid.addControl(db.tb2, 0, 1);
      DBisOpen = false;
    }
  }
  
  db.tb1.onPointerDownObservable.add(collapse);
  db.tb2.onPointerDownObservable.add(collapse);
}

export default DBControl;


/* var gridControl = (props) =>{
  var {grid, db} = props;

  var gcEvent = false

  var gcText = new TextBlock();
  gcText.text = "Grid Options";
  gcText.color = db.DBcolor;
  gcText.fontSize = "13";
  gcText.fontFamily = "Helvetica"; 
  db.grid.addControl(gcText, 3, 0);

  var gcButtonText = new TextBlock();
  gcButtonText.text = "Open";
  gcButtonText.color = db.DBcolor;
  gcButtonText.fontSize = "13";
  gcButtonText.fontFamily = "Helvetica"; 

  var gcButton = new Button();
  gcButton.cornerRadius = 2.5
  gcButton.addControl(gcButtonText);
  gcButton.onPointerDownObservable.add(function(){
    if(gcEvent){
      db.grid.removeControl(gcAlphaText, 4, 0);    
      db.grid.removeControl(gcColorText, 4, 1);
      db.grid.removeControl(slider, 5, 0);
      gcButtonText.text = "Open"
      gcEvent = false;
    }
    else{
      db.grid.addControl(gcAlphaText, 4, 0);
      db.grid.addControl(gcColorText, 4, 1);
      db.grid.addControl(slider, 5, 0);
      gcButtonText.text = "Close"
      gcEvent = true;
    }
  })

  db.grid.addControl(gcButton, 3, 1);
  var gcAlphaText = new TextBlock();
  gcAlphaText.text = "Grid Transparency";
  gcAlphaText.color = db.DBcolor;
  gcAlphaText.fontSize = "10";
  gcAlphaText.fontFamily = "Helvetica";

  var gcColorText = new TextBlock();
  gcColorText.text = "Grid Color";
  gcColorText.color = db.DBcolor;
  gcColorText.fontSize = "10";
  gcColorText.fontFamily = "Helvetica";

  

  var slider = new Slider();
  slider.minimum = 0;
  slider.maximum = 1;
  slider.value = grid.getAlpha();
  slider.color = db.DBcolor;
  slider.height = "20px";
  slider.width = "125px";
  slider.onValueChangedObservable.add(function(value) {
    grid.setAlpha(value);   
  });


} */
