import { AnimatePresence, motion } from 'framer-motion';
import React, { Component } from 'react';

import ExperienceHeader from './experienceHeader';


export default class extends Component {
    constructor (props) {
        super(props);
        this.state = { expanded: false };
    }

    render () {
        let detailedDisplay = '';
        if (this.state.expanded) {
            detailedDisplay = (
                <motion.div
                    className='details'
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                >
                    { this.props.description }
                    <p>&nbsp;</p>
                    { this.props.projects.map((project, index) => {
                        let spacer = '';
                        if (index > 0) {
                            spacer = <p>&nbsp;</p>
                        }
                        return (
                            <div>
                                { spacer }
                                <div className='level'>
                                    <strong>{ project.name }</strong>
                                    <div className='tags'>
                                        { project.skills.map((skill) => (
                                            <div className='tag is-rounded'>{ skill }</div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    { project.description }
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            )
        }

        return (
            <ExperienceHeader
                onClick={() => this.setState({ expanded: !this.state.expanded})}
                className={ this.state.expanded ? 'active' : '' }
            >
                <div className='columns'>
                    <div className='column is-4'>
                        <strong>{ this.props.title }</strong>
                    </div>
                    <div className='column'>
                        { this.props.company }
                    </div>
                    <div className='column is-narrow'>
                        { this.props.start }
                    </div>
                    <div className='column is-narrow'>
                        { this.props.end }
                    </div>
                </div>
                <AnimatePresence>
                    {detailedDisplay}
                </AnimatePresence>
            </ExperienceHeader>
        );
    }
}
