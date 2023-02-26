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
                <p>Sapien faucibus et molestie ac. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Vel quam elementum pulvinar etiam non. Facilisis gravida neque convallis a cras semper auctor. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Et egestas quis ipsum suspendisse ultrices gravida dictum. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Fames ac turpis egestas sed tempus urna et pharetra. Nulla facilisi nullam vehicula ipsum a arcu. Tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </Section>
        )
    }
}