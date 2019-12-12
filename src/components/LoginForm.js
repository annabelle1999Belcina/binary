import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, Card } from 'semantic-ui-react'
import axios from 'axios';
import UserFeed from './UserFeed';
import SignUp from './SignUp';
// import { BrowserRouter as Redirect,Link } from 'react-router-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// import { Link } from '@material-ui/core';
// import SignUp from './SignUp';
// import axios from 'axios';
// import SearchAppBar from './AppBar';
// const base = 'http://localhost:4000';
const base = 'http://localhost:4000';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      userName: '',
      error: false,
      loginSuccess: false,
      user: [],
      toSignUp: false
    }
  }

  handleOnClick = async e => {
    axios.get(`${base}/getUser/` + this.state.userName)
      .then(res => {
        if (res.data != null) {
          this.setState({ loginSuccess: false, error: true, user: res.data })
          console.log(this.state.user)
        }
        else {
          this.setState({ loginSuccess: true, error: false })
        }
      })
  }
  onSubmit = async e => {
    console.log('sulod')
    e.preventDefault();
    const data = {
      userName: this.state.userName,
      password: this.state.password
    };
    // const data2 = {
    //   userName: this.state.userName,
    // };

    // const user = await GetUser(data2);
    // console.log("handle click test2")
    // this.setState({ user: user.data2 })
    // console.log(this.state.user);

    axios.post(`${base}/login`, data)
      .then(res => {
        if (res.status !== 200) {
          this.setState({
            error: true,
            loginSuccess: false,
          });
        }
        else {
          this.setState({
            loginSuccess: true,
            error: false,
            // user: res
          });
          // console.log(res)
        }
      })
  }

  signUpClick = (e) => {
    e.preventDefault();
    console.log("signUp")
    this.setState({ toSignUp: true }, () => { console.log("signUp33", this.state.toSignUp) });


  }

  login = () => {
    const { loginSuccess } = this.state;
    if (!loginSuccess) {
      console.log('Signup false');
      return (

        <div className="container">
          <BrowserRouter>
            <div>
              <Switch>
                <Redirect from='/userfeed' to='login'></Redirect>
                <Redirect from='/account' to='login'></Redirect>
              </Switch>
            </div>
          </BrowserRouter>
          <div className="box">
            <Card.Group>
              <Grid.Column>
                <Form>
                  <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Username'
                    value={this.state.userName}
                    onChange={e => this.setState({ userName: e.target.value })}
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <Button content='Login' onClick={(e) => { this.onSubmit(e); this.handleOnClick() }} primary />
                  <Button color='blue' onClick={e => { this.signUpClick(e) }}>
                    Sign Up
                  </Button>
                </Form>
              </Grid.Column>
            </Card.Group>
            <div>
            </div>
          </div>

        </div>
      )
    }
    else if (loginSuccess) {
      console.log("login true");
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/userfeed' render={() => <UserFeed user={this.state.user}></UserFeed>}></Route>
              <Redirect from='/login' to='userfeed'></Redirect>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

  render() {
    const { toSignUp } = this.state
    if (toSignUp === false) {
      return (
        <div>
          <this.login />
        </div>
      )

    } else if (toSignUp === true) {
      return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/signup' render={() => <SignUp ></SignUp>}></Route>
              <Redirect from='/login' to='signup'></Redirect>
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }
}
export default LoginForm
