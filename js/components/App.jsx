import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './Main.jsx';
import EditProfile from './EditProfile.jsx';


class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/login' component={Main} />
                    <Route path='/edit' component={EditProfile} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

function NotFound() {
    return (
        <h1>Site not found</h1>
    )
}

export default App;