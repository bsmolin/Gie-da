import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Header from './Header.jsx';
import { updateProfile, updateGBP, updateEUR, updateUSD, updateCZK } from '../actions';
import md5 from 'md5';
import "../../sass/EditProfile.scss";

class EditProfile extends Component {
    constructor() {
        super();

        this.state = {
            password: "",
            name: "",
            lname: "",
            money: "",
            GBP: false,
            EUR: false,
            USD: false,
            CZK: false
        }
    }

    componentDidMount() {
        let gbp = false;
        let usd = false;
        let eur = false;
        let czk = false;
        let curr = this.props.userData.currencies;

        if (curr != null) {
            if (curr.GBP != null ) {
                gbp = true;
                document.querySelector('input#GBP').click();
                document.querySelector('input#GBP').disabled = true;
            }

            if (curr.USD != null ) {
                usd = true;
                document.querySelector('input#USD').click();
                document.querySelector('input#USD').disabled = true;
            }

            if (curr.EUR != null ) {
                eur = true;
                document.querySelector('input#EUR').click();
                document.querySelector('input#EUR').disabled = true;
            }

            if (curr.CZK != null ) {
                czk = true;
                document.querySelector('input#CZK').click();
                document.querySelector('input#CZK').disabled = true;
            }

            this.setState({
                password: this.props.userData.password,
                name: this.props.userData.name,
                lname: this.props.userData.lname,
                money: this.props.userData.money,
                GBP: gbp,
                USD: usd,
                EUR: eur,
                CZK: czk
            });
        } else {
            this.setState({
                password: this.props.userData.password,
                name: this.props.userData.name,
                lname: this.props.userData.lname,
                money: this.props.userData.money
            });
        }

    }

    render() {    
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>Edit profile</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="edit-element">
                                <label>ID</label>
                                <input type="text" className="form-control" value={this.props.userData.id} disabled />
                            </div>
                            <div className="edit-element">
                                <label>login</label>
                                <input type="text" className="form-control" value={this.props.userData.userLogin} disabled />
                            </div>
                            <div className="edit-element">
                                <label>password</label>
                                <input type="password" className="form-control" value={this.state.password} onChange={(e) => this.updateValue(e, "password")} />
                            </div>
                            <div className="edit-element">
                                <label>name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.updateValue(e, "name")} />
                            </div>
                            <div className="edit-element">
                                <label>lastname</label>
                                <input type="text" className="form-control" value={this.state.lname} onChange={(e) => this.updateValue(e, "lname")} />
                            </div>
                            <div className="edit-element">
                                <label>money</label>
                                <input type="text" className="form-control" value={this.state.money} onChange={(e) => this.updateValue(e, "money")} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="edit-currencies">
                                <h3>Check what currencies u want to change</h3>
                                <div>
                                    <input type="checkbox" id="GBP" onChange={(e) => this.updateValue(e, "GBP")} /> <label>GBP</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="EUR" onChange={(e) => this.updateValue(e, "EUR")} /> <label>EUR</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="USD" onChange={(e) => this.updateValue(e, "USD")} /> <label>USD</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="CZK" onChange={(e) => this.updateValue(e, "CZK")} /> <label>CZK</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={ this.saveData}>SAVE</button>
                    <Link to={`/`} id="backBtn" className="btn btn-secondary btn-lg btn-block">BACK WITHOUT SAVING</Link>
                </div>
            </div>
        )
    }

    updateValue = (e, type) => {
        switch (type) {
            case "password":
                this.setState({
                    password: e.target.value
                })
                break;

            case "name":
                this.setState({
                    name: e.target.value
                })
                break;

            case "lname":
                this.setState({
                    lname: e.target.value
                })
                break;

            case "money":
                this.setState({
                    money: e.target.value
                })
                break;

            case "GBP":
                this.setState({
                    GBP: e.target.checked
                })
                break;

            case "USD":
                this.setState({
                    USD: e.target.checked
                })
                break;

            case "EUR":
                this.setState({
                    EUR: e.target.checked
                })
                break;

            case "CZK":
                this.setState({
                    CZK: e.target.checked
                })
                break;

            default:
                break;
        }
    }

    saveData = () => {
        let id = this.props.userData.id;

        if (this.state.password != this.props.userData.password) {
            this.props.updateProfile(id, md5(this.state.password), this.state.name, this.state.lname, this.state.money);

        } else {
            this.props.updateProfile(id, this.state.password, this.state.name, this.state.lname, this.state.money);
        }


        if ( document.querySelector('input#GBP').disabled == false && this.state.GBP != false ) {
            this.props.updateGBP(id, this.state.money, 0);
        }

        if ( document.querySelector('input#USD').disabled == false && this.state.USD != false ) {
            this.props.updateUSD(id, this.state.money, 0);
        }

        if ( document.querySelector('input#EUR').disabled == false && this.state.EUR != false ) {
            this.props.updateEUR(id, this.state.money, 0);
        }

        if ( document.querySelector('input#CZK').disabled == false && this.state.CZK != false ) {
            this.props.updateCZK(id, this.state.money, 0);
        }
        
        document.querySelector('#backBtn').click();
    }
}

export default connect(state =>
    ({
        userData: state.auth,
        currencies: state.auth.currencies
    }),
    {
        updateProfile,
        updateGBP,
        updateEUR,
        updateUSD,
        updateCZK
    }
)(EditProfile);
