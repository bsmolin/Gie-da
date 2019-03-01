import React, { Component } from 'react';
import Main from './Main.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';


class App extends Component {
    componentDidMount() {
        fetch('http://localhost:3004/users')
      .then(response => response.json())
      .then(data => console.log(data));
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/login' component={Main} />
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

// export default connect(state => 
//     ({
//         users: state.users
//     }),
//     { }
// )(App);