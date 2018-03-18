import { h } from "hyperapp";
import { Switch, Link, Route, location } from "@hyperapp/router";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import requireAuth from "./auth/requireAuth";
import MainView from "./main/";

const Router = ({ actions, state }) => {
  return (
    <Switch>
      {/* <Route path="/" render={Home} /> */}
      {/* <Route
        path="/old-match"
        render={() => <Redirect from="/old-match" to="/will-match" />}
      />
      <Route path="/will-match" render={WillMatch} /> */}
      <Route
        exact
        path="/"
        render={({ location, match }) =>
          requireAuth({ location, match, actions, state }, MainView)
        }
      />
      <Route
        path="/login"
        render={({ location, match }) => (
          <Login {...{ location, match, actions, state }} />
        )}
      />
      <Route
        path="/signup"
        render={({ location, match }) => (
          <SignUp {...{ location, match, actions, state }} />
        )}
      />
      <Route
        render={({ location, match }) => (
          <Login {...{ location, match, actions, state }} />
        )}
      />
    </Switch>
  );
};

export default Router;
