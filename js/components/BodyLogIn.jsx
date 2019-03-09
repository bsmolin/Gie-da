import React, { Component } from 'react';
import { connect } from 'react-redux';
import BuyCurrency from './BuyCurrency.jsx';
import SellCurrency from './SellCurrency.jsx';
import { updateCurrencies, crazyModeUpdateGBP, crazyModeUpdateUSD, crazyModeUpdateEUR, crazyModeUpdateCZK } from '../actions';
import "../../sass/BodyLogIn.scss";
import axios from 'axios';

class BodyLogIn extends Component {
    constructor() {
        super();

        let interval;
    }

    componentDidMount() {
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
        if (this.props.crazyModeStatus) {
            const randValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            
            this.interval = setInterval(() => {
                const currTab = ["GBP", "USD", "EUR", "CZK"];
                let randNum = Math.floor((Math.random() * 4) + 0);
                let numCurr = currTab[randNum];
                let randType = Math.floor((Math.random() * 2) - 0);
                

                switch (numCurr) {
                    case "GBP":
                        let diffrenceGBP = this.props.actualCurrencies.GBP.sell - (randValue(-5, 5) / 100);

                        if (randType == 0) {
                            this.props.crazyModeUpdateGBP(diffrenceGBP, this.props.actualCurrencies.GBP.buy);
                        } else {
                            this.props.crazyModeUpdateGBP(this.props.actualCurrencies.GBP.sell, diffrenceGBP);
                        }
                        break;

                    case "USD": 
                        let diffrenceUSD = this.props.actualCurrencies.USD.sell - (randValue(-5, 5) / 100);

                        if (randType == 0) {
                            this.props.crazyModeUpdateUSD(diffrenceUSD, this.props.actualCurrencies.USD.buy);
                        } else {
                            this.props.crazyModeUpdateUSD(this.props.actualCurrencies.USD.sell, diffrenceUSD);
                        }
                    break;
                    
                    case "EUR":
                        let diffrenceEUR = this.props.actualCurrencies.EUR.sell - (randValue(-5, 5) / 100);

                        if (randType == 0) {
                            this.props.crazyModeUpdateEUR(diffrenceEUR, this.props.actualCurrencies.EUR.buy);
                        } else {
                            this.props.crazyModeUpdateEUR(this.props.actualCurrencies.EUR.sell, diffrenceEUR);
                        }
                    break;

                    case "CZK":
                        let diffrenceCZK = this.props.actualCurrencies.CZK.sell - (randValue(-5, 5) / 100);

                        if (randType == 0) {
                            this.props.crazyModeUpdateCZK(diffrenceCZK, this.props.actualCurrencies.CZK.buy);
                        } else {
                            this.props.crazyModeUpdateCZK(this.props.actualCurrencies.CZK.sell, diffrenceCZK);
                        }
                    break;
                
                    default:
                        break;
                }
                                
            }, 2000);
        } else {
            axios.get("http://api.nbp.pl/api/exchangerates/tables/C/")
            .then(response => {
               this.props.updateCurrencies(response.data);
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    };
}

export default connect(state => 
    ({
        currencies: state.auth.currencies,
        money: state.auth.money,
        crazyModeStatus: state.updateCurrencies.crazyMode,
        actualCurrencies: state.updateCurrencies.actualCurrencies
    }),
    { 
        updateCurrencies,
        crazyModeUpdateGBP,
        crazyModeUpdateUSD,
        crazyModeUpdateEUR,
        crazyModeUpdateCZK
    }
)(BodyLogIn);
