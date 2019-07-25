import React from 'react';
import heroBg from "../../../assets/images/hero-bg.png";
import Point from "../../point";
import "./style.scss";

const HeroBlock = () => {
    return(
        <div className="hero" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="container">
                <h1 className="hero__title">Всегда ли цели терапии СД2 на поверхности?</h1>
            </div>

            <Point btnSize={45} top={33.5} left={55.2} position="right" textLeft={1}>
                Цель по HbA1c
            </Point>
            <Point btnSize={23} top={50} left={20.5}>
                Гипогликемия
            </Point>
            <Point btnSize={15} top={65} left={38.3} textLeft={-3}>
                Осложнения СД
            </Point>
            <Point btnSize={15} top={61.5} left={76}>
                СС риски
            </Point>
        </div>
    );
}

export default HeroBlock;