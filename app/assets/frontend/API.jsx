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
  },

  getAllUsers() {
    $.get("/followers/random")
    .success( rawUsers => ServerAction.receivedUsers(rawUsers) )
    .error(error => console.log(error));
  },

  followUser(user_id) {
    $.post("/followers", { user_id })
    .success( rawFollower => ServerAction.receivedOneFollower(rawFollower) )
    .error(error => console.log(error));
  }
}
