import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyGBP, buyEUR, buyUSD, buyCZK } from '../actions';

class BuyCurrency extends Component {
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
        
        return (
            <div className="row box-currencies">
                <div className="col-3">
                    <p>{this.props.curr}</p>
                    
                </div>
                <div className="col-3">
                    <p>1</p>
                </div>
                <div className="col-3">
                    {price}
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#buyButton"+this.props.curr}>Buy</button>

                    <div className="modal fade" id={"buyButton"+this.props.curr} tabIndex="-1" role="dialog" aria-labelledby="buyButtonTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="buyButtonTitle">Buy: {this.props.curr}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label>How many u want to buy?</label><br />
                                <input type="number" name="quantity" onChange={() => this.totalPrice(price)}/><br /><br />
                                <label>Total sum: {this.state.totalPrice}</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.checkTrasaction()}>Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    totalPrice = (price) => {
        const quan = document.querySelector(`#buyButton${this.props.curr} .modal-body input[name="quantity"]`).value;
        let total = (price * quan).toFixed(2);
    
        this.setState({
            totalPrice: total
        })
    }

    checkTrasaction = () => {
        const quan = document.querySelector(`#buyButton${this.props.curr} .modal-body input[name="quantity"]`).value;

        if (quan <= 0) {
            alert("Quantity must be > 0!");
        } else if (this.props.userMoney >= this.state.totalPrice) {
            this.buy();
        } else {
            alert("You don't have enough money");
        }
    }

    buy = () => {
        const quan = document.querySelector(`#buyButton${this.props.curr} .modal-body input[name="quantity"]`).value;

        let amount = parseFloat(this.passingPrice("amount"))  + parseFloat(quan);
        let actualMoney = this.props.userMoney - this.state.totalPrice 
        
        switch (this.props.curr) {
            case "GBP":
                this.props.buyGBP(actualMoney, amount);
                break;
            case "EUR":
                this.props.buyEUR(actualMoney, amount);
                break;
            case "USD":
                this.props.buyUSD(actualMoney, amount);
                break;
            case "CZK":
                this.props.buyCZK(actualMoney, amount);
                break;
        
            default:
                break;
        }
        
    }
}

export default connect(state => 
    ({
        actualCurrencies: state.updateCurrencies.actualCurrencies,
        userMoney: state.auth.money,
        amount: state.auth.currencies
    }),
    { buyGBP, buyEUR, buyUSD, buyCZK }
)(BuyCurrency);