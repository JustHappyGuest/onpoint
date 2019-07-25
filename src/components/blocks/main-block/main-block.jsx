import React from 'react';
import managerClassesBEM from "../../../utils/managerClassesBEM";
import mainBg from "../../../assets/images/main-bg.png";
import ice from "../../../assets/images/ice1.png";
import ice2 from "../../../assets/images/ice2.png";
import ice3 from "../../../assets/images/ice3.png";
import ice4 from "../../../assets/images/ice4.png";

import "./style.scss";


const MainBlock = ({parallax}) => {
    const mainIceClass = managerClassesBEM("main__ice")({'parallax': parallax});
    return (
        <div className="main" style={{backgroundImage: `url(${mainBg})`}}>
            <div className={managerClassesBEM("main__title")({'parallax': parallax})}>Основа терапии —<br/> патогенез СД2</div>
            <img className={ mainIceClass } src={ice} style={{right:0, top: '60px'}} alt="ice"/>
            <img className={ mainIceClass } src={ice2} style={{left:"22%", top: '58%'}} alt="ice"/>
            <img className={ mainIceClass } src={ice3} style={{left:"10%", top: '22%'}} alt="ice"/>
            <img className={ mainIceClass } src={ice4} style={{left:"73%", top: '68%'}} alt="ice"/>
        </div>
    );
}

export default MainBlock;