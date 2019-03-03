import React, { Component } from 'react';
import { connect } from 'react-redux';

class BuyCurrency extends Component {
    constructor() {
        super();

        this.state = {
            buyPrice: null
        }
    }

    componentDidMount() {
        // setTimeout(() => {
            // for (let i = 0; i < this.props.actualCurrencies.length; i++) {
            
            //     if (this.props.actualCurrencies[i].id == this.props.curr) {
                    
            //         this.setState({
            //             buyPrice: this.props.actualCurrencies[i].buy
            //         })
            //     }
            // } 
        // }, 1000);

        
    }

    render() {
        return (
            <div className="row box-currencies">
                <div className="col-3">
                    <p>{this.props.curr}</p>
                    
                </div>
                <div className="col-3">
                    <p>1</p>
                </div>
                <div className="col-3">
                    {this.state.buyPrice}
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