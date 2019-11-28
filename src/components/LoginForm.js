import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, Card } from 'semantic-ui-react'
import req from "./helper";
import{LoginService,GetUser} from './helper'
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import UserFeed from './UserFeed';
import Message from '../elements/Message'
import Error from '../elements/Error'
import { LOGIN_MESSAGE, ERROR_IN_LOGIN } from '../MessageBundle';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
      error: false,
      loginSuccess: false,
      user: []
    }
  }

  handleOnClick = async e => {
    console.log("handle click test")
    const data = {
      userName: this.state.username
    };
    
    const user = await GetUser(data);
    console.log("handle click test2")
    this.setState({user: user.data })
    console.log(this.state.user);
  }
  onSubmit = async e => {
    e.preventDefault();
    const data = {
      userName: this.state.username,
      password: this.state.password
    };

    const loginResult = await LoginService(data);

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

  render() {
    const { loginSuccess, error } = this.state;
    if (!loginSuccess) {
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
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    label='Password'
                    type='password'
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <Button content='Login' onClick={(this.onSubmit, this.handleOnClick)} primary />
                  <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
                </Form>
              </Grid.Column>
            </Card.Group>
            
          </div>
          
        </div>
      )
    }
    else if (loginSuccess){
      return (
        <UserFeed user={this.state.user}></UserFeed>   
      )
      
    }
  }
}
export default LoginForm