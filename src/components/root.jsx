import React, {Fragment} from 'react';

import HeroBlock from "./blocks/hero-block";
import MainBlock from "./blocks/main-block";
import SchemaBlock from "./blocks/schema-block";
import Pagination from "./pagination";
import Next from "./next";

const Root = ({currentBlock, blocks}) => {
    return(
        <Fragment>
            <Pagination blocks={blocks}/>
            <HeroBlock />
            <MainBlock  parallax={blocks[1].active} />
            <SchemaBlock parallax={blocks[2].active} />
            <Next end={blocks.length-1 === currentBlock}/>
        </Fragment>

    );
}

export default Root;