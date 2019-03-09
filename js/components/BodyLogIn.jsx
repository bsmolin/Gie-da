import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyCurrency from './BuyCurrency.jsx';
import SellCurrency from './SellCurrency.jsx';
import { updateCurrencies } from '../actions';
import "../../sass/BodyLogIn.scss";
import axios from 'axios';

class BodyLogIn extends Component {
    componentWillMount() {
        this.updateCurrenciesValues();
    }

    render() {
        let buyButtons;
        let sellButtons;

        if (this.props.currencies != null) {
            buyButtons = (
                Object.keys(this.props.currencies).map(function(curr, index) {
                    return <BuyCurrency key={index} curr={curr} />;
                })
            )

            sellButtons = (
                Object.keys(this.props.currencies).map(function(curr, index) {
                    return <SellCurrency key={index} curr={curr} />;
                })
            )
        } else {
            buyButtons = (
                <div>
                    You need to check any currency in edit profile to start
                </div>
            )

            sellButtons = (
                <div>
                    You need to check any currency in edit profile to start
                </div>
            )
        }

        return ( 
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-6">
                        <div className="box-title">
                            <h2>Currencies</h2>
                        </div>
                        <div className="row box-undertitle">
                            <div className="col-3">
                                <h3>Currency</h3>
                            </div>
                            <div className="col-3">
                                <h3>Unit</h3>
                            </div>
                            <div className="col-3">
                                <h3>Price</h3>
                            </div>
                            <div className="col-3">
                                <h3>Actions</h3>
                            </div>
                        </div>

                       {buyButtons}
                    
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="box-title">
                            <h2>My wallet</h2>
                        </div>
                        <div className="row box-undertitle">
                            <div className="col-3">
                                <h3>Currency</h3>
                            </div>
                            <div className="col-2">
                                <h3>Price</h3>
                            </div>
                            <div className="col-2">
                                <h3>Amount</h3>
                            </div>
                            <div className="col-3">
                                <h3>Value</h3>
                            </div>
                            <div className="col-2">
                                <h3>Actions</h3>
                            </div>
                        </div>
               
                        {sellButtons}

                        <div>
                            <p><b>Available PLN: {this.props.money}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateCurrenciesValues = () => {
        axios.get("http://api.nbp.pl/api/exchangerates/tables/C/")
        .then(response => {
           this.props.updateCurrencies(response.data);
        })
    }
}

export default connect(state => 
    ({
        currencies: state.auth.currencies,
        money: state.auth.money
    }),
    { 
        updateCurrencies
    }
)(BodyLogIn);
