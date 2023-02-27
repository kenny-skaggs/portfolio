import React, { Component } from 'react';

import Title from '../components/title';
import Section from '../components/section';
import SkillsCard from '../components/skillsCard';


export default class extends Component {
    render () {
        return (
            <Section id='skills'>
                <Title>
                    <span className='binary-display'>01</span> My Skills
                </Title>
                <p>
                    Most of my skills are focused on web development, but I've also had other interests
                    and enjoy learning new things on my own.
                </p>
                <p>&nbsp;</p>
                <p>
                    Click on a section to learn more.
                </p>
                <div className='skill-container'>
                    <SkillsCard 
                        title='Front-end Development'
                        skills={ ['Javascript', 'Vue.js / React', 'JQuery', 'CSS'] }
                    />
                    <SkillsCard
                        title='Backend Development'
                        skills={ ['Frameworks (Flask/Django)', 'Rest API Design'] }
                    />
                    <SkillsCard
                        title='Database Administration'
                        skills={ ['MySQL', 'Schema Design'] }
                    />
                    <SkillsCard
                        title='Miscellaneous'
                        skills={ ['Git with Github', 'Agile Methodology'] }
                    />
                </div>
            </Section>
        );
    }
}