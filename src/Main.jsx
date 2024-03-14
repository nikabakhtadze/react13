import React from "react";
import Home from "./App";
function Main (){
        const style={
            color:"green",
        }
        return (
            <React.Fragment>
                <Home />
                <h1 style={style}>მთავარი</h1>
            </React.Fragment>
        );
    }
export default Main