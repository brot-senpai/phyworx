import React from 'react';
import { ArcRotateCamera, 
    Vector3, 
    Color3, 
    MeshBuilder,
    TrailMesh,
    StandardMaterial,
    SpotLight,
    Mesh,
    Engine,
    PhysicsImpostor,
    Plane,
    MirrorTexture, 
    Sound,
} from '@babylonjs/core';
import SceneComponent from '../babylon/sceneComponent';




const onSceneReady = scene =>{
    var beta = 0;
    var camera = new ArcRotateCamera("ArcRotateCamera", beta, 1.2, 40, 
        new Vector3(0, 0, 0), scene);
        camera.useAutoRotationBehavior = true;
    //camera.setTarget(Vector3.Zero());
    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    scene.clearColor = new Color3(0.0, 0.0, 0.0);
    scene.enablePhysics();

    /* var light = new HemisphericLight("light", new Vector3(1,1,0), scene);
    light.intensity = 0.7; */
    var light = new SpotLight("spotLight", new Vector3(0, 4, 0), 
        new Vector3(0, -1, 0), Math.PI , .5, scene);
    light.diffuse = new Color3(1, 0, 0);
    
    
    var environment = scene.createDefaultEnvironment({
        skyboxSize: 300
    });
    environment.ground.position.y = -5;
    environment.setMainColor(new Color3(0, 0, 0));
    var ground = Mesh.CreateBox("Ground", 1, scene);
    ground.scaling = new Vector3(200, 1, 200);
    ground.position.y = environment.ground.position.y - (0.5 + 0.001)

    
    var sphere = MeshBuilder.CreateSphere("sphere", 
        {diameter: 5, segments: 128}, scene);
    
    

    var alpha = Math.PI/30;
    
    // Create a mesh for the trail to follow.
    
    /* var p1 = MeshBuilder.CreateSphere("p1", 
        {diameter: 1, segments: 128}, scene);
    var p1mat = new StandardMaterial("p1", scene);
    p1mat.emissiveColor = new Color3.White();
    p1.material = p1mat;
    p1.bakeCurrentTransformIntoVertices();
    p1.position.x = Math.sin(gamma)*10;
    p1.position.y = Math.cos(gamma)*9;
    p1.position.z = Math.cos(gamma)*10;
    p1.computeWorldMatrix(true);
    var t1= new TrailMesh('new', p1, scene, .25, 250, true);
    var s1 = new StandardMaterial('sourceMat', scene);
    s1.emissiveColor = new Color3.White(); */
    //sourceMat.diffuseColor = new Color3.Red();
    //sourceMat.specularColor = new Color3.Black();
    //t1.material = s1;
    

    /* var p2 = MeshBuilder.CreateSphere("p2", 
        {diameter: 1, segments: 128}, scene);
    var p2mat = new StandardMaterial("p2", scene);
    p2mat.emissiveColor = new Color3.White();
    p2.material = p2mat;
    p2.bakeCurrentTransformIntoVertices();
    p2.position.x = Math.cos(alpha)*-10;
    p2.position.y = Math.sin(alpha)*-9;
    p2.position.z = Math.sin(alpha)*10;
    p2.computeWorldMatrix(true);
    var t2 = new TrailMesh('new', p2, scene, .25, 250, true);
    var s2 = new StandardMaterial('sourceMat', scene);
    s2.emissiveColor = new Color3.White(); */
    //sourceMat.diffuseColor = new Color3.Red();
    //sourceMat.specularColor = new Color3.Black();
    //t2.material = s2;

    var p3 = MeshBuilder.CreateSphere("p2", 
        {diameter: 1, segments: 128}, scene);
    var p3mat = new StandardMaterial("p3", scene);
    p3mat.emissiveColor = new Color3(.2, .91, .91);
    p3.material = p3mat;
    p3.bakeCurrentTransformIntoVertices();
    p3.position.x = Math.sin(alpha)*10;
    p3.position.z = Math.cos(alpha)*10;
    p3.computeWorldMatrix(true);
    var trail = new TrailMesh('new', p3, scene, .5, 25, true);
    var sourceMat = new StandardMaterial('sourceMat', scene);
    sourceMat.emissiveColor = new Color3.Black()//Vector3(.2, .91, .97);
    trail.material = sourceMat;
    const observer = scene.onBeforeRenderObservable.add(animate);
    
    function animate() {
        alpha += Math.PI/25;
        
        p3.position.x = Math.sin(alpha)*10;
        p3.position.z = Math.cos(alpha)*10;
        
        //p3.position.y = Math.sin(gamma)*10;
        /* p1.position.x = Math.sin(gamma)*10;
        p1.position.y = Math.cos(gamma)*9;
        p1.position.z = Math.cos(gamma)*10;
        p2.position.x = Math.cos(alpha)*-10;
        p2.position.y = Math.sin(alpha)*-9;
        p2.position.z = Math.sin(alpha)*10; */
        //beta += Math.PI/5;
        //camera.position = new Vector3(Math.sin(beta), 1.2, 35)
        

        
    }
    ground.computeWorldMatrix(true);
    var ground_worldMatrix = ground.getWorldMatrix();
    var ground_vertexData = ground.getVerticesData("normal");
    var groundNormal = new Vector3(ground_vertexData[0],
        ground_vertexData[1], ground_vertexData[2]);
    groundNormal = Vector3.TransformNormal(groundNormal, ground_worldMatrix);

    var reflector = new Plane.FromPositionAndNormal(ground.position, 
        groundNormal.scale(-1));
    var mirrorMaterial = new StandardMaterial("mirror", scene)
    mirrorMaterial.reflectionTexture = new MirrorTexture("mirror", 1024, scene, true);
    mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
	mirrorMaterial.reflectionTexture.renderList = [sphere];
    mirrorMaterial.reflectionTexture.level = 1;
    ground.material = mirrorMaterial;
    //ground.material.alpha = 0.99;
    ground.material.alphaMode = Engine.ALPHA_ONEONE;
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, {
        mass: 0,
        restitution: 0.6
    })
    



}




export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' >
        
        </SceneComponent>
        
    </div>
)