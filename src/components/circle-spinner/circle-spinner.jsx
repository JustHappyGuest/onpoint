import React from "react";
import  "./style.scss";

const CircleSpinner = ({size}) => {
    return(
        <div className="circle-spinner" style={{width:`${size}px`, height:`${size}px`, borderRadius:`${size}px`}}>
            <div className="circle-spinner__circle" />
            <div className="circle-spinner__circle circle-spinner__circle-delay" />
        </div>
    );
}

export default CircleSpinner;