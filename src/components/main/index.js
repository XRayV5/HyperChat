import { h } from "hyperapp";

const MainView = props => (
  <div>
    <div>Main Window</div>
    <div>
      <button onclick={props.handleLogout}>logout</button>
    </div>
  </div>
);

export default MainView;
