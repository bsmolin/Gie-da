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
    },
    crazyMode: false
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

        case "crazyMode":
            return {
                ...state,
                crazyMode: action.value
            }

        case "crazyModeUpdateGBP":
            return {
                ...state,
                actualCurrencies: {
                    ...state.actualCurrencies,
                    GBP: {
                        sell: action.sell,
                        buy: action.buy
                    }
                }
            }

        case "crazyModeUpdateUSD":
            return {
                ...state,
                actualCurrencies: {
                    ...state.actualCurrencies,
                    USD: {
                        sell: action.sell,
                        buy: action.buy
                    }
                }
            }

        case "crazyModeUpdateEUR":
            return {
                ...state,
                actualCurrencies: {
                    ...state.actualCurrencies,
                    EUR: {
                        sell: action.sell,
                        buy: action.buy
                    }
                }
            }

        case "crazyModeUpdateCZK":
            return {
                ...state,
                actualCurrencies: {
                    ...state.actualCurrencies,
                    CZK: {
                        sell: action.sell,
                        buy: action.buy
                    }
                }
            }

        default:
        return state;
    }
}

export default updateCurrencies;