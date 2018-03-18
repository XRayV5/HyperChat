import { app } from "hyperapp";
import App from "./components/App";

const state = {};
const actions = {};

app(state, actions, App, document.querySelector("#v-dom-entry"));
