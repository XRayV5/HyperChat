import { h } from "hyperapp";
import "./style.css";

const MainView = props => {
  console.log(props);
  return (
    <div className="container">
      <header>
        <div>ChatIO</div>
        <div className="user-box">
          <div className="user">{props.state.appStatus.username}</div>
          <button className="logout-btn" onclick={props.actions.handleLogout}>
            logout
          </button>
        </div>
      </header>
      <div id="main">
        <article>article</article>
        <nav>{props.state.chat.userList.map(user => <div>{user}</div>)}</nav>
      </div>
      <footer>
        <textarea
          className="input-area"
          rows={5}
          value={props.state.chat.draft}
          oninput={e => props.actions.chat.handleEnter(e.target.value)}
        />
        <button className="send-btn" onclick={props.actions.chat.sendMessage}>
          Send
        </button>
      </footer>
    </div>
  );
};

export default MainView;
