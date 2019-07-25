import React from 'react';

import arrow from "../../assets/images/arrow.png";
import nextBg from "../../assets/images/next.png";
import "./style.scss";
import managerClassesBEM from "../../utils/managerClassesBEM";

const Next = ({end}) => {
    return(
        <div className={managerClassesBEM("next")({"hide" : end})}>
            <div className="next__label">
                <p className="next__text">Листайте вниз</p>
                <img className="next__arrow" src={arrow} alt="next arrow"/>
            </div>
            <img src={nextBg} alt="next bg"/>
        </div>
    );
}

export default Next;