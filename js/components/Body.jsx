import React, { Component } from 'react';
import { connect } from 'react-redux';
import BodyLogOut from './BodyLogOut.jsx';
import BodyLogIn from './BodyLogIn.jsx';

 class Body extends Component {
    render() {
        return (this.props.login) ? <BodyLogIn /> : <BodyLogOut />
    }
}

export default connect(state => 
    ({
        login: state.login
    }),
    {}
)(Body);