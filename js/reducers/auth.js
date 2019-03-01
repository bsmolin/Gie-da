const initialState = {
    login: true,
    test: "aaa"
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case "changeLoginStatus":
            return {...state, login: action.login}

        default:
        return state;
    }
}

export default auth;