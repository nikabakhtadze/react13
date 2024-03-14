import React from "react";
import Home from "./App";
function About (){
        const style={
            color:"purple",
        }
        return (
            <React.Fragment>
                <Home/>
                <h1 style={style}>ჩვენს შესახებ</h1>
            </React.Fragment>
        );
    }
export default About