import { 
        AdvancedDynamicTexture,
        Button,
        Grid,
        Control,
        TextBlock,
        Rectangle,
        } from "@babylonjs/gui";

var ControlGrid = (props) =>{
  var {scene} = props;
  var isOpen = false;
  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  
  var grid = new Grid();
  grid.background = "transparent";
  grid.width = "300px";
  grid.height = "35px";
  grid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
  grid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

  var gbox = new Rectangle();
  gbox.width = "300px"
  gbox.height = "35px"
  gbox.cornerRadius = 2.5;
  gbox.alpha = 0.5
  gbox.color = "transparent"
  gbox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
  gbox.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  
  var cmdText = new TextBlock();
  cmdText.text = "Dashboard";
  cmdText.color = "white";
  cmdText.fontSize = "20";
  cmdText.fontFamily = "Lucida Console";
  cmdText.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  

  

  advancedTexture.addControl(gbox);
  advancedTexture.addControl(grid); 
  grid.addColumnDefinition(30,true);
  grid.addColumnDefinition(150, true);
  grid.addColumnDefinition(30, true);
  grid.addRowDefinition(50, true);
  grid.addRowDefinition(50, true);
  grid.addRowDefinition(50, true);
  
  var tb1 = Button.CreateImageOnlyButton("tb1", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiPjxkZWZzPjxwYXRoIGQ9Ik01MTEuMjUgNDg5LjYzQzUyMyA1MDEuMzcgNTIzIDUyMC4zOCA1MTEuMjUgNTMyQzUwOC40MyA1MzQuODMgNDg1LjgzIDU1Ny40MiA0ODMgNTYwLjI1QzQ3MS4yNSA1NzIgNDUyLjI1IDU3MiA0NDAuNjMgNTYwLjI1QzQzMi41OCA1NTIuMjIgMzkyLjM4IDUxMi4xIDMyMCA0MzkuODhDMjQ3LjcgNTEyLjE3IDIwNy41MyA1NTIuMzQgMTk5LjUgNTYwLjM4QzE4Ny43NSA1NzIuMTIgMTY4Ljc1IDU3Mi4xMiAxNTcuMTMgNTYwLjM4QzE1NC4yOSA1NTcuNTUgMTMxLjU5IDUzNC45NSAxMjguNzUgNTMyLjEzQzExNyA1MjAuMzggMTE3IDUwMS4zNyAxMjguNzUgNDg5Ljc1QzE0NS43NSA0NzIuNzUgMjgxLjc1IDMzNi43NSAyOTguNzUgMzE5Ljc1QzMxMC41IDMwNy44OCAzMjkuNSAzMDcuODggMzQxLjI1IDMxOS42M0MzNzUuMjUgMzUzLjYzIDQ5NC4yNSA0NzIuNjMgNTExLjI1IDQ4OS42M1pNMTI4Ljc1IDI0OS42M0MxMTcgMjYxLjM4IDExNyAyODAuMzggMTI4Ljc1IDI5MkMxMzEuNTcgMjk0LjgzIDE1NC4xOCAzMTcuNDMgMTU3IDMyMC4yNUMxNjguNzUgMzMyIDE4Ny43NSAzMzIgMTk5LjM4IDMyMC4yNUMyMDcuNDEgMzEyLjIyIDI0Ny41OCAyNzIuMDUgMzE5Ljg4IDE5OS43NUMzOTIuMTcgMjcyLjA1IDQzMi4zNCAzMTIuMjIgNDQwLjM4IDMyMC4yNUM0NTIuMTMgMzMyIDQ3MS4xMyAzMzIgNDgyLjc1IDMyMC4yNUM0ODUuNTggMzE3LjQzIDUwOC4xOCAyOTQuODMgNTExIDI5MkM1MjIuNzUgMjgwLjI1IDUyMi43NSAyNjEuMjUgNTExIDI0OS42M0M0OTQgMjMyLjYzIDM1OCA5Ni42MiAzNDEgNzkuNjJDMzI5LjUgNjcuODcgMzEwLjUgNjcuODcgMjk4Ljc1IDc5LjYyQzI2NC43NSAxMTMuNjMgMTQ1Ljc1IDIzMi42MyAxMjguNzUgMjQ5LjYzWiIgaWQ9ImI0V2pBTUxkVyI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiNFdqQU1MZFciIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYjRXakFNTGRXIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==");
  tb1.width = "20px";
  tb1.height = "20px";
  tb1.color = "transparent";
  //tb1.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  //tb1.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  var tb2 = Button.CreateImageOnlyButton("tb2", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjY0MCIgaGVpZ2h0PSI2NDAiPjxkZWZzPjxwYXRoIGQ9Ik0xMjguNzUgMTUwLjMyQzExNyAxMzguNTcgMTE3IDExOS41NyAxMjguNzUgMTA3Ljk1QzEzMS41NyAxMDUuMTIgMTU0LjE4IDgyLjUyIDE1NyA3OS43QzE2OC43NSA2Ny45NSAxODcuNzUgNjcuOTUgMTk5LjM4IDc5LjdDMjA3LjQxIDg3LjczIDI0Ny41OCAxMjcuOSAzMTkuODggMjAwLjJDMzkyLjE3IDEyNy45IDQzMi4zNCA4Ny43MyA0NDAuMzggNzkuN0M0NTIuMTMgNjcuOTUgNDcxLjEzIDY3Ljk1IDQ4Mi43NSA3OS43QzQ4NS42IDgyLjUxIDUwOC40IDEwNS4wMSA1MTEuMjUgMTA3LjgyQzUyMyAxMTkuNTcgNTIzIDEzOC41NyA1MTEuMjUgMTUwLjJDNDk0LjI1IDE2Ny4yIDM1OC4yNSAzMDMuMiAzNDEuMjUgMzIwLjJDMzI5LjUgMzMyLjA3IDMxMC41IDMzMi4wNyAyOTguNzUgMzIwLjMyQzI2NC43NSAyODYuMzIgMTQ1Ljc1IDE2Ny4zMiAxMjguNzUgMTUwLjMyWk01MTEuMjUgMzkwLjMyQzUyMyAzNzguNTcgNTIzIDM1OS41NyA1MTEuMjUgMzQ3Ljk1QzUwOC40MyAzNDUuMTIgNDg1LjgzIDMyMi41MiA0ODMgMzE5LjdDNDcxLjI1IDMwNy45NSA0NTIuMjUgMzA3Ljk1IDQ0MC42MyAzMTkuN0M0MzIuNTggMzI3LjcyIDM5Mi4zOCAzNjcuODUgMzIwIDQ0MC4wN0MyNDcuNyAzNjcuNzcgMjA3LjUzIDMyNy42IDE5OS41IDMxOS41N0MxODcuNzUgMzA3LjgyIDE2OC43NSAzMDcuODIgMTU3LjEzIDMxOS41N0MxNTQuMjkgMzIyLjQgMTMxLjU5IDM0NSAxMjguNzUgMzQ3LjgyQzExNyAzNTkuNTcgMTE3IDM3OC41NyAxMjguNzUgMzkwLjJDMTQ1Ljc1IDQwNy4yIDI4MS43NSA1NDMuMiAyOTguNzUgNTYwLjJDMzEwLjUgNTcyLjA3IDMyOS41IDU3Mi4wNyAzNDEuMjUgNTYwLjMyQzM3NS4yNSA1MjYuMzIgNDk0LjI1IDQwNy4zMiA1MTEuMjUgMzkwLjMyWiIgaWQ9ImFoNEpWVGFFUiI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNhaDRKVlRhRVIiIG9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PGc+PHVzZSB4bGluazpocmVmPSIjYWg0SlZUYUVSIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==");
  tb2.width = "20px";
  tb2.height = "20px";
  tb2.color = "transparent";
  //tb2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
  //tb2.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  grid.addControl(tb2, 0, 0);           
  grid.addControl(cmdText, 0, 1);
  
  var collapse = function(){
    if(!isOpen){
      grid.width = "300px";
      grid.height = "300px";
      gbox.width = "300px";
      gbox.height = "300px";
      gbox.color = "white";
      grid.removeControl(tb2);
      grid.addControl(tb1, 0, 0);
      isOpen = true;
    }
    else{
      grid.width = "300px";
      grid.height = "35px";
      gbox.width = "300px";
      gbox.height = "35px";
      gbox.color = "transparent";
      grid.removeControl(tb1);
      grid.addControl(tb2, 0, 0);
      isOpen = false;
    }
  }

  tb1.onPointerDownObservable.add(collapse);
  tb2.onPointerDownObservable.add(collapse);

  
}


export default ControlGrid;