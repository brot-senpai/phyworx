import { 
  Vector3, 
  Color3,
  MeshBuilder,
  DynamicTexture,
  Mesh,
  StandardMaterial,
  PointerEventTypes,
  UtilityLayerRenderer, 
  PositionGizmo,
  LinesMesh,
  } from '@babylonjs/core';
import { 
        AdvancedDynamicTexture,
        Rectangle,
        TextBlock,
        Button,
        Control,
        Slider,
        SelectionPanel,
        } from "@babylonjs/gui";


let ball, gizmo, rect1, label, coords;

var Locator = (props) =>{
  var {scene} = props;

  var ballMat = new StandardMaterial("locator", scene);
  ballMat.diffuseColor = new Color3(0.4, 0.4, 0.4);
  ballMat.specularColor = new Color3(0.4, 0.4, 0.4);
  ballMat.emissiveColor = Color3.Yellow();  

  ball = MeshBuilder.CreateSphere("locator", {diameter:0.15}, scene);
  ball.material = ballMat;
  
  var utilLayer = new UtilityLayerRenderer(scene);
  gizmo = new PositionGizmo(utilLayer);
  gizmo.attachedMesh = ball;
  gizmo.scaleRatio = 0.75;
  gizmo.updateGizmoRotationToMatchAttachedMesh = false;
  gizmo.updateGizmoPositionToMatchAttachedMesh = true;

  document.onkeydown = ()=>{
    gizmo.attachedMesh = !gizmo.attachedMesh ? ball : null
        //console.log(sphere.getPositionExpressedInLocalSpace())
  }

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
    rect1 = new Rectangle();
    rect1.width = "0.50em";
    rect1.height = "40px";
    rect1.cornerRadius = 20;
    rect1.color = "white";
    rect1.thickness = .5;
    rect1.background = "transparent";
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(ball);   
    rect1.linkOffsetY = -150;
  
    label = new TextBlock();
    label.text = "X: U: T:";
    label.fontSize = "15"
    rect1.addControl(label);

  scene.onPointerObservable.add(function(){
    coords = ball.getPositionExpressedInLocalSpace();
    
    label.text = "X: "+coords._x.toFixed(2).toString()+" "+
      " U: "+coords._y.toFixed(2).toString()+" "+
      " T: "+coords._z.toFixed(2).toString();
  })
}

var initLocator = (scene, toggle)=>{
  console.log(scene);
  if(toggle){
    Locator({scene});
  }
  else{
    if(ball){
    ball.dispose();
    gizmo.dispose(); 
    rect1.dispose(); 
    label.dispose(); }
    
  }
}

export { initLocator };