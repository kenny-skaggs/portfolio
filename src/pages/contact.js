import React, { Component } from 'react';

import Title from '../components/title';
import Section from '../components/section';


export default class extends Component {
    render () {
        return (
            <Section id='contact'>
                <Title>
                    <span className='binary-display'>10</span> Let's Talk!
                </Title>
                <p>
                    I am currently seeking new opportunities. Whether you have a full-time employee
                    or part-time contract postition you are looking to fill, feel free to reach out 
                    to talk more about how my skillset can help!
                </p>
                <p>
                    Email me at <a href='mailto:skaggskd88@gmail.com'>skaggskd88@gmail.com</a> to say hi!
                </p>
            </Section>
        )
    }
}