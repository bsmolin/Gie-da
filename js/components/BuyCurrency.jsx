import React, { Component } from 'react';
import { connect } from 'react-redux';


class BuyCurrency extends Component {
    constructor() {
        super();
    }

    passingPrice() {
        let actualPrice;
        switch (this.props.curr) {
            case "GBP":
            actualPrice = this.props.actualCurrencies.GBP.buy;
                break;
            case "EUR":
            actualPrice = this.props.actualCurrencies.EUR.buy;
                break;
            case "USD":
            actualPrice = this.props.actualCurrencies.USD.buy;
                break;
            case "CZK":
            actualPrice = this.props.actualCurrencies.CZK.buy;
                break;
            default:
                break;
        }
        
        if (typeof(actualPrice) == "number") {
            actualPrice = actualPrice.toFixed(2);
        }
        
        return actualPrice;
    }

    render() {
        let price = this.passingPrice();

        // const btn = document.querySelector('input[toggle]');
        
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
                                <label>How many u want to buy?</label>
                                <input type="number" name="quantity" />
                                {price}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.checkTrasaction(quantity)}>Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    checkTrasaction = (quantity) => {
        
    }

    buy = () => {

    }
}

export default connect(state => 
    ({
        actualCurrencies: state.updateCurrencies.actualCurrencies,
        userMoney: state.auth.money
    }),
    {  }
)(BuyCurrency);