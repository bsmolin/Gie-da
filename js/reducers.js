const initialState = {
    login: false,
    name: "Adam",
    users: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "changeLoginStatus":
            return {...state, login: action.login}

        default:
        return state;
    }
}

export default reducer;