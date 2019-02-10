import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Main} />
                    {/* <Route path='/panel' component={Panel} /> */}
                    <Route path='*' component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            log: false,
            name: "Jan"
        }
    }

    render() {
        return (
            <div>
                <Header log={this.state.log} name={this.state.name} />
                <Body log={this.state.log} name={this.state.name} />
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            log: this.props.log,
            name: this.props.name
        }
    }

    render() {
        return (
            <header>  
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Kantor</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink exact to="#" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"></a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <Login log={this.state.log} name={this.state.name} />
                        </div>
                    </nav>
            </header>
        )
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            log: this.props.log,
            name: this.props.name
        }
    }

    render() {
        function login(log, name) {            
            if (log) {
                return (
                    <div>
                        Witaj {name}<br />
                        <NavLink to="/logout">Wyloguj się</NavLink>
                    </div>
                )

            } else {
                return <NavLink to="/login">Zaloguj się</NavLink>
            }
        };

        return (
            login(this.state.log, this.state.name)
        )
    }
}

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            log: this.props.log,
            name: this.props.name
        }
    }

    render() {
        function bodyHtml(log) {
            if ( log ) {
                return <BodyLogIn />
            } else {
                return <BodyLogOut />
            }
        }

        return bodyHtml(this.state.log);
    }
}

function NotFound() {
    return (
        <h1>Site not found</h1>
    )
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});