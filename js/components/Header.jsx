import React, { Component } from 'react';
import Login from './Login.jsx';
import '../../sass/Header.scss'

export default class Header extends Component {
    render() {
        return (
            <header className="container">
                <div className="header-title">Exchange</div>
                <Login />
            </header>
        )
    }
}