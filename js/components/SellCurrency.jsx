import React, { Component } from 'react';
import { connect } from 'react-redux';

class SellCurrency extends Component {
    constructor() {
        super();

        this.state = {
            sellPrice: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            for (let i = 0; i < this.props.actualCurrencies.length; i++) {
            
                if (this.props.actualCurrencies[i].id == this.props.curr) {
                    
                    this.setState({
                        sellPrice: this.props.actualCurrencies[i].sell
                    })
                }
            } 
        }, 2000);
    }

    render() {
        return (
            <div className="row box-currencies">
                <div className="col-3">
                    <p>{this.props.curr}</p>
                    
                </div>
                <div className="col-3">
                    {this.state.sellPrice}
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