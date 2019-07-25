import React from 'react';
import managerClassesBEM from "../../../utils/managerClassesBEM";
import ice5 from "../../../assets/images/ice5.png";
import ice6 from "../../../assets/images/ice6.png";
import ice7 from "../../../assets/images/ice7.png";
import schema from "../../../assets/images/schema.png";
import "./style.scss";

const SchemaBlock = ({parallax}) => {
    const schemaIceClass = managerClassesBEM("schema__ice")({'parallax': parallax});
    return(
        <div className="schema">
            <div className="schema__title">Звенья патогенеза СД2</div>
            <img src={schema} alt="schema"/>
            <img className={schemaIceClass} src={ice5} style={{right:0, top: '30%'}} alt="ice"/>
            <img className={schemaIceClass} src={ice6} style={{left:0, top: '15%'}} alt="ice"/>
            <img className={schemaIceClass} src={ice7} style={{left:"10%", bottom: 0}} alt="ice"/>
        </div>
    );
}

export default SchemaBlock;