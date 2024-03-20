
import React from "react";
import image from "./Images/writing.png";
import "./index.css";

const Header=()=>{
    return(
        <>
        <div className="header">
        <img src={image} alt="logo" width="60" height="60" />
        <h1>Vini Keep</h1>
        </div>
        </>
    );
}

export default Header;
