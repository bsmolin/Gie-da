const initialState = {
    login: false,
    id: null,
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
                userLogin: action.login,
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
        
        default:
        return state;
    }
}

export default auth;