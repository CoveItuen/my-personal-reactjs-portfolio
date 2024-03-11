import React from "react";
import './FloatingDiv.css'

const FloatingDiv = ({image, txt1, txt2}) => {

    return (
        <div className="floatingdiv">
            <img src={image} alt="" />
            <span>
               {txt1}
                <br/>
                <span>{txt2}</span>
            </span>
        </div>
    )
}

export default FloatingDiv