import React from 'react';
import { Button, Label } from 'reactstrap';
import axios from 'axios';
import './ThinkRock.css';

export default class Game extends React.Component {
constructor() {
    super();
    this.state = {
      jokes: ""
    };
  }

  componentDidMount() {
    axios.get("https://geek-jokes.sameerkumar.website/api")
    .then(res => {
        console.log(res.data);
        this.setState({jokes : res.data});
      })
  }
  render() {
    console.log();
    return (
        <header className="App-header">
            Thinking Rock
            <img src="logo.jpg" className="App-logo" alt="logo" />
            <div className="Think-Button">
                <Button color="info" size="lg" href="/game" className="Think-Button" block>Make Rock Think</Button>
            </div>
            <div className="joke">
                <Label>{this.state.jokes}</Label>
            </div>
        </header>
    )
}
}