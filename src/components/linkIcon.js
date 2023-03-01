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
        if (window.innerWidth > 700) {
            this.props.onHoverChanged(true);
        }
    }

    onHoverEnd = () => {
        this.setState({ isHovered: false });
        if (window.innerWidth > 700) {
            this.props.onHoverChanged(false);
        }
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
            <motion.a
                className={`link-icon`}
                onMouseEnter={this.onHoverStart}
                onMouseLeave={this.onHoverEnd}
                href={this.props.linkTarget}
                target='_blank'
            >
                <AnimatePresence>
                    <span className='icon is-large'>
                        <i className={this.props.iconSelector} />
                    </span>
                    {detailDisplay}
                </AnimatePresence>
            </motion.a>
        )
    }
}
