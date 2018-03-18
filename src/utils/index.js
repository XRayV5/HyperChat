import { app } from "hyperapp";
import { location } from "@hyperapp/router";

export const withRouter = (actions, state, App, container) => {
  const extendedActions = { ...actions, location: location.actions };
  const extendedState = { ...state, location: location.state };
  const AppWithRouter = app(extendedState, extendedActions, App, container);
  location.subscribe(AppWithRouter.location);
  return AppWithRouter;
};
