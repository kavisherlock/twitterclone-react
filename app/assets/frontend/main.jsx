import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id:1, name: 'Kavish Munjal', body: "I love Claire!"},
  {id:2, name: 'Lizzie Grogan', body: "Only I matter"},
  {id:3, name: 'Claire Grogan', body: "CATS!!"}
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetList: mockTweets };
  }

  formattedTweets(tweetList) {
    let formatedList = tweetList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return {
      tweetList: tweetList
    };
  }

  addTweet(tweetToAdd) {
    $.post("/tweets", { body: tweetToAdd})
    .success( savedTweet => {
      let newTweetList = this.state.tweetList;
      newTweetList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetList))
    })
    .error(error => console.log("ERROR!"));
  }
//{id:Date.now(), name: "Kavish Munjal", body: tweetToAdd}
  componentDidMount() {
    $.ajax("/tweets")
    .success(data => this.setState(this.formattedTweets(data)))
    .error(error => console.log("ERROR!"));
  }

  render() {
    return (
      <div className="row">
        <div className="col s10 offset-s1">
          <h3>Welcome to TwitterClone!</h3>
        </div>
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode){
    ReactDOM.render(
      <Main />,
      document.getElementById('react')
    );
  }
};

$(documentReady);
