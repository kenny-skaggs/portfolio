import { AnimatePresence, motion } from 'framer-motion';
import React, { Component } from 'react';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    onHoverStart = () => {
        this.setState({ isHovered: true });
        this.props.onHoverChanged(true);
    }

    onHoverEnd = () => {
        this.setState({ isHovered: false });
        this.props.onHoverChanged(false);
    }

    render () {
        let detailDisplay = '';
        if (this.state.isHovered && window.innerWidth > 700) {
            detailDisplay = (
                <motion.span
                    className='detail'
                    key='detail'
                    initial={{
                        left: -20,
                        opacity: 0,
                        transition: { ease: 'easeIn' }
                    }}
                    exit={{
                        left: 30,
                        opacity: 0
                    }}
                    animate={{
                        left: 0,
                        opacity: 1
                    }}
                >
                    {this.props.detailDisplay}
                </motion.span>
            );
        }

        return (
            <motion.div
                className='link-icon'
                onMouseEnter={this.onHoverStart}
                onMouseLeave={this.onHoverEnd}
                onClick={() => window.open(this.props.linkTarget)}
            >
                <AnimatePresence>
                    <span
                        className='icon is-large'
                    >
                        <i className={this.props.iconSelector} />
                    </span>
                    {detailDisplay}
                </AnimatePresence>
            </motion.div>
        )
    }
}
