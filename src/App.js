import React, { Component } from 'react';
import {BrowserRouter as Router , Link,Route,Redirect,withRouter,Switch} from 'react-router-dom'

import './App.css';
import FullTable from './Components/FullTable/FullTable'
import HeaderStudent from './Components/HeaderStudent/HeaderStudent'
import HeaderStaff from './Components/HeaderStaff/HeaderStaff.js'
import Header from './Components/Header/Header'
import Adverts from './Components/Adverts/Adverts.js';
import Upload from './Components/Upload/Upload.js'
import Starter from './Components/Starter/Starter.js'
import Home from './Components/Home/Home.js'
import Online from './Components/Online/Online.js'
import Login from './Components/Login/Login.js'
import Signin from './Components/Signin/Signin.js'
import ConfigPage from './Components/ConfigPage/ConfigPage'
import Timetable from './Components/Timetable/Timetable.js'
import TimetableUploader from './Components/TimetableUploader/TimetableUploader.js'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import TimetableQuickView from './Components/TimetableQuickView/TimetableQuickView'
import {connect} from 'react-redux'
//import '../semantic/dist/semantic.min.css'

import { socketConnection,eventEmiters,daysTimetableListener,advertsListener,socketAuth,socketJwt} from './socket-client/socketClient'
import {activeScheduler,innactiveScheduler} from "./time-scheduler/timeScheduler"
import {sort,getEndTimes,authentication} from './utils/utils.js'
import {setSocket,setTimetable,modifyTimetable,setAdverts} from './redux/actions.js'
//const io = require('socket.io-client');

import io from 'socket.io-client'

 //let socket = io.connect('http://localhost:3001/');


const mapStateToProps = (state) =>{


return {

timetable:state.socketIO.timetable,
student: state.app.student,
staff:state.app.staff
}

}

const mapDispatchToProps = (dispatch) =>{


   return {

    setSocket: socket => dispatch(setSocket(socket)),
    setTimetable: (callback) => dispatch(setTimetable(callback)),
    setAdverts: () => dispatch(setAdverts()),
    modifyTimetable:()=> dispatch(modifyTimetable()),
    activeScheduler: (timetable)=> dispatch(activeScheduler(timetable)),
    innactiveScheduler:(endTime)=> dispatch(innactiveScheduler(endTime))



   }



}




class App extends Component {

 constructor(){
   super();
   this.state = {

     Timetable:[],
     adverts:[],

     student: {
       student: false,
        Timetable:[],
        adverts:[],
        tableDisplayed:false
     },
     staff: {
       staff:false,
     },
     authentication: authentication

   }

}


onStaffClick = ()=>{
  let staff = this.state.staff;
  staff.staff = true;

  this.setState({staff:staff})


}
componentDidMount(){



//      this.props.setSocket(socket);
//        this.props.setAdverts();
//      this.props.setTimetable(()=>{
//
//  if(this.props.timetable.length<1){
//   return
//
// }
//    this.props.timetable.map((timetable)=>{
//
//    console.log(this.props.timetable)
//      this.props.activeScheduler(timetable)
//
//    })
//
//
//
//
// let endTimes = getEndTimes(this.props.timetable);
//
//  endTimes.map((endTime)=>{
//    this.props.innactiveScheduler(endTime);
//  })
//
//      });


}



 setStaff = ()=>{

   let staff = this.state.staff;
   staff.staff = true;


 }

   disableDisplayTableButton = () =>{

  let student = this.state.student
student.tableDisplayed = true;

  this.setState({student:student})
  sessionStorage.setItem('student',JSON.stringify(this.state.student));

}
enableDisplayTableButton =()=>{

     console.log(this.state)
  let student = this.state.student
student.tableDisplayed = false;

  this.setState({student:student})
  sessionStorage.setItem('student',JSON.stringify(this.state.student));



}





  render() {
    return (


<Router>

   <div>






    <Route exact path = '/' render={()=>{


    return(<Redirect to ='/student/quickview'/>)

    }}/>



    <Route exact path = '/starter' render = {()=>{


        return(

          <Starter onStudentClick = {this.onStudentClick} onStaffClick = {this.onStaffClick}   studentAuth={this.studentAuth} setStudent = {this.setStudent}/>
        )
    }}/>

   <Route exact path = '/student/timetable' render = {()=>{
       return (

        <FullTable timeTable = {this.state.student.Timetable} enableDisplayTableButton = {this.enableDisplayTableButton} disableDisplayTableButton = {this.disableDisplayTableButton}/>
       )
   }}/>

   <Route exact path = '/student/adverts' render = {()=>{
       return (

           <Adverts adverts ={this.state.student.adverts} enableDisplayTableButton = {this.enableDisplayTableButton} disableDisplaytableButton = {this.disableDisplaytableButton}/>
       )
   }}/>



   <Route path ='/staff/login' render = {()=>{
   return (<Login authentication = {authentication} />)
    }} />
    <Route path = '/staff/signin' render = {()=>{

      return (<Signin authentication = {authentication}/>)
    }}/>

   <Route path ='/staff/home'  render={()=>{
    return (<Home authentication = {authentication} />)
   }
   }/>
   <Route path = '/staff/timetable' render = {()=>{
     return (<Timetable/>)
   }}/>
   <Route path = '/staff/upload' render = {()=>{

        return (<Upload/>)

   }}/>
   

   <Route path = '/student/quickview' render = {()=>{

        return (<TimetableQuickView />)

   }}/>

   <Route path = '/staff/timetableUploader' render = {()=>{

        return (<TimetableUploader />)

   }}/>





</div>
</Router>



    );

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
