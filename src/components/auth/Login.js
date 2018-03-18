import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import * as style from "./Login.style";

const Login = ({ match, location, actions, state }) => {
  return (
    <div style={style.container}>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={state.login.email}
          oninput={e => actions.login.onEnterEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Passoword</label>
        <input
          type="password"
          value={state.login.password}
          oninput={e => actions.login.onEnterPassword(e.target.value)}
        />
      </div>
      <div>
        <button onclick={actions.handleLogin}>Login</button>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
