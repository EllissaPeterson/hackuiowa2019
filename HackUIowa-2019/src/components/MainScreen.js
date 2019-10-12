import React from 'react';
import axios from 'axios';
import {Button, Form, Label, FormGroup, Input} from 'reactstrap';
import './ThinkRock.css';

export default class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          font_size: "22",
          topText: "",
          bottomText: "",
          randomImg: "http://i.imgflip.com/1bij.jpg",
          allMemeImgs: []
        };
      }
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
      handleClick = () => {
        let randomNumber = Math.floor(
          Math.random() * this.state.allMemeImgs.length
        );
        this.setState({ randomImg: this.state.allMemeImgs[randomNumber].url });
      };
      increaseFont = () => {};

      componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
          .then(data => data.json())
          .then(response => {
            const { memes } = response.data;
            this.setState({ allMemeImgs: memes });
          });
      }
      render() {
        console.log(this.state.font_size);
        return (
            <header className="App-header">
                Thinking Rock
                <img src="logo.jpg" className="App-logo" alt="logo" />
                <input
                type="text"
                name="topText"
                placeholder="top text"
                onChange={this.handleChange}
                value={this.state.topText}
            />
            <br />
            <input
                type="text"
                name="bottomText"
                placeholder="bottom text"
                onChange={this.handleChange}
                value={this.state.bottomText}
            />
            <br />
            <input
                type="number"
                name="font_size"
                placeholder="font size"
                onChange={this.handleChange}
                value={this.state.font_size}
            />
                <div className="Think-Button">
                    <Button color="info" size="lg" onClick={this.handleClick} className="Think-Button" block>Make Rock Think</Button>
                </div>
                <div className="meme">
                    <h2 style={{ fontSize: Number(this.state.font_size) }} className="top">
                        {this.state.topText}
                    </h2>
                    <img src={this.state.randomImg} alt="" />
                    <h2 style={{ fontSize: Number(this.state.font_size) }} className="bottom">
                        {this.state.bottomText}
                    </h2>
                </div>
            </header>
        )
    }
}