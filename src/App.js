import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { socketConnection,eventEmiters} from './socket-client/socketClient'
const socket = socketConnection();



class App extends Component {


componentDidMount(){


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
