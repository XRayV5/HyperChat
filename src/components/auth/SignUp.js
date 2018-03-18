import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import * as style from "./Login.style";

const SignUp = ({ match, location, actions, state }) => {
  return (
    <div style={style.container}>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={state.signup.email}
          oninput={e => actions.signup.onEnterEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Passoword</label>
        <input
          type="password"
          value={state.signup.password}
          oninput={e => actions.signup.onEnterPassword(e.target.value)}
        />
      </div>
      <div>
        <button onclick={actions.handleSignup}>Sign Up</button>
        <Link to="/login">Back...</Link>
      </div>
    </div>
  );
};

export default SignUp;
