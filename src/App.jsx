import React from "react";
import { Link } from "react-router-dom";
function Home(){
    const style={
        TextDecodecoration:"none"
    };
    return(
     <React.Fragment>
        <nav style={style}>
              <Link to={"/Main"}>მთავარი</Link>
              <Link to={"/Contact"}>კონტაქტი</Link>
              <Link to={"/About"}>ჩვენს შესახებ</Link>
        </nav>
     </React.Fragment>
    )
}
export default Home;