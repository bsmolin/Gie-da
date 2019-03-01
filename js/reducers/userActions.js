const userActions = (state = {}, action) => {
    switch (action.type) {
        case "addUser":
            return {...state, users: {login: action.login, password: action.password}}

        default:
        return state;
    }
}

export default userActions;