import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import changeLoginStatus from '../actions';

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
        this.props.changeLoginStatus(false);
    }
}


export default connect(state => 
    ({
        login: state.login,
        name: state.name
    }),
    {
        changeLoginStatus,
    }
)(Login);