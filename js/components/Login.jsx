import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';


class Login extends Component {
    
    render() {
        let loginResult;

        if (this.props.login === true) {
            loginResult = (
                <div>
                    Logged in as {this.props.name}
                    <NavLink to="/edit"><i className="fas fa-cog"></i></NavLink>
                    <NavLink to="/" onClick={this.logOut}><i className="fas fa-power-off"></i></NavLink>
                </div>
            )
        } 

        return <div className="header-options">{loginResult}</div>
    }

    logOut = () => {
        this.props.logOut();
    }
}


export default connect(state => 
    ({
        login: state.auth.login,
        name: state.auth.name
    }),
    {
        logOut
    }
)(Login);