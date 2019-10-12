import React from 'react';
import {Button} from 'reactstrap';

const MainScreen = () => (
    <header className="App-header">
      <img src="logo.jpg" className="App-logo" alt="logo" />
      <div className="Login-buttons">
      <Button color="info" size="lg" href="/" block>Home</Button>
      <Button color="info" size="lg" href="/memeGenerator" block>Meme Generator</Button>
      </div>
    </header>
  )

export default MainScreen;