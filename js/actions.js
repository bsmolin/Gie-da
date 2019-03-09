import axios from 'axios';
import md5 from 'md5';

export const logIn = userData => ({
    type: "logIn",
    id: userData.id,
    admin: userData.admin,
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

export const updateProfile = (id, password, name, lname, money) => {
    let md5Password = md5(password);
    
    return dispatch => {
        axios.patch(`http://localhost:3004/users/${id}`, {
            password: md5Password,
            name: name,
            lname: lname,
            money: money
        })
        .then(r => dispatch(saveUpdateProfile(md5Password, name, lname, money))
        );
    }
}

export const saveUpdateProfile = (password, name, lname, money) => ({
    type: "updateProfile",
    password: password,
    name: name,
    lname: lname,
    money: money
})

// crazy mode 

export const crazyMode = value => ({
    type: "crazyMode",
    value: value
})

export const crazyModeUpdateGBP = (sell, buy) => ({
    type: "crazyModeUpdateGBP",
    sell: sell,
    buy: buy
})

export const crazyModeUpdateUSD = (sell, buy) => ({
    type: "crazyModeUpdateUSD",
    sell: sell,
    buy: buy
})

export const crazyModeUpdateEUR = (sell, buy) => ({
    type: "crazyModeUpdateEUR",
    sell: sell,
    buy: buy
})

export const crazyModeUpdateCZK = (sell, buy) => ({
    type: "crazyModeUpdateCZK",
    sell: sell,
    buy: buy
})