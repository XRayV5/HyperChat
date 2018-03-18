const login = {
  email: "",
  password: ""
};

const signup = {
  email: "",
  password: ""
};

const appStatus = {
  authenticated: false,
  loginProfile: {}
};

const chat = {
  socket: null
};

const state = {
  login,
  signup,
  appStatus,
  chat
};

export default state;
