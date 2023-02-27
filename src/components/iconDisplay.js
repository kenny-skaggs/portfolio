import { motion } from 'framer-motion';
import React, { Component } from 'react';

import LinkIcon from './linkIcon';


export default class extends Component {
    render () {
        return (
            <motion.div className='icon-display'>
                <LinkIcon
                    onHoverChanged={this.props.onHoverChanged}
                    iconSelector='fa-brands fa-linkedin'
                    detailDisplay='linkedin.com/in/kennyskaggs'
                    linkTarget='https://www.linkedin.com/in/kennyskaggs/'
                />
                <LinkIcon
                    onHoverChanged={this.props.onHoverChanged}
                    iconSelector='fa-brands fa-square-github' 
                    detailDisplay='github.com/kenny-skaggs'
                    linkTarget='https://github.com/kenny-skaggs'
                />
                <LinkIcon
                    onHoverChanged={this.props.onHoverChanged}
                    iconSelector='fas fa-square-envelope' 
                    detailDisplay='skaggskd88@gmail.com'
                    linkTarget='mailto:skaggskd88@gmail.com'
                />
            </motion.div>
        );
    }
}
