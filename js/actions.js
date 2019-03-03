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
