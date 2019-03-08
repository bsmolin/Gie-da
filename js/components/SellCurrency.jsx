import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGBP, updateEUR, updateUSD, updateCZK } from '../actions';

class SellCurrency extends Component {
    constructor() {
        super();

        this.state = {
            totalPrice: 0
        }
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

        if (typeof (actualPrice) == "number") {
            actualPrice = actualPrice;
        }

        if (condition == "price") {
            return parseFloat(actualPrice).toFixed(2);
        } else if (condition == "amount") {
            return parseFloat(actualAmount).toFixed(2);
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
                    {(price * amount).toFixed(2)} PLN
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#sellButton" + this.props.curr}>Sell</button>

                    <div className="modal fade" id={"sellButton" + this.props.curr} tabIndex="-1" role="dialog" aria-labelledby="sellButtonTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="sellButtonTitle">Sell: {this.props.curr}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label>How many u want to sell?</label><br />
                                    <input type="number" name="quantity" onChange={() => this.totalPrice(price)} /><br /><br />
                                    <label>Total sum: {this.state.totalPrice}</label>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.checkTrasaction()}>SELL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    totalPrice = (price) => {
        const quan = document.querySelector(`#sellButton${this.props.curr} .modal-body input[name="quantity"]`).value;
        let total = parseFloat(price * quan).toFixed(2);
    
        this.setState({
            totalPrice: total
        })
    }

    checkTrasaction = () => {
        const quan = document.querySelector(`#sellButton${this.props.curr} .modal-body input[name="quantity"]`).value;

        if (quan <= 0) {
            alert("Quantity must be > 0!");
        } else if (quan > this.passingPrice("amount")) {
            alert("You don't have enough amount");
        } else {
            this.sell(quan);
        }
    }

    sell = (quan) => {
        let amount = parseFloat(this.passingPrice("amount"))  - parseFloat(quan);
        let actualMoney = (parseFloat(this.props.userMoney) + parseFloat(this.state.totalPrice)).toFixed(2);
        
        switch (this.props.curr) {
            case "GBP":
                this.props.updateGBP(this.props.userID, actualMoney, amount);
                break;
            case "EUR":
                this.props.updateEUR(this.props.userID, actualMoney, amount);
                break;
            case "USD":
                this.props.updateUSD(this.props.userID, actualMoney, amount);
                break;
            case "CZK":
                this.props.updateCZK(this.props.userID, actualMoney, amount);
                break;
        
            default:
                break;
        }
        
        document.querySelector(`#sellButton${this.props.curr} .modal-content button.close`).click();
    }
}

export default connect(state =>
    ({
        actualCurrencies: state.updateCurrencies.actualCurrencies,
        amount: state.auth.currencies,
        userID: state.auth.id,
        userMoney: state.auth.money,
    }),
    { updateGBP, updateEUR, updateUSD, updateCZK }
)(SellCurrency);