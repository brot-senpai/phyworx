import React from 'react';
import { AdvancedDynamicTexture,
  DisplayGrid,
  Control,
  Button,
  CheckboxGroup,
  SelectionPanel,
  } from "@babylonjs/gui";
import { Color3,
  Vector3,
} from "@babylonjs/core";

export default  (props) => {

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");


  var toSize = function(isChecked) {
		
  }
  
  var transformGroup = new CheckboxGroup("Transformation");
	transformGroup.addCheckbox("Nothing yet", toSize);
  

  var displayGrid = new SelectionPanel("sp", [transformGroup]);
    displayGrid.color = "black";  
    displayGrid.width = "150px";
    displayGrid.height = "100px";
    displayGrid.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
    displayGrid.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
    displayGrid.top = "60px";
    displayGrid.left = "80px";

  var act = true;

  var menuButton = new Button.CreateSimpleButton("menu", "Menu");
  menuButton.color = "black";
  menuButton.width = 0.2;
  menuButton.height = "40px";
  menuButton.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
  menuButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  menuButton.top = "20px";
  menuButton.left = "80px";
  menuButton.onPointerDownObservable.add(function(){
    if(act === true){
      advancedTexture.addControl(displayGrid);
      act = false;
      ;}
    else{
      advancedTexture.removeControl(displayGrid);
      act = true;
    }
    
  })
  advancedTexture.addControl(menuButton);
  

}