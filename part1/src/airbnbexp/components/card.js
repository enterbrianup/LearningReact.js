import React from "react";

const Card=()=>{

    return(
        <>
        <div className="card">
        <img src={require("../images/swim.png")} className="card--image"/>
        <div className="card">
         <img src={require("../images/star.png")} alt="star" className="card--str"/>
         <span>5.0</span>
         <span className="gray">(6).</span>
         <span children="gray">USA</span>
        </div>

        <p>Life lesson with katie Zaferes</p>
                <p><span className="bold">From $136 </span>/ person</p>

        {/* <img src={require("../images/wedding.png")}/>
        <img src={require("../images/mountain-bike.png")}/> */}
        </div>
        </>
    )
}
export default Card; 