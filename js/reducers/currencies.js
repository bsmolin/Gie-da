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
        },
    PLN:
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
                        sell: action.data[0].sell,
                        buy: action.data[0].buy
                    },
                    EUR: {
                        sell: action.data[1].sell,
                        buy: action.data[1].buy
                    },
                    USD: {
                        sell: action.data[2].sell,
                        buy: action.data[2].buy
                    },
                    CZK: {
                        sell: action.data[3].sell,
                        buy: action.data[3].buy
                    },
                    PLN: {
                        sell: action.data[4].sell,
                        buy: action.data[4].buy
                    }
                }
            }

        default:
        return state;
    }
}

export default updateCurrencies;