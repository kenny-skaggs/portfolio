import {AnimatePresence, motion } from "framer-motion";
import React, { Component } from "react";


export default class extends Component {
    render () {
        let maskDisplay = '';
        if (this.props.show) {
            maskDisplay = (
                <motion.div 
                    className='mask-display'
                    key='mask-display'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                />
            )
        }

        return (
            <AnimatePresence>
                { maskDisplay }
            </AnimatePresence>
        );
    }
}
