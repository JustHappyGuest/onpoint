import React, {Component} from "react";
import Root from "../components/root";
import onSwipe from "../utils/onswipe";
import clearSwipe from "../utils/clear-swipe";


class RootContainer extends Component{
    constructor(){
        super()
        this.state = {
            currentBlock: 0,
            blocks: Array(3).fill(null).map((item, id) => ({offset: id * window.innerHeight, active: !id}))
        }
    }

    componentDidMount() {
        const switchBlock = (blocks, direction) => {
            return blocks.map((block, id) => {
                if(id === this.state.currentBlock + direction) block.active = true;
                else block.active = false;
                return block;
            });
        }

        const handleswipe = (isdownswipe) => {
            if(isdownswipe) {
                if(this.state.currentBlock !== 0) this.setState(({currentBlock}) => ({
                    currentBlock: currentBlock - 1,
                    blocks: switchBlock(this.state.blocks, -1)
                }));
            }
            else {
                if(this.state.currentBlock !== this.state.blocks.length - 1) this.setState(({currentBlock}) => ({
                    currentBlock: currentBlock + 1,
                    blocks: switchBlock(this.state.blocks, 1)
                }));
            };

            window.scrollTo({
                top: this.state.blocks[this.state.currentBlock].offset,
                behavior: "smooth"
            });

            //document.body.style.transform = `translate3d(0, -${this.state.blocks[this.state.currentBlock].offset}px, 0)`;

        }

        this.swipeEvent = onSwipe(document, handleswipe);




    }

    componentWillUnmount() {
        clearSwipe(document, this.swipeEvent);
    }

    render(){
        return(
            <Root blocks={this.state.blocks} currentBlock={this.state.currentBlock}/>
        );
    }
}

export default RootContainer;