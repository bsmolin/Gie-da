import React, { Component } from 'react';
import Main from './Main.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import mysql from 'mysql';

class App extends Component { 
    componentDidMount() {
        const db = mysql.getInstance({
            host: 'https://serwer1637184.home.pl/sql/',
            port: 3306,
            user: '21272731_kantor',
            password: '4D^7q29tr5Gn',
            database: '21272731_kantor'
        })
        
        db.exec('select * from test')
          .then(rows => rows.forEach(row => console.log(row)))
          .catch(e => console.error(e))
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

export default connect(state => 
    ({
        users: state.users
    }),
    {}
)(App);