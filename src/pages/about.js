import React, { Component } from 'react';

import Title from '../components/title';
import Section from '../components/section';


export default class extends Component {
    render () {
        return (
            <Section id='about'>
                <Title>
                    <span className='binary-display'>00</span> A Little About Me
                </Title>
                <p><strong>Personality</strong></p>
                <p>
                    I have worked as a software engineer for a little over 10 years. Most of that time
                    has been spent learning and improving skills as a full stack developer. But I've also
                    dabbled a little bit in OS programming and 3D rendering.
                </p>
                <p>
                    I'm not great at selling myself. It feels weird. I'd rather just let the quality of my
                    speak for me. I recently started learning React on my own and am working on some side
                    projects I can share to showcase my skills (this site is one of them).
                </p>
                <p>
                    When I work, my main focus isn't so much on the process or what technologies I'm using.
                    What I care about the most is that I'm doing something that is helping people: medical researchers,
                    students and teachers, or office workers supporting the backbones of society.
                </p>
                <p><strong>Career</strong></p>
                <p>
                    My two most noteworthy positions are with RePublic Schools and Vanderbilt University Medical Center.
                </p>
                <p>
                    I joined RePublic Schools as their only developer and learned enough PHP to build and launch a
                    custom Learning Management System. Together we launched the application within my first 3 months.
                    Within a year the software I had built was serving their computer science
                    curriculum to over 30 school districts, including Metro Nashville Public Schools.
                </p>
                <p>
                    I am currently working with Vanderbilt University Medical Center as a Senior Application Developer. The
                    National Institutes of Health selected Vanderbilt to process the medical data collected as part of the
                    All of Us research program. I work as an integral part of the team building an API that gathers and
                    organizes the data, making it available for distribution to researchers.
                </p>
            </Section>
        )
    }
}