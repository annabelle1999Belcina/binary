import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route  path="/userfeed" component={UserFeed} ></Route> */}
            <Route  path="/login" component={LoginForm} ></Route>
            <Redirect from ="/" to ="/login"> </Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;