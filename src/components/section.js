import { motion } from 'framer-motion';
import React, { Component } from 'react';


export default class Section extends Component {
    render () {
        return (
            <div id={ this.props.id } className='my-section'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.5
                    }}
                >
                    { this.props.children }
                </motion.div>
            </div>
        )
    }
}
