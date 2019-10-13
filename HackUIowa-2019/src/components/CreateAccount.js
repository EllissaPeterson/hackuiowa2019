import React from 'react';
import { Button, Form, Label, FormGroup, Input, Redirect } from 'reactstrap';
import firebase from 'firebase';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainScreen from './MainScreen';

var config = {
  apiKey: "AIzaSyCeIMgoKQyic6rrac9Q0RcWwc6uBq_y7vg",
  authDomain: "thinking-rock-2019.firebaseapp.com",
  databaseURL: "https://thinking-rock-2019.firebaseio.com",
  storageBucket: "thinking-rock-2019.appspot.com",
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();
var provider = new firebase.auth.GoogleAuthProvider();

export default class CreateAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit(event) {
    event.preventDefault();

    if(this.state.newPassword == this.state.confirmNewPassword) {
      firebase.auth().createUserWithEmailAndPassword(this.state.newUsername, this.state.newPassword).catch(function (error) {
        console.log(error.code);
        console.log(error.message);
        alert('Incorrect format');
      });
      this.props.history.push('/login');
    }
    else {
      alert('Passwords do not match');
    }
  }

  render() {
    const {
      email,
      password,
      confirmPassword
    } = this.state;
    return (
      <header className="App-header">
        <img src="logo.jpg" className="App-logo" alt="logo" />
        <div className="Login-buttons">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="newUsername">Enter Username</Label>
              <Input type="email" name="newUsername" id="newUsername"
                placeholder="Username" value={email}
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="newPassword">Password</Label>
              <Input type="password" name="newPassword" id="newPassword"
                placeholder="Password" value={password}
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="confirmNewPassword">Confirm Password</Label>
              <Input type="password" name="confirmNewPassword" id="confirmNewPassword" 
              placeholder="Confirm Password" value={confirmPassword}
              onChange={this.handleChange} />
            </FormGroup>
            <Button color="info" size="lg" type="submit" onClick={this.handleSubmit} block>Create Account</Button>
          </Form>
        </div>
      </header>
    )
  }
}