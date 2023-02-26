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
                    Telling some computers what to do since 1998
                </h1>
                <p>
                    Libero id faucibus nisl tincidunt eget nullam non nisi est. In ante metus dictum at tempor commodo ullamcorper a. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pharetra sit amet aliquam id diam maecenas ultricies mi. Sit amet purus gravida quis blandit turpis. Venenatis cras sed felis eget velit. Pellentesque elit ullamcorper dignissim cras tincidunt. Consectetur libero id faucibus nisl tincidunt eget nullam non. Magna ac placerat vestibulum lectus mauris ultrices. Orci ac auctor augue mauris augue. Cursus euismod quis viverra nibh. Commodo ullamcorper a lacus vestibulum sed. Eros donec ac odio tempor orci dapibus ultrices in.
                </p>
            </Section>
        )
    }
}