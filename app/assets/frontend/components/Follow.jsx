import React from "react";
import UserStore from "../stores/UserStore"
import UserActions from "../actions/UserActions"

let getAppState = () => {
  return { users: UserStore.getAll() };
}

export default class Follow extends React.Component{
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  followUser(user_id) {
    UserActions.followUser(user_id);
  }

  followIcon(following) {
    return following ? <i className="material-icons">person</i> : <i className="material-icons grey">person</i>;
  }

  render() {
    let users = this.state.users.map( user => {
      return (
        <li className="collection-item avatar" key={user.id.toString()}>
          <img src={user.gravatar} className="circle" />
          <span className="title">{user.display_name}</span>
          <a className="secondary-content btn-floating" onClick={this.followUser.bind(this, user.id)}>
            {this.followIcon(user.following)}
          </a>
        </li>
      )
    });

    return (
      <div>
        <h4>Who to follow</h4>
        <ul className="collection">
          {users}
        </ul>
      </div>
    );
  }
}
