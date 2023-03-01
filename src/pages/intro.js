import { AnimatePresence } from 'framer-motion';
import React, { Component } from 'react';

import Title from '../components/title';
import Section from '../components/section';
import Quote from '../components/quote';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuoteIndex: 0
        };
        this.quoteList = [
            'Excellent work & communication.',
            'Very thoughtful and a pleasure to work with.',
            'Was a champion and completed everything in time.',
            'Great communication, completed project as expected & provided helpful feedback!',
            'Is awesome.',
            'Went above and beyond.',
            'Great!'
        ];
        setInterval(this.incrementQuote, 6000);
    }

    incrementQuote = () => {
        const newIndex = this.state.currentQuoteIndex + 1;
        if (newIndex === this.quoteList.length) {
            this.setState({ currentQuoteIndex: 0 });
        } else {
            this.setState({ currentQuoteIndex: newIndex });
        }
    }

    render () {
        const quoteText = this.quoteList[this.state.currentQuoteIndex];

        return (
            <Section id='intro'>
                <h1 className='title is-3'>
                    Hi, my name is 
                </h1>
                <h1 className='title is-1'>
                    Kenny Skaggs
                </h1>
                <p>&nbsp;</p>
                <div className='quote-box'>
                    <i className="fas fa-quote-left"></i>
                    <AnimatePresence>
                        <Quote key={ this.state.currentQuoteIndex }>{ quoteText }</Quote>
                    </AnimatePresence>
                    <i className="fas fa-quote-right end-quote"></i>
                </div>
                <div className='quote-ref'>quotes mostly copied from my Upwork reviews</div>
            </Section>
        )
    }
}