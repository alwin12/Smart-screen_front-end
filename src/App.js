import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FullTable from './Components/FullTable/FullTable'
import { socketConnection,eventEmiters,eventListeners,socketAuth} from './socket-client/socketClient'
import {activeScheduler,innactiveScheduler} from "./time-scheduler/timeScheduler"
import {sort,getEndTimes} from './utils/utils.js'


const socket = socketConnection();

let timetable =undefined

class App extends Component {

 constructor(){
   super();
   this.state = {

     Timetable:[]
   }
}
componentDidMount(){


  socketAuth(socket);
  //eventEmiters(socket);

   eventListeners(socket).then((timetables)=>{

  let timetable = timetables.timetable

  timetable.map((timetable)=>{

    timetable.status = {
       active:  false,
       previous: false,
       next: false,
       text: 'innactive'
    }

  })

this.setState({Timetable:sort(timetable)})


let jobs = [];
this.state.Timetable.map((timetable,index)=>{
   jobs.push(activeScheduler(this,timetable))

})



let endTimes = getEndTimes(this.state.Timetable)
  console.log(endTimes)
endTimes.map((endTime)=>{


jobs.push(innactiveScheduler(this,endTime));


})

console.log(this.state.Timetable);

   }).catch(e=>{
     console.log(e);
   })



}


  render() {
    return (
      <div className="App">


 <FullTable timeTable = {this.state.Timetable} />
      </div>
    );
  }
}

export default App;
