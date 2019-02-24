import React, { Component } from 'react';
import '../../sass/BodyLogOut.scss';

export default class BodyLogOut extends Component {
    render() {
        return (
            <div className="container">
                <div className="login-page">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>Create</button>
                            <p className="message">Already registered? <button onClick={this.showLoginPage}>Sign In</button></p>
                        </form>
                        <form className="login-form show">
                            <input type="text" placeholder="username" />
                            <input type="password" placeholder="password" />
                            <button>login</button>
                            <p className="message">Not registered? <button onClick={this.showRegisterPage}>Create an account</button></p>
                        </form>
                    </div>
                </div>
            </div>
        )
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