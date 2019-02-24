import React, { Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';

export default class Main extends Component {
    render() {      
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}