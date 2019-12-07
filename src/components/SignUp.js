import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, } from 'semantic-ui-react'
import { UserRegistration, UsernameValidation } from './helper'
import LoginForm from './LoginForm';
import Message from '../elements/Message';
import Error from '../elements/Error';
import { REGISTRATION_MESSAGE, ERROR_IN_REGISTRATION } from '../MessageBundle';
// import { BrowserRouter as Link } from 'react-router-dom';


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
      toLogin: false,
      address: " ",
      workPlace: " ",
      education: " ",
      relationShip: "  ",
      bio: " "
    }
  }

  logInClick = (e) => {
    this.setState({ toLogin: true })
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
      password: this.state.password,
      address: this.state.address,
      workPlace: this.state.workPlace,
      education: this.state.education,
      relationShip: this.state.relationShip,
      bio: this.state.bio
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
        error: false,

      });
    } else {
      alert("Username already exist");
      this.setState({
        error: true,
        register: false
      });
    }
  };

  loginClick = (e) => {
    e.preventDefault();
    console.log("signUp")
    this.setState({ toLogin: true }, () => { console.log("signUp33", this.state.toLogin) });


  }

  login = () => {
    if (this.state.toLogin) {
      console.log('Signup true');
      this.setState({ toLogin: true }, () => { this.props.history.push("/login"); })

    }
  }

  signUp = () => {
    const { register, error, user_name_taken } = this.state;
    if (!register) {
      return (
        <div className="container">
          <div className="boxsign">
            <Grid.Column>
              <Form >
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
                <p>{user_name_taken}</p>
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
                <Button content='Login' onClick={(e) => { this.loginClick(e) }} primary />
              </Form>
              <br></br>
            </Grid.Column>
            {error && <Error message={ERROR_IN_REGISTRATION} />}
            {register && <Message message={REGISTRATION_MESSAGE} />}
          </div>
        </div>
      )
    } else {
      return (
        <LoginForm />
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.toLogin ? this.login() : this.signUp()}
      </div>
    )
  }
}
export default SignUp;