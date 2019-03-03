import React, { Component } from 'react';
import '../../sass/BodyLogOut.scss';
import { connect } from 'react-redux';
import { logIn } from '../actions';

class BodyLogOut extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registerName : "",
            registerPassword: "",
            registerMail: "",
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
                            <input type="text" placeholder="name" value={this.state.registerName} onChange={(e) => this.updateState(e,"registerName")}/>
                            <input type="password" placeholder="password" value={this.state.registerPassword} onChange={(e) => this.updateState(e, "registerPassword")} />
                            <input type="text" placeholder="email address" value={this.state.registerMail} onChange={(e) => this.updateState(e, "registerMail")} />
                            <div>{this.state.message}</div>
                            <button>Create</button>
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
            case "registerName":
                this.setState({
                    registerName: e.target.value
                })
                break;
            
            case "registerPassword": {
                this.setState({
                    registerPassword: e.target.value
                })
            }
                break;

            case "registerMail": {
                this.setState({
                    registerMail: e.target.value
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
        login: state.auth.login
    }),
    { logIn }
)(BodyLogOut);
