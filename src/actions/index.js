import { requestLogin, requestSignup } from "../api";
import chat from "./socket";
const handleAuth = api => (state, actions) => {
  console.log("state ", state, "actions ", actions);
  return api(actions.login.getCredentials())
    .then(data => {
      console.log("token", data.token);
      sessionStorage.setItem("token", data.token);
      actions.flagAuth(true);
      actions.chat.connect();
      actions.location.go("/");
    })
    .catch(console.error);
};

const flagAuth = authenticated => ({ appStatus: { authenticated } });

const handleLogout = () => (state, actions) => {
  sessionStorage.removeItem("token");
  console.log("dis ", state.chat.socket);
  state.chat.socket.disconnect();
  actions.flagAuth(false);
};

const reAuthUser = () => (state, actions) => {
  const token = sessionStorage.getItem("token");
  if (token) actions.flagAuth(true);
};

const commons = {
  onEnterEmail: entry => ({ email: entry }),
  onEnterPassword: entry => ({
    password: entry
  }),
  getCredentials: () => ({ email, password }) => ({ email, password })
};

const login = {
  ...commons
};

const signup = {
  ...commons
};

export default {
  login,
  signup,
  handleLogin: handleAuth.bind(null, requestLogin),
  handleSignup: handleAuth.bind(null, requestSignup),
  handleLogout,
  flagAuth,
  reAuthUser,
  chat
};
