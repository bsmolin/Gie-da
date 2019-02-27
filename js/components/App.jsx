import React, { Component } from 'react';
import Main from './Main.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../firebase';

class App extends Component {
    constructor() {
        super();

        this.state = {
            users: ''
        }
    } 

    componentWillMount() {
        firebase.database().ref('/users/users/0/').on('value', (snapshot) => {
            const userObj = snapshot.val();
            
            this.setState({
                users: userObj.id
            })
          });
    }

    render() {
        return (
            // <HashRouter>
            //     <Switch>
            //         <Route exact path='/' component={Main} />
            //         <Route path='/login' component={Main} />
            //         <Route path='*' component={NotFound} />
            //     </Switch>
            // </HashRouter>
            <h1>{this.state.users}</h1>
        )
    }
}

function NotFound() {
    return (
        <h1>Site not found</h1>
    )
}

export default connect(state => 
    ({
        users: state.users
    }),
    {}
)(App);