import React, { Component } from 'react';


import Title from '../components/title';
import Section from '../components/section';
import ExperienceCard from '../components/experienceCard';


export default class extends Component {
    render () {
        const experience = [
            {
                company: 'Vanderbilt University Medical Center',
                title: 'Senior Application Developer',
                start: 'Apr 2020',
                end: 'current',
                description: (
                    <div>
                        <p>background</p>
                        <p>my role on the RDR</p>
                    </div>
                ),
                projects: [
                    {
                        name: 'Raw Data Repository',
                        description: <p>
                            Flask API that accepts data sent from third-parties through various methods,
                            processes, and exports it to some other teams.
                        </p>,
                        skills: ['Python', 'Flask', 'API Design', 'MySQL']
                    }
                ]
            },
            {
                company: '',
                title: 'Freelance Software Engineer',
                start: 'October 2019',
                end: 'Apr 2020',
                description: (
                    <p>bob</p>
                ),
                projects: [
                    {
                        name: 'Upwork projects',
                        description: <p>project main</p>,
                        skills: ['foo-fighting']
                    }
                ]
            },
            {
                company: 'RePublic',
                title: 'Lead Developer',
                start: 'May 2016',
                end: 'Oct 2019',
                description: (
                    <p>
                        Worked on a variety of projects to help students, teachers, and school administration.
                    </p>
                ),
                projects: [
                    {
                        name: 'PATH',
                        description: <div>
                            PATH was a tool for collecting student assessment data in order to present to
                            admin to guide decision making
                        </div>,
                        skills: ['Django', 'python', 'Vue.JS', 'PostgreSQL', 'Javascript']
                    },
                    {
                        name: 'CS Platform',
                        description: <div>
                            This was the school's custom-built Learning Management System (LMS). Was used
                            by more than 40 school districts in the U.S.
                        </div>,
                        skills: ['PHP', 'Symfony', 'JQuery', 'Javascript']
                    }
                ]
            },
            {
                company: 'Solstice',
                title: 'Software Consultant',
                start: 'August 2013',
                end: 'May 2016',
                description: (
                    <p>bob</p>
                ),
                projects: [
                    {
                        description: <p>project main</p>,
                        skills: ['foo-fighting']
                    }
                ]
            },
            {
                company: 'Geneca',
                title: 'Junior Developer',
                start: 'Jun 2011',
                end: 'Aug 2013',
                description: (
                    <p>bob</p>
                ),
                projects: [
                    {
                        description: <p>project main</p>,
                        skills: ['foo-fighting']
                    }
                ]
            }
        ]

        return (
            <Section id='experience'>
                <Title>
                    <span className='binary-display'>10</span> My Experience
                </Title>
                {experience.map((role, index) => (
                    <ExperienceCard key={index} {...role} />
                ))}
            </Section>
        )
    }
}