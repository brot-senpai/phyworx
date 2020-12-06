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
    var light = new SpotLight("spotLight", new Vector3(0, 30, 0), 
        new Vector3(0, -1, 0), Math.PI / 2, 10, scene);
	light.diffuse = new Color3(1, 0, 0);
    
    var environment = scene.createDefaultEnvironment({
        skyboxSize: 300
    });
    environment.ground.position.y = -10;
    environment.setMainColor(new Color3(0, 0, 0));
    var ground = Mesh.CreateBox("Ground", 1, scene);
    ground.scaling = new Vector3(100, 1, 100);
    ground.position.y = environment.ground.position.y - (0.5 + 0.001)
    ground.material = new StandardMaterial("test", scene)
    ground.material.alpha = 0.99;
    ground.material.alphaMode = Engine.ALPHA_ONEONE;
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, {
        mass: 0,
        restitution: 0.6
    })

    var alpha = Math.PI;
    var gamma = Math.PI;
    // Create a mesh for the trail to follow.
    
    var p1 = MeshBuilder.CreateSphere("p1", 
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
    s1.emissiveColor = new Color3.White();
    //sourceMat.diffuseColor = new Color3.Red();
    //sourceMat.specularColor = new Color3.Black();
    t1.material = s1;
    

    var p2 = MeshBuilder.CreateSphere("p2", 
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
    s2.emissiveColor = new Color3.White();
    //sourceMat.diffuseColor = new Color3.Red();
    //sourceMat.specularColor = new Color3.Black();
    t2.material = s2;

    var p3 = MeshBuilder.CreateSphere("p2", 
        {diameter: 1, segments: 128}, scene);
    var p3mat = new StandardMaterial("p3", scene);
    p3mat.emissiveColor = new Color3.White();
    p3.material = p3mat;
    p3.bakeCurrentTransformIntoVertices();
    p3.position.x = Math.sin(alpha)*10;
    p3.position.z = Math.cos(alpha)*13;
    p3.computeWorldMatrix(true);
    var trail = new TrailMesh('new', p3, scene, .25, 250, true);
    var sourceMat = new StandardMaterial('sourceMat', scene);
    sourceMat.emissiveColor = new Color3.White();
    trail.material = sourceMat;
    const observer = scene.onBeforeRenderObservable.add(animate);
    function animate() {
        alpha += Math.PI/120;
        gamma += Math.PI/60;
        p3.position.x = Math.sin(alpha)*10;
        p3.position.z = Math.cos(alpha)*13;
        
        p1.position.x = Math.sin(gamma)*10;
        p1.position.y = Math.cos(gamma)*9;
        p1.position.z = Math.cos(gamma)*10;
        p2.position.x = Math.cos(alpha)*-10;
        p2.position.y = Math.sin(alpha)*-9;
        p2.position.z = Math.sin(alpha)*10;
        //beta += Math.PI/5;
        //camera.position = new Vector3(Math.sin(beta), 1.2, 35)
        
    }
    var sphere = MeshBuilder.CreateSphere("sphere", 
        {diameter: 5, segments: 128}, scene);
    var sphereColor1 = new StandardMaterial("s1", scene);
    sphereColor1.emissiveColor = new Color3.Red();
    sphere.material = sphereColor1;
    sphere.position.y = 0;



}


export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady}
        id='my-canvas' />
    </div>
)