import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeLoginStatus } from '../actions';
import store from '../store';


class Login extends Component {
    render() {
        let loginResult;

        if (this.props.login === true) {
            loginResult = (
                <div>
                    Logged in as Test
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

const mapStateToProps = (state) => {
    return {
      login: state.login
    };
  };


export default connect(state => 
    ({
        login: state.auth.login
    }),
    {
        changeLoginStatus,
    }
)(Login);