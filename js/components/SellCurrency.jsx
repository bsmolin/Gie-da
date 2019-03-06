import React, { Component } from 'react';
import { connect } from 'react-redux';

class SellCurrency extends Component {
    constructor() {
        super();
    }

    passingPrice() {
        let actualPrice;
        switch (this.props.curr) {
            case "GBP":
            actualPrice = this.props.actualCurrencies.GBP.sell;
                break;
            case "EUR":
            actualPrice = this.props.actualCurrencies.EUR.sell;
                break;
            case "USD":
            actualPrice = this.props.actualCurrencies.USD.sell;
                break;
            case "CZK":
            actualPrice = this.props.actualCurrencies.CZK.sell;
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

        return (
            <div className="row box-currencies">
                <div className="col-3">
                    <p>{this.props.curr}</p>
                    
                </div>
                <div className="col-3">
                    {price}
                </div>  
                <div className="col-2">
                    100
                </div>
                <div className="col-2">
                    0
                </div>
                <div>
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
        actualCurrencies: state.updateCurrencies.actualCurrencies
    }),
    {  }
)(SellCurrency);