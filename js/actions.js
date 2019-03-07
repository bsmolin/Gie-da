import axios from 'axios';

export const logIn = userData => ({
    type: "logIn",
    id: userData.id,
    userLogin: userData.login,
    password: userData.password,
    name: userData.name,
    lname: userData.lname,
    money: userData.money,
    currencies: userData.currencies
});

export const logOut = () => ({
    type: "logOut"
})

export const userActions = value => ({
    type: "addUser",
    login: value,
    password: value
});

export const updateCurrencies = data => ({
    type: "updateCurrencies",
    data: data
})

export const buyGBP = (id, money, value) => {
    return dispatch => {
        let finalDataToUpdate;

        axios.get(`http://localhost:3004/users/${id}`)
        .then(response => {
            response.data.currencies = {
                ...response.data.currencies,
                GBP: value
            }

            return finalDataToUpdate = response.data.currencies;
        })
        .then(data => {
            axios.patch(`http://localhost:3004/users/${id}`, {
                money: money,
                currencies: finalDataToUpdate
            })  
            .then(r => dispatch(saveBuyGBP(money, value))
            )
        });
    }
}

export const saveBuyGBP = (money, value) => {
    return {
        type: "buyGBP",
        money: money,
        value: value
    }
}

export const buyEUR = (id, money, value) => {
    return dispatch => {
        let finalDataToUpdate;

        axios.get(`http://localhost:3004/users/${id}`)
        .then(response => {
            response.data.currencies = {
                ...response.data.currencies,
                EUR: value
            }

            return finalDataToUpdate = response.data.currencies;
        })
        .then(data => {
            axios.patch(`http://localhost:3004/users/${id}`, {
                money: money,
                currencies: finalDataToUpdate
            })  
            .then(r => dispatch(saveBuyEUR(money, value))
            )
        });
    }
}

export const saveBuyEUR = (money, value) => ({
    type: "buyEUR",
    money: money,
    value: value
})

export const buyUSD = (id, money, value) => {
    return dispatch => {
        let finalDataToUpdate;

        axios.get(`http://localhost:3004/users/${id}`)
        .then(response => {
            response.data.currencies = {
                ...response.data.currencies,
                USD: value
            }

            return finalDataToUpdate = response.data.currencies;
        })
        .then(data => {
            axios.patch(`http://localhost:3004/users/${id}`, {
                money: money,
                currencies: finalDataToUpdate
            })  
            .then(r => dispatch(saveBuyUSD(money, value))
            )
        });
    }
}

export const saveBuyUSD = (money, value) => ({
    type: "buyUSD",
    money: money,
    value: value
})

export const buyCZK = (id, money, value) => {
    return dispatch => {
        let finalDataToUpdate;

        axios.get(`http://localhost:3004/users/${id}`)
        .then(response => {
            response.data.currencies = {
                ...response.data.currencies,
                CZK: value
            }

            return finalDataToUpdate = response.data.currencies;
        })
        .then(data => {
            axios.patch(`http://localhost:3004/users/${id}`, {
                money: money,
                currencies: finalDataToUpdate
            })  
            .then(r => dispatch(saveBuyCZK(money, value))
            )
        });
    }
}

export const saveBuyCZK = (money, value) => ({
    type: "buyCZK",
    money: money,
    value: value
})