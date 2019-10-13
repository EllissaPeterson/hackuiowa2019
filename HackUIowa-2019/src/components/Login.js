import React from 'react';
import {Button, Form, Label, FormGroup, Input} from 'reactstrap';
import firebase from 'firebase';
  
export default class Login extends React.Component {
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

    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
      alert('User and/or password incorrect');
    });
    //go to main screen
    this.props.history.push('/mainScreen');
  }

  render() {
    const {
      email,
      password
    } = this.state;
    return (
      <header className="App-header">
        <img src="logo.jpg" className="App-logo" alt="logo" />
        <div className="Login-buttons">
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="email" name="username" id="username" placeholder="Username" value={email}
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="Password" value={password}
                onChange={this.handleChange}/>
            </FormGroup>
            <Button type="submit" color="info" size="lg" href="/mainScreen" onClick={this.handleSubmit} block>Login</Button> 
          </Form>
        </div>
      </header>
    )
  }
}