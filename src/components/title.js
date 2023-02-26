import React, { Component } from 'react';


export default class extends Component {
    render () {
        return (
            <h1 className='title my-title'>
                { this.props.children }
            </h1>
        );
    }
}
