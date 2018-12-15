import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullTable from './Components/FullTable/FullTable'
import { socketConnection,eventEmiters,eventListeners,socketAuth} from './socket-client/socketClient'


const socket = socketConnection();

let timetable =undefined

class App extends Component {

 constructor(){
   super();
   this.state = {

     timeTable:[]
   }
}
componentDidMount(){


  socketAuth(socket);
  //eventEmiters(socket);

   eventListeners(socket).then((timetables)=>{

  this.setState({timeTable:timetables.timetable})

  console.log(this.state.timeTable[0].building);

   }).catch(e=>{
     console.log('error');
   })


}


  render() {
    return (
      <div className="App">


 <FullTable timeTable = {this.state.timeTable} />
      </div>
    );
  }
}

export default App;
