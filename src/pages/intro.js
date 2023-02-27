import React, { Component } from 'react';

import Title from '../components/title';
import Section from '../components/section';


export default class extends Component {
    render () {
        return (
            <Section id='intro'>
                <h1 className='title is-1'>
                    Kenny Skaggs
                </h1>
                <h1 className='subtitle'>
                    Telling computers what to do since 1998
                </h1>
                <p>
                    Passionate software engineer looking for a full-time or part-time position doing complex and
                    challenging work for a great cause.
                </p>
                <p>
                    I'm detail oriented and great at debugging. Most of my skillset is in full stack
                    development, but I'm a quick learner and am open to other fields. My main focus isn't
                    so much on the process or what technologies I'm using. What I care about the most is
                    that the work I'm doing is helping people: medical researchers, students and teachers,
                    or office workers supporting the backbones of society.
                </p>
            </Section>
        )
    }
}