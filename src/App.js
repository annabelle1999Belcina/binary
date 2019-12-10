import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserFeed from './components/UserFeed';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route  path="/userfeed" component={UserFeed} ></Route> */}
            <Route path = "/signup" component = {SignUp}></Route>
            <Route  path="/login" component={LoginForm} ></Route>
            <Route  path="/account" component={Profile} ></Route>
            <Redirect from ="/" to ="/login"> </Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;