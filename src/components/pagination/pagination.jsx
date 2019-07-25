import React from 'react';
import "./style.scss";
import managerClassesBEM from "../../utils/managerClassesBEM";

const Pagination = ({blocks}) => {
    return(
        <div className="pagination">
            {
                blocks.map((block, id) => {
                    return <div key={id} className={managerClassesBEM("pagination__dot")({'active': block.active})}/>
                })
            }
        </div>
    );
}

export default Pagination;