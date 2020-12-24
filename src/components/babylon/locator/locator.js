import { Component } from 'react';
import { 
  Color3,
  PositionGizmo,
  MeshBuilder,
  StandardMaterial,
  UtilityLayerRenderer,
} from '@babylonjs/core';
import { 
  AdvancedDynamicTexture,
  TextBlock,
  Rectangle,
  Control,
  Button,
  } from "@babylonjs/gui";

let c;

class locatorClass extends Component{
  constructor(props){
    super(props);
    this.color = "white";
    this.scene = props.scene;    
    this.ballMat = new StandardMaterial("locator", this.scene);
    this.ball = new MeshBuilder.CreateSphere("locator",
      {diameter: 0.15}, this.scene);       
    this.utilLayer = new UtilityLayerRenderer(this.scene);
    this.gizmo = new PositionGizmo(this.utilLayer);
    this.advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    this.label = new TextBlock();
    this.rect1 = new Rectangle();
    
    this.Ball();    
    this.Gizmo();    
    this.Coords();
  }

  Ball(){
    this.ballMat.diffuseColor = new Color3(0.4, 0.4, 0.4);
    this.ballMat.specularColor = new Color3(0.4, 0.4, 0.4);
    this.ballMat.emissiveColor = Color3.Yellow();
    this.ball.material = this.ballMat;    
  }
  Gizmo(){
    this.gizmo.attachedMesh = this.ball;
    this.gizmo.scaleRatio = 0.75;
    this.gizmo.updateGizmoRotationToMatchAttachedMesh = false;
    this.gizmo.updateGizmoPositionToMatchAttachedMesh = true;
  }
  
  Coords(){
    this.rect1.width = "0.5em";
    this.rect1.height = "30px";
    this.rect1.cornerRadius = 20;
    this.rect1.color = "transparent";
    this.rect1.thickness = 0.5;
    this.rect1.background = "transparent";
    this.advancedTexture.addControl(this.rect1);
    this.rect1.linkWithMesh(this.ball);
    this.rect1.linkOffsetY = -150;

    this.label.text = "X: U: T: ";
    this.label.fontSize = "15px";
    this.label.color = this.color;
    this.rect1.addControl(this.label);          
  }

  delete(){
    this.ball.dispose();
    this.ballMat.dispose();
    this.gizmo.dispose();
    this.label.dispose();
    this.rect1.dispose();
  }
  render(){       

    document.onkeydown = ()=>{      
      this.gizmo.attachedMesh = !this.gizmo.attachedMesh ? this.ball : null  
    }
    return;
    
  }
}
function Locator(props){
  var { scene } = props;
  c = new locatorClass({scene});
  scene.onPointerObservable.add(function(){
    var coords = c.ball.getPositionExpressedInLocalSpace();
    c.label.text = "X: "+coords._x.toFixed(2).toString()+" "+
      " U: "+coords._y.toFixed(2).toString()+" "+
      " T: "+coords._z.toFixed(2).toString();
  })
}

function deleteLocator(){
  if(c){
    c.delete();
  }
}

function locatorGUI(textColor){
  var locText = new TextBlock();
  locText.text = "Point Explorer";
  locText.color = textColor;
  locText.fontSize = "13";
  locText.fontFamily = "Helvetica";
  locText.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
  locText.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;

  var onRadio = new TextBlock();
  onRadio.text = "Off";
  onRadio.color = textColor;
  onRadio.fontSize = "13";
  onRadio.fontFamily = "Helvetica";
  onRadio.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

  var locatorButton = new Button();
  locatorButton.cornerRadius = 2.5
  locatorButton.addControl(onRadio);
  locatorButton.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

  return {locText, locatorButton, onRadio};
}

export { Locator, deleteLocator, locatorGUI };