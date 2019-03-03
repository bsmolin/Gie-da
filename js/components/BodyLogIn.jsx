import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyCurrency from './BuyCurrency.jsx';
import SellCurrency from './SellCurrency.jsx';
import "../../sass/BodyLogIn.scss";
import { updateCurrencies } from '../actions';

class BodyLogIn extends Component {
    componentWillMount() {
        this.updateCurrenciesValues();
    }

    render() {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
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
                                <h3>Value</h3>
                            </div>
                            <div className="col-3">
                                <h3>Actions</h3>
                            </div>
                        </div>
               
                        {Object.keys(this.props.currencies).map(function(curr, index) {
                            return <BuyCurrency key={index} curr={curr} />;
                        })}
                    
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="box-title">
                            <h2>My wallet</h2>
                        </div>
                        <div className="row box-undertitle">
                            <div className="col-3">
                                <h3>Currency</h3>
                            </div>
                            <div className="col-3">
                                <h3>Price</h3>
                            </div>
                            <div className="col-2">
                                <h3>Amount</h3>
                            </div>
                            <div className="col-2">
                                <h3>Value</h3>
                            </div>
                            <div className="col-2">
                                <h3>Actions</h3>
                            </div>
                        </div>
               
                        {Object.keys(this.props.currencies).map(function(curr, index) {
                            return <SellCurrency key={index} curr={curr} />;
                        })}

                        <div>
                            <p>Available PLN: {this.props.money}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateCurrenciesValues = () => {
        fetch(`http://localhost:3004/actualCurrencies`)
        .then(response => response.json())
        .then(data => {
            this.props.updateCurrencies(data);
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
