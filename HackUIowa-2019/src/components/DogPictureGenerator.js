import React from 'react';
import {Button} from 'reactstrap';
import './ThinkRock.css';
import Axios from 'axios';
import firebase from 'firebase';

// Reference to your entire Firebase database
var storage = firebase.storage();

export default class DogPictureGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
          dogImg: "https://dog.ceo/api/breeds/image/random"
        };
      }

      onClick(event) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(data => data.json())
            .then(response => {
                var file = new File([response.message], response.message, {
                    type: "img",
                  });

                var storageRef = firebase.storage().ref().child(firebase.auth().currentUser.email);
                var image = storageRef.child(response.message).put(file);
            })
      }

      componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(data => data.json())
          .then(response => {
              console.log(response.message);
              this.setState({dogImg : response.message});
          });
      }
      render() {
        console.log();
        return (
            <header className="App-header">
                Thinking Rock
                <img src="logo.jpg" className="App-logo" alt="logo" />
                <div className="Think-Button">
                    <Button color="info" size="lg" href="/dogPictureGenerator" className="Think-Button" block>Make Rock Think</Button>
                    <Button color="secondary" size="lg" onClick={this.onClick} className="Think-Button" block>Save Image</Button>
                </div>
                <div className="dog">
                    <img src={this.state.dogImg} alt="" />
                </div>
            </header>
        )
    }
}