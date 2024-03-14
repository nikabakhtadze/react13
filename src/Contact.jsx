import React from "react";
import Home from "./App";
function Contact (){
        const style={
            color:"blue",
        }
        return (
            <React.Fragment>
                <Home />
                <h1 style={style}>კონტაქტის გვერდი</h1>
            </React.Fragment>
        );
    }
export default Contact