import { app } from "hyperapp";
import App from "./components/App";
import { withRouter } from "./utils/";
import state from "./state";
import actions from "./actions";
const appInstance = withRouter(
  actions,
  state,
  App,
  document.querySelector("#v-dom-entry")
);
appInstance.reAuthUser();
