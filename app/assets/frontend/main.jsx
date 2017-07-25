import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';
import TweetStore from './stores/TweetStore';

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetList: TweetStore.getAll() };
}

let mockTweets = [
  {id:1, name: 'Kavish Munjal', body: "I love Claire!"},
  {id:2, name: 'Lizzie Grogan', body: "Only I matter"},
  {id:3, name: 'Claire Grogan', body: "CATS!!"}
]

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
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
        <TweetBox />
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
