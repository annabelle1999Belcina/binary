import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, } from 'semantic-ui-react'
import req from "./helper";
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import { UserRegistration, UsernameValidation } from './helper'
import LoginForm from './LoginForm';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      error: false,
      fname: "",
      lname: '',
      gender: '',
      email: '',
      userName: '',
      password: '',
      verifypass: '',
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnBlur = async e => {
    this.setState({
      userName: e.target.value
    });
    const data = {
      userName: this.state.userName
    };
    const isUsernameTaken = await UsernameValidation(data);

    isUsernameTaken === 204
      ? this.setState({ userName_taken: true })
      : this.setState({ userName_taken: false });
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = {
      firstName: this.state.fname,
      lastName: this.state.lname,
      gender: this.state.gender,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    };

    const registerStatus = await UserRegistration(data);
    if (registerStatus === 200) {
      console.log("Successfull")
      this.setState({
        fname: "",
        lname: '',
        gender: '',
        email: '',
        userName: '',
        password: '',
        register: true,
        error: false
      });
    } else {
      alert("Username already exist");
      this.setState({
        error: true,
        register: false
      });
    }
  };
  // SignUpForm = () => (


  // )

  render() {
    const { register, error, user_name_taken } = this.state;
    if (!register) {
      return (
        <div className="container">
          <div className="boxsign">
            <Grid.Column>
              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='First Name'
                  placeholder='First Name'
                  value={this.state.fname}
                  onChange={e => this.setState({ fname: e.target.value })}
                  required
                />
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Last Name'
                  placeholder='Last Name'
                  required
                  value={this.state.lname}
                  onChange={e => this.setState({ lname: e.target.value })}
                />
                <label><b>Gender</b>
                  <select onChange={e => this.setState({ gender: e.target.value })}>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Username'
                  placeholder='Username'
                  value={this.state.userName}
                  onChange={e => this.setState({ userName: e.target.value })}
                  required
                />
                <Form.Input
                  icon='mail'
                  iconPosition='left'
                  label='Email'
                  type='email'
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  required

                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Password'
                  type='password'
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  required
                />
                <Button content='Sign Up' type="submit" onClick={this.onSubmit} primary />
                <div>
                  <div>Already have an account?
                <Button variant="outlined" color="outlined-primary">
                      <Link to="/login" button>Cancel</Link>
                    </Button>
                  </div>

                </div>
              </Form>
            </Grid.Column>
          </div>
        </div>
      )
    } else {
      return (
        <LoginForm />
      );
    }
  }



}
export default SignUp;