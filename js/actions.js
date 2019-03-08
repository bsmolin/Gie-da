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

export const updateCurrencies = data => ({
    type: "updateCurrencies",
    data: data
})

// update currencies

export const updateGBP = (id, money, value) => {
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
            .then(r => dispatch(saveUpdateGBP(money, value))
            )
        });
    }
}

export const saveUpdateGBP = (money, value) => {
    return {
        type: "updateGBP",
        money: money,
        value: value
    }
}

export const updateEUR = (id, money, value) => {
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
            .then(r => dispatch(saveUpdateEUR(money, value))
            )
        });
    }
}

export const saveUpdateEUR = (money, value) => ({
    type: "updateEUR",
    money: money,
    value: value
})

export const updateUSD = (id, money, value) => {
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
            .then(r => dispatch(saveUpdateUSD(money, value))
            )
        });
    }
}

export const saveUpdateUSD = (money, value) => ({
    type: "updateUSD",
    money: money,
    value: value
})

export const updateCZK = (id, money, value) => {
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
            .then(r => dispatch(saveUpdateCZK(money, value))
            )
        });
    }
}

export const saveUpdateCZK = (money, value) => ({
    type: "updateCZK",
    money: money,
    value: value
})

