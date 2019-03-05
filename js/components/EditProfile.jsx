import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditProfile extends Component {
    render() {
        
        
        return ( 
          <div></div>
        )
    }

    updateCurrenciesValues = () => {
        fetch(`http://api.nbp.pl/api/exchangerates/tables/C/`)
        .then(response => response.json())
        .then(data => {
            this.props.updateCurrencies(data);
        })
    }
}

export default connect(state => 
    ({
        currencies: state.auth.currencies
    }),
    { 
        
    }
)(EditProfile);
