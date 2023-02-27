import { motion } from 'framer-motion';
import React, { Component } from 'react';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render () {
        let selectedAnimation = '';
        let hoverAnimation = {
            'border-color': '#008'
        }
        if (this.state.active) {
            selectedAnimation = {
                width: '100%',
                transition: {duration: 5}
            };
            hoverAnimation = '';
        }
        return (
            <motion.div
                className='skill-card'
                whileHover={hoverAnimation}
                animate={selectedAnimation}
                onClick={() => this.setState({ active: !this.state.active })}
            >
                <h1 className='title is-5'>
                    {this.props.title}
                </h1>
                <ul>
                    {this.props.skills.map((skill, index) => (
                        <li key={index}>{ skill }</li>
                    ))}
                </ul>
            </motion.div>
        )
    }
}
