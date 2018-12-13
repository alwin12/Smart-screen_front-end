import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { socketConnection,eventEmiters,socketAuth} from './socket-client/socketClient'
const socket = socketConnection();



class App extends Component {


componentDidMount(){


  socketAuth(socket);
  eventEmiters(socket);
}


  render() {
    return (
      <div className="App">


ff
      </div>
    );
  }
}

export default App;
