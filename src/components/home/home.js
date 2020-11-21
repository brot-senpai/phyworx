import React from "react";
import logo from '../../img/bread.svg';

const imgStyle = {
    color: "#000000",
    width: "100%",
    height: "20em",
    WebkitFilter: "invert(100%)",
    filter: "invert(100%)"
    
}

function Home(props) {
    return(
        <div >
            <img src={logo} alt="brot-senpai" style={imgStyle}/>
        </div>
    )
}

export default Home;