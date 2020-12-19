import { Engine, Scene } from '@babylonjs/core';
import React, { useEffect, useRef } from 'react';

import '../../App.css'

export default (props) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, 
        onRender, onSceneReady, ...rest } = props;
    
    useEffect(() =>{
        
            const engine = new Engine(reactCanvas.current, antialias,
                engineOptions, adaptToDeviceRatio);
            engine.resize();
            const scene = new Scene(engine, sceneOptions);
            if(scene.isReady()){
                props.onSceneReady(scene)
            }
            else{
                scene.onReadyObservable.addOnce(scene => props.
                    onSceneReady(scene));
            }
            engine.runRenderLoop(() => {
                if(typeof onRender === 'function'){
                    onRender(scene);
                }
                scene.render();
            })

            const resize = () =>{
                scene.getEngine().resize();
                
            }
            
            if(window){
                window.addEventListener('resize', resize);
            }
            return () =>{
                scene.getEngine().dispose();
                if(window){
                    window.removeEventListener('resize', resize);
                }
            }
        
    }, [reactCanvas])

    return(
        
        <canvas 
        width={window.innerWidth-60} 
        height={window.innerHeight-90} 
        ref={reactCanvas} {...rest} />
        
    )

}