import React from "react";
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetStore from '../stores/TweetStore';
import { Link } from 'react-router-dom';

import TweetActions from "../actions/TweetActions";

let getAppState = () => {
  return { tweetList: TweetStore.getAll() };
};

let mockTweets = [
  {id:1, name: 'Kavish Munjal', body: "I love Claire!"},
  {id:2, name: 'Lizzie Grogan', body: "Only I matter"},
  {id:3, name: 'Claire Grogan', body: "CATS!!"}
]

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="row">
        <div className="col s10 offset-s1">
          <h3>Welcome to TwitterClone!</h3>
        </div>
        <Link to="/follow">Who to Follow</Link>
        <TweetBox />
        <TweetList tweets={this.state.tweetList}/>
      </div>
    );
  }
}
