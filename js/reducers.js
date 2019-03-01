import { combineReducers } from 'redux'

const initialState = {
    login: false,
    name: "Adam",
    users: {
        login: "",
        password: ""
    }
}

const changeLoginStatus = (state = initialState, action) => {
    switch (action.type) {
        case "changeLoginStatus":
            return {...state, login: action.login}

        default:
        return state;
    }
}

const userActions = (state = initialState, action) => {
    switch (action.type) {
        case "addUser":
            return {...state, users: {login: action.login, password: action.password}}

        default:
        return state;
    }
}


export default combineReducers({
    changeLoginStatus,
    userActions
  })