import React, { Component } from 'react';
import { connect } from 'react-redux';

class SellCurrency extends Component {
    constructor() {
        super();
    }

    passingPrice(condition) {
        let actualPrice;
        let actualAmount;

        switch (this.props.curr) {
            case "GBP":
            actualPrice = this.props.actualCurrencies.GBP.sell;
            actualAmount = this.props.amount.GBP;
                break;
            case "EUR":
            actualPrice = this.props.actualCurrencies.EUR.sell;
            actualAmount = this.props.amount.EUR;
                break;
            case "USD":
            actualPrice = this.props.actualCurrencies.USD.sell;
            actualAmount = this.props.amount.USD;
                break;
            case "CZK":
            actualPrice = this.props.actualCurrencies.CZK.sell;
            actualAmount = this.props.amount.CZK;
                break;
                
            default:
                break;
        }

        if (typeof(actualPrice) == "number") {
            actualPrice = actualPrice.toFixed(2);
        }

        if (condition == "price") {
            return actualPrice;
        } else if (condition == "amount") {
            return actualAmount;
        }

    }

    render() {
        let price = this.passingPrice("price");
        let amount = this.passingPrice("amount");

        return (
            <div className="row box-currencies">
                <div className="col-3">
                    <p>{this.props.curr}</p>
                </div>
                <div className="col-2">
                    {price}
                </div>  
                <div className="col-2">
                    {amount}
                </div>
                <div className="col-3">
                    {(price*amount).toFixed(2)} PLN
                </div>
                <div className="col-2">
                    <button>Sell</button>
                </div>
            </div>
        )
    }

    sell = () => {

    }
}

export default connect(state => 
    ({
        actualCurrencies: state.updateCurrencies.actualCurrencies,
        amount: state.auth.currencies
    }),
    {  }
)(SellCurrency);