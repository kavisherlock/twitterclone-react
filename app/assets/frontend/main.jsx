import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from "./components/Index";
import Follow from "./components/Follow";

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode){
    ReactDOM.render(
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/follow" component={Follow} />
        </Switch>
      </Router>,
      reactNode
    );
  }
};

$(documentReady);
