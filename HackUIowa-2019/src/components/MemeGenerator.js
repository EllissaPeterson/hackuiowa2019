import React from 'react';
import {Button} from 'reactstrap';
import './ThinkRock.css';

export default class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
          font_size: "40",
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
        console.log();
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
                <div className="Think-Button">
                    <Button color="info" size="lg" onClick={this.handleClick} className="Think-Button" block>Make Rock Think</Button>
                </div>
                <div className="meme">
                    <h2 style={{ fontSize: Number(40) }} className="top">
                        {this.state.topText}
                    </h2>
                    <img src={this.state.randomImg} alt="" />
                    <h2 style={{ fontSize: Number(40) }} className="bottom">
                        {this.state.bottomText}
                    </h2>
                </div>
            </header>
        )
    }
}