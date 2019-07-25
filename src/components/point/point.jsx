import CircleSpinner from "../circle-spinner";
import React from "react";
import "./style.scss";


const Point = ({children, btnSize : size, left, top, position, textLeft = 0, textBottom = 0}) => {
    return (
        <div className="point" style={{left:`${left}%`, top:`${top}%`, flexDirection:`${position === 'top'? 'column' : 'row'}`}}>
            {position === "top" ?  <div className="point__label" style={{marginBottom:'1rem', left:`${textLeft}rem`, top:`-${textBottom}rem`}}>{children}</div> : null}
            <CircleSpinner {...{size}}/>
            {position === "right" ?  <div className="point__label" style={{marginRight:'1rem', left:`${textLeft}rem`, top:`-${textBottom}rem`}}>{children}</div> : null}
        </div>
    );
}

Point.defaultProps={
    position: 'top'
}

export default Point;