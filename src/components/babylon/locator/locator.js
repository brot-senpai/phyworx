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




var Locator = (props) =>{
  var {scene} = props;

  var ballMat = new StandardMaterial("locator", scene);
  ballMat.diffuseColor = new Color3(0.4, 0.4, 0.4);
  ballMat.specularColor = new Color3(0.4, 0.4, 0.4);
  ballMat.emissiveColor = Color3.Red();  

  var ball = MeshBuilder.CreateSphere("locator", {diameter:0.15}, scene);
  ball.material = ballMat;
  
  var utilLayer = new UtilityLayerRenderer(scene);
  var gizmo = new PositionGizmo(utilLayer);
  gizmo.attachedMesh = ball;
  gizmo.scaleRatio = 0.75;
  gizmo.updateGizmoRotationToMatchAttachedMesh = false;
  gizmo.updateGizmoPositionToMatchAttachedMesh = true;

  document.onkeydown = ()=>{
    gizmo.attachedMesh = !gizmo.attachedMesh ? ball : null
        //console.log(sphere.getPositionExpressedInLocalSpace())
  }

  var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
  var rect1 = new Rectangle();
    rect1.width = 0.15;
    rect1.height = "30px";
    rect1.cornerRadius = 20;
    rect1.color = "white";
    rect1.thickness = .5;
    rect1.background = "transparent";
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(ball);   
    rect1.linkOffsetY = -150;
  
  var label = new TextBlock();
    label.text = "Sphere";
    label.fontSize = "10"
    rect1.addControl(label);

  scene.onPointerObservable.add(function(){
    var coords = ball.getPositionExpressedInLocalSpace();
    
    label.text = "X: "+coords._x.toFixed(2).toString()+" "+
      "Y: "+coords._y.toFixed(2).toString()+" "+
      "Z: "+coords._z.toFixed(2).toString();
  })
}

const solutionPoints = (solution)=>{

}

export { Locator };