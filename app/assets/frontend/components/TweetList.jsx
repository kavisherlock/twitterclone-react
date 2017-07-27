import React from "react";
import Tweet from './Tweet';

export default class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    return (
      <div className="row">
        <div className="col s10 offset-s1">
          <ul className="collection">
            {tweets}
          </ul>
        </div>
      </div>
    );
  }
}
