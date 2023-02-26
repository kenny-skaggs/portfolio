import React, { Component } from 'react';

import NavLink from './components/navLink';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: 'intro'
        };

        window.addEventListener('scroll', this.onScroll);
    }

    isElementVisible = (elementId) => {
        const offsetRect = document.getElementById(elementId).getBoundingClientRect();
        const elementMiddle = (offsetRect.top + offsetRect.bottom) / 2;
        const screenHeight = window.innerHeight;
        return elementMiddle > 0 && elementMiddle < screenHeight;
    }

    onScroll = (event) => {
        if (this.isElementVisible('about')) {
            this.setState({activeSection: 'about'});
        } else if (this.isElementVisible('skills')) {
            this.setState({activeSection: 'skills'});
        } else if (this.isElementVisible('experience')) {
            this.setState({activeSection: 'experience'});
        } else if (this.isElementVisible('contact')) {
            this.setState({activeSection: 'contact'});
        }
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='navbar-brand'>
                    <NavLink targetId='intro'>
                        ks
                    </NavLink>

                    <a className='navbar-burger' data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id='navbarMenu' className='navbar-menu'>
                    <div className='navbar-end'>
                        <NavLink targetId='about' active={this.state.activeSection == 'about'}>
                            <span className='binary-display'>00</span> About
                        </NavLink>
                        <NavLink targetId='skills' active={ this.state.activeSection == 'skills' }>
                            <span className='binary-display'>01</span> Skills
                        </NavLink>
                        <NavLink targetId='experience' active={ this.state.activeSection == 'experience' }>
                            <span className='binary-display'>10</span> Experience
                        </NavLink>
                        <NavLink targetId='contact' active={ this.state.activeSection == 'contact' }>
                            <span className='binary-display'>11</span> Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}
