import React from "react";
import logo from '../../img/bread.svg';

const imgStyle = {
    color: "#000000",
    height: 600,
    WebkitFilter: "invert(100%)",
    filter: "invert(100%)"
    
}

function Home(props) {
    return(
        <div style={{backgroundColor: "#000000"}}>
            <img src={logo} alt="brot-senpai" style={imgStyle}/>
        </div>
    )
}

export default Home;