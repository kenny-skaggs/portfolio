import React, { Component } from 'react';

import Navbar from './Navbar';
import Intro from './pages/intro';
import About from './pages/about';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Contact from './pages/contact';


export default class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <Intro />
                    <About />
                    <Skills />
                    <Experience />
                    <Contact />
                </div>
            </div>
        )
    }
}
