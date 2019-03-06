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

export const buyGBP = (money, value) => ({
  type: "buyGBP",
  money: money,
  value: value
})

export const buyEUR = (money, value) => ({
  type: "buyEUR",
  money: money,
  value: value
})

export const buyUSD = (money, value) => ({
  type: "buyUSD",
  money: money,
  value: value
})

export const buyCZK = (money, value) => ({
  type: "buyCZK",
  money: money,
  value: value
})