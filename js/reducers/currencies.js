const initialState = {
    actualCurrencies: {
    GBP:
        {
            sell: null,
            buy: null
        },
    EUR:
        {
            sell: null,
            buy: null
        },
    USD:
        {
            sell: null,
            buy: null
        },
    CZK:
        {
            sell: null,
            buy: null
        }
    }
}

const updateCurrencies = (state = initialState, action) => {
    switch (action.type) {
        case "updateCurrencies":
            return {...state,
                actualCurrencies: {
                    ...state.actualCurrencies,
                    GBP: {
                        sell: action.data[0].rates[6].ask,
                        buy: action.data[0].rates[6].bid
                    },
                    EUR: {
                        sell: action.data[0].rates[3].ask,
                        buy: action.data[0].rates[3].bid
                    },
                    USD: {
                        sell: action.data[0].rates[0].ask,
                        buy: action.data[0].rates[0].bid
                    },
                    CZK: {
                        sell: action.data[0].rates[8].ask,
                        buy: action.data[0].rates[8].bid
                    }
                }
            }

        default:
        return state;
    }
}

export default updateCurrencies;