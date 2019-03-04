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
                    <p>1</p>
                </div>
                <div className="col-3">
                    {price}
                </div>
                <div className="col-3">
                    <button>Buy</button>
                </div>
            </div>
        )
    }

    buy = () => {

    }
}

export default connect(state => 
    ({
        actualCurrencies: state.updateCurrencies.actualCurrencies
    }),
    {  }
)(BuyCurrency);