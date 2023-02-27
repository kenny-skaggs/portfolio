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
                <p>
                    Loved playing games as a kid, but really wanted to know how they worked too (and not
                    just because that helped me win). At about twelve years old, a neighbor-hood college
                    student gave me his old Visual Basic 6 book. That's what kicked off a constant hunger
                    to learn more about computers.
                </p>
                <p>
                    Need a challange that results in a good utility for someone to use. Attack bugs with
                    the same curiousity and a systematic approach to find why it's happening, as well
                    as what kinds of processes can be put in place to prevent similar problems in the
                    future.
                </p>
            </Section>
        )
    }
}