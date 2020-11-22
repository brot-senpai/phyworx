import React from "react";

import Box from './box';
//import Physics from './physics';
//import Gestures from './gestures';

const divStyle = {
    width: 600,
    height: 500
}

const ThreeApp = () => {
    
    return(
        <div style={divStyle}>
            <Box />
        </div>
    )
}

export default ThreeApp;