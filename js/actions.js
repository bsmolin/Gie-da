export const changeLoginStatus = value => ({
  type: "changeLoginStatus",
  login: value  
});

export const userActions = value => ({
  type: "addUser",
  login: value,
  password: value
});
