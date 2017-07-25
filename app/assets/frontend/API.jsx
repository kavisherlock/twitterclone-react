import ServerAction from "./actions/ServerActions.jsx"

export default {
  getAllTweets() {
    $.get("/tweets")
    .success( rawTweets => ServerAction.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },

  createTweet(body) {
    $.post("/tweets", { body })
    .success( rawTweet => ServerAction.receivedOneTweet(rawTweet) )
    .error(error => console.log(error));
  }
}
