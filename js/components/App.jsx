import React, { Component } from 'react';
import Main from './Main.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions';


class App extends Component {
    constructor() {
        super();
    } 

    componentWillMount() {
        // firebase.database().ref('/users/0/').on('value', (snapshot) => {
        //     const userObj = snapshot.val();
            
        //     this.setState({
        //         users: userObj.id
        //     })
        //   });

          this.props.addUser('test', 'test2');
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
            <h1></h1>
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
    { addUser }
)(App);