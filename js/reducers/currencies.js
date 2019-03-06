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
                        sell: action.data[0].rates[6].bid,
                        buy: action.data[0].rates[6].ask
                    },
                    EUR: {
                        sell: action.data[0].rates[3].bid,
                        buy: action.data[0].rates[3].ask
                    },
                    USD: {
                        sell: action.data[0].rates[0].bid,
                        buy: action.data[0].rates[0].ask
                    },
                    CZK: {
                        sell: action.data[0].rates[8].bid,
                        buy: action.data[0].rates[8].ask
                    }
                }
            }

        default:
        return state;
    }
}

export default updateCurrencies;