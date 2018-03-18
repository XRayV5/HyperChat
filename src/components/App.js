import { h, app } from "hyperapp";
import { Link, Route, location } from "@hyperapp/router";
import Router from "./Router";
import { wrapperStyle } from "./App.style";

const App = (state, actions) => {
  return (
    <div style={wrapperStyle}>
      <Router {...{ actions, state }} />
    </div>
  );
};

export default App;
