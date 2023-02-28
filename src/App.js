import React, { Component } from 'react';

import BackgroundMask from './components/backgroundMask';
import Navbar from './Navbar';
import Intro from './pages/intro';
import About from './pages/about';
import Contact from './pages/contact';
import IconDisplay from './components/iconDisplay';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMask: false
        };
    }

    onHoverChanged = (isHovering) => {
        this.setState({ showMask: isHovering });
    }

    render () {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <Intro />
                    <About />
                    <Contact />
                </div>
                <IconDisplay onHoverChanged={this.onHoverChanged}/>
                <BackgroundMask show={this.state.showMask} />
            </div>
        )
    }
}
