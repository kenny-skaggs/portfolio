import { motion } from 'framer-motion';
import React, { Component } from 'react';


export default class extends Component {
    render() {
        return (
            <motion.div
                className='quote'
                initial={{
                    top: 0,
                    opacity: 0
                }}
                animate={{
                    top: '50%',
                    opacity: 1,
                    transition: { duration: 1 }
                }}
                exit={{
                    top: '100%',
                    opacity: 0,
                    transition: { duration: 1 }
                }}
            >
                { this.props.children }
            </motion.div>
        );
    }
}
