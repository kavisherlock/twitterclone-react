/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TweetBox__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_TweetList__ = __webpack_require__(2);



let mockTweets = [{ id: 1, name: 'Kavish Munjal', body: "I love Claire!" }, { id: 2, name: 'Lizzie Grogan', body: "Only I matter" }, { id: 3, name: 'Claire Grogan', body: "CATS!!" }];

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
    $.post("/tweets", { body: tweetToAdd }).success(savedTweet => {
      let newTweetList = this.state.tweetList;
      newTweetList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetList));
    }).error(error => console.log("ERROR!"));
  }
  //{id:Date.now(), name: "Kavish Munjal", body: tweetToAdd}
  componentDidMount() {
    $.ajax("/tweets").success(data => this.setState(this.formattedTweets(data))).error(error => console.log("ERROR!"));
  }

  render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col s10 offset-s1' },
        React.createElement(
          'h3',
          null,
          'Welcome to TwitterClone!'
        )
      ),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_TweetBox__["a" /* default */], { sendTweet: this.addTweet.bind(this) }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_1__components_TweetList__["a" /* default */], { tweets: this.state.tweetList })
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(React.createElement(Main, null), document.getElementById('react'));
  }
};

$(documentReady);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TweetBox extends React.Component {
  sendTweet() {
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = "";
  }

  render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col s10 offset-s1" },
        React.createElement(
          "form",
          { onSubmit: this.sendTweet.bind(this) },
          React.createElement(
            "div",
            { className: "input-field" },
            React.createElement("textarea", { ref: "tweetTextArea", className: "materialize-textarea" }),
            React.createElement(
              "label",
              null,
              "What's Happening?"
            ),
            React.createElement(
              "button",
              { type: "submit", className: "btn right" },
              "Tweet"
            )
          )
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TweetBox;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tweet__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class TweetList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => React.createElement(__WEBPACK_IMPORTED_MODULE_0__Tweet__["a" /* default */], _extends({ key: tweet.id }, tweet)));
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col s10 offset-s1" },
        React.createElement(
          "ul",
          { className: "collection" },
          tweets
        )
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TweetList;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tweet extends React.Component {
  render() {
    return React.createElement(
      "li",
      { className: "collection-item avatar" },
      React.createElement("img", { className: "circle", src: this.props.gravaltar }),
      React.createElement(
        "i",
        { className: "material-icons circle" },
        this.props.gravaltar
      ),
      React.createElement(
        "span",
        { className: "title" },
        this.props.name
      ),
      React.createElement(
        "time",
        null,
        this.props.formattedDate
      ),
      React.createElement(
        "p",
        null,
        this.props.body
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tweet;


/***/ })
/******/ ]);