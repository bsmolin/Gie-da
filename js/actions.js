export const changeLoginStatus = value => ({
  type: "changeLoginStatus",
  login: value  
});

export const addUser = value => ({
    type: "addUser",
    login: value,
    password: value
});
