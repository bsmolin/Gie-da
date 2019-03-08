import React, { Component } from 'react';
import '../../sass/BodyLogOut.scss';
import { connect } from 'react-redux';
import { logIn } from '../actions';

class BodyLogOut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registerLogin: "",
            registerPassword: "",
            registerPassword2: "",
            loginName: "",
            loginPassword: "",
            message: ""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="login-page">
                    <div className="form">
                        <form className="register-form show">
                            <input type="text" placeholder="login" value={this.state.registerLogin} onChange={(e) => this.updateState(e,"registerLogin")}/>
                            <input type="password" placeholder="password" value={this.state.registerPassword} onChange={(e) => this.updateState(e, "registerPassword")} />
                            <input type="password" placeholder="password again" value={this.state.registerPassword2} onChange={(e) => this.updateState(e, "registerPassword2")} />
                            <div>{this.state.message}</div>
                            <button type="submit" onClick={(e) => this.createAccountValidation(e)}>Create</button>
                            <p className="message">Already registered? <button onClick={this.showLoginPage}>Sign In</button></p>
                        </form>
                        <form className="login-form">
                            <input type="text" placeholder="username" value={this.state.loginName} onChange={(e) => this.updateState(e, "loginName")} />
                            <input type="password" placeholder="password" value={this.state.loginPassword} onChange={(e) => this.updateState(e, "loginPassword")} />
                            <div>{this.state.message}</div>
                            <button onClick={this.logIn}>login</button>
                            <p className="message">Not registered? <button onClick={this.showRegisterPage}>Create an account</button></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    updateState = (e, field) => {
        switch (field) {
            case "registerLogin":
                this.setState({
                    registerLogin: e.target.value
                })
                break;
            
            case "registerPassword": {
                this.setState({
                    registerPassword: e.target.value
                })
            }
                break;
            
            case "registerPassword2": {
                this.setState({
                    registerPassword2: e.target.value
                })
            }
                break;

            case "loginName": {
                this.setState({
                    loginName: e.target.value
                })
            }
                break;

            case "loginPassword": {
                this.setState({
                    loginPassword: e.target.value
                })
            }
                break;
        
            default:
                break;
        }
    }

    logIn = () => {
        fetch('http://localhost:3004/users')
        .then(response => response.json())
        .then(data => {
            let user = false;
            

            data.forEach(element => {
                if (element.login == this.state.loginName && element.password == this.state.loginPassword) {
                    this.props.logIn(element);
                    user = true;
                }
            });

            (user) ? null : this.setState({message: "Błędny login / hasło!"})
        })        
    }

    createAccount = () => {
        this.setState({
            message: ""
        });

        fetch("http://localhost:3004/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: this.state.registerLogin, password: this.state.registerPassword })
        })
        .then(
            this.showLoginPage()
        )

    }

    createAccountValidation = (e) => {
        e.preventDefault();

        let user = true;

        fetch('http://localhost:3004/users')
        .then(response => response.json())
        .then(data => {

            data.forEach(element => {
                if ( element.login == this.state.registerLogin ) {
                    this.setState({
                        message: "User with that login already exist!"
                    });
                    user = false;
                } 
            });

            (user) ? true : false;
        })
        .then(sth => {
            console.log(sth);
            
            (user) ? this.createAccount() : null;
        })

        
    }

    showLoginPage = () => {
        let loginForm = document.querySelector('form.login-form');
        loginForm.classList.remove('show');

        let registerForm = document.querySelector('form.register-form');
        registerForm.classList.add('show');
    }

    showRegisterPage = () => {
        let loginForm = document.querySelector('form.login-form');
        loginForm.classList.add('show');

        let registerForm = document.querySelector('form.register-form');
        registerForm.classList.remove('show');
    }
}

export default connect(state => 
    ({
        login: state.auth.login,
        currencies: state.auth.currencies
    }),
    { logIn }
)(BodyLogOut);
