import React, { Component } from 'react';


export default class extends Component {
    onClick = (event) => {
        const element = document.getElementById(this.props.targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render () {
        return (
            <a className={`navbar-item ${this.props.active ? 'active' : ''}`} onClick={this.onClick}>
                { this.props.children }
            </a>
        );
    }
}
