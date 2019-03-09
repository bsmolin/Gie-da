const initialState = {
    login: false,
    id: null,
    admin: false,
    userLogin: "",
    password: "",
    name: "",
    lname: "",
    money: "",
    currencies: {
        GBP: null,
        EUR: null,
        USD: null,
        CZK: null
    }
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case "logIn":
            return {
                ...state,
                login: true,
                id: action.id,
                admin: action.admin,
                userLogin: action.userLogin,
                password: action.password,
                name: action.name,
                lname: action.lname,
                money: action.money,
                currencies: action.currencies
            }
        
        case "logOut": 
            return {
                ...state, 
                login: false
            }

        case "updateGBP":
            return {
                ...state,
                money: action.money,
                currencies: {
                    ...state.currencies,
                    GBP: action.value
                }
            }

        case "updateEUR":
            return {
                ...state,
                money: action.money,
                currencies: {
                    ...state.currencies,
                    EUR: action.value
                }
            }

        case "updateUSD":
            return {
                ...state,
                money: action.money,
                currencies: {
                    ...state.currencies,
                    USD: action.value
                }
            }

        case "updateCZK":
            return {
                ...state,
                money: action.money,
                currencies: {
                    ...state.currencies,
                    CZK: action.value
                }
            }

        case "updateProfile":
            return {
                ...state,
                password: action.password,
                name: action.name,
                lname: action.lname,
                money: action.money
            }
        
        default:
        return state;
    }
}

export default auth;