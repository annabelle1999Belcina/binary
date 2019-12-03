import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, Card } from 'semantic-ui-react'

import { LoginService, GetUser } from './helper'
// import { BrowserRouter as Redirect } from 'react-router-dom';
import UserFeed from './UserFeed';
import Message from '../elements/Message'
import Error from '../elements/Error'
import { LOGIN_MESSAGE, ERROR_IN_LOGIN } from '../MessageBundle';
// import { Link } from '@material-ui/core';
// import SignUp from './SignUp';
// import axios from 'axios';
// import SearchAppBar from './AppBar';
// const base = 'http://localhost:4000';



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
    console.log("handle click test")
    const data = {
      userName: this.state.userName
    };

    const user = await GetUser(data);
    console.log("handle click test2")
    this.setState({ user: user.data })
    console.log(this.state.user);
  }
  onSubmit = async e => {
    console.log('sulod')
    e.preventDefault();
    const data = {
      userName: this.state.userName,
      password: this.state.password
    };

    const loginResult = await LoginService(data);
    const user = await GetUser(data);
    console.log("handle click test2")
    this.setState({ user: user.data })
    console.log(this.state.user);

    if (loginResult !== 200) {
      this.setState({
        error: true,
        loginSuccess: false,
      });
    }
    else {
      this.setState({
        loginSuccess: true,
        error: false

      });
    }
  }

  signUpClick = (e) => {
    e.preventDefault();
    console.log("signUp")
    this.setState({ toSignUp: true }, () => { console.log("signUp33", this.state.toSignUp) });


  }
  signUp = () => {
    if (this.state.toSignUp) {
      console.log('Signup true');
      this.setState({toSignUp:true}, ()=>{this.props.history.push("/signup");})
      
    }
  }

  login = () => {
    const { loginSuccess, error } = this.state;
    if (!loginSuccess) {
      console.log('Signup false');
      return (
        <div className="container">
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
                  <Button content='Login' onClick={(e) => { this.onSubmit(e) }} primary />
                  <Button color='blue' onClick={e => { this.signUpClick(e) }}>
                    Sign Up
                  </Button>
                </Form>
              </Grid.Column>
            </Card.Group>
            <div>
              {loginSuccess && <Message message={LOGIN_MESSAGE} />}
              {error && <Error message={ERROR_IN_LOGIN} />}
            </div>
          </div>
        </div>
      )
    }
    else if (loginSuccess) {
      return (
        <UserFeed user={this.state.user}></UserFeed>
      )
    }
  }

  render() {
    // { ghfgh ? ygiyg : jgtytiy }
    return (
      <div>
        {this.state.toSignUp ? this.signUp() : this.login()}
      </div>
    )
  }
}
export default LoginForm
