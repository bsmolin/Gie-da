import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Header from './Header.jsx';
import { crazyMode } from '../actions';
import '../../sass/AdminPage.scss';

class AdminPage extends Component {
    render() {
        if (this.props.userAccess == false) {
            return (
                <div className="container">
                    <Header />
                    <div>You don't have access to this page. Please log in!</div>
                </div>
            )
        } else {
        return (
            <div className="container">
                <Header />
                <div className="adminPage">
                    <div className="row">
                        <div className="col-lg-9 adminPage-body">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Users</a>
                                </li>

                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <p>Current crazy mode state : <b>{(this.props.crazyModeStatus) ? "true" : "false"}</b></p>
                                    <button className="btn  btn-danger" onClick={this.crazyMode}>Switch mode</button>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">users</div>

                            </div>
                        </div>
                        <div className="col-lg-3 adminPage-sidebar">
                            <h2>Actual currencies</h2>
                            <div>
                                <h3>GBP</h3>
                                <div className="adminPage-curr">
                                    <p>Buy: <span>{(this.props.actualCurrencies.GBP.buy).toFixed(2)}</span></p>
                                    <p>Sell: <span>{(this.props.actualCurrencies.GBP.sell).toFixed(2)}</span></p>
                                </div>
                            </div>
                            <div>
                                <h3>USD</h3>
                                <div className="adminPage-curr">
                                    <p>Buy: <span>{(this.props.actualCurrencies.USD.buy).toFixed(2)}</span></p>
                                    <p>Sell: <span>{(this.props.actualCurrencies.USD.sell).toFixed(2)}</span></p>
                                </div>
                            </div>
                            <div>
                                <h3>EUR</h3>
                                <div className="adminPage-curr">
                                    <p>Buy: <span>{(this.props.actualCurrencies.EUR.buy).toFixed(2)}</span></p>
                                    <p>Sell: <span>{(this.props.actualCurrencies.EUR.sell).toFixed(2)}</span></p>
                                </div>
                            </div>
                            <div>
                                <h3>CZK</h3>
                                <div className="adminPage-curr">
                                    <p>Buy: <span>{(this.props.actualCurrencies.CZK.buy).toFixed(2)}</span></p>
                                    <p>Sell: <span>{(this.props.actualCurrencies.CZK.sell).toFixed(2)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to={`/`} id="backBtn" className="btn btn-secondary btn-lg btn-block">BACK</Link>
                </div>
            </div>
        )
    }

    }

    crazyMode = () => {
        (this.props.crazyModeStatus) ? this.props.crazyMode(false) : this.props.crazyMode(true);
    }

}

export default connect(state =>
    ({
        userAccess: state.auth.admin,
        actualCurrencies: state.updateCurrencies.actualCurrencies,
        crazyModeStatus: state.updateCurrencies.crazyMode
    }),
    {
        crazyMode
    }
)(AdminPage);
