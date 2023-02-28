import { AnimatePresence, motion } from 'framer-motion';
import React, { Component } from 'react';


export default class extends Component {
    render () {
        return (
            <motion.div
                className={`box experience-box ${this.props.className}`}
                whileHover={{ scaleX: 1.03 }}
                onClick={this.props.onClick}
            >
                { this.props.children }
            </motion.div>
        );
    }
}
