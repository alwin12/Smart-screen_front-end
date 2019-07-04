import React,{Component} from 'react';
import {Redirect,withRouter} from 'react-router-dom';
import axios from 'axios';
import {socketAuth} from '../../socket-client/socketClient';
import {connect} from 'react-redux'
import Background from './image.svg';
import {setRoomField,setPinField,configAuth} from '../../redux/configActions.js'

import {Container} from '../../Style.js'
import { Dropdown } from 'semantic-ui-react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {ParentDiv} from './style.js'
import {setSocket,setTimetable,modifyTimetable,setAdverts} from '../../redux/actions.js'
import {activeScheduler,innactiveScheduler} from "../../time-scheduler/timeScheduler"
import {sort,getEndTimes,authentication} from '../../utils/utils.js'
import logo from './logo.svg'
import io from 'socket.io-client'

const styles = theme => ({
  margin: {
    margin: '40px',
  },
});

let errorStyle= {
  background:"red"
}


class Starter extends Component {

 state ={
   student:false,
   building:'',
   lectureHall:'',
   authenticated:false,
   staffPortal:false,
   pinError:false,
   roomError:false,


 }

 onBuildingChange = (e) =>{
   this.setState({building:e.target.value})
 }
 onlectureHallChange=(e)=>{
   this.setState({lectureHall:e.target.value})
 }


   getDropDownOptions = (rooms)=>{


       let dropDownOptions = rooms.map((room)=>{


           return {value:room,key:room,text:room}


       })

       return dropDownOptions

   }

 onGoClick = (callback) =>{

   //this.props.socket.emit('config',{room:this.props.room,pin:this.props.pin})

    axios.post('http://localhost:3001/config',{room:this.props.room,pin:this.props.pin}).then(resp=>{

      callback()
    }).catch(e=>{

      this.setState({pinError:true})

    })




   // axios.post('http://localhost:3001/student/lecturehall',{
   //
   //   building:this.state.building,
   //   lectureHall: this.state.lectureHall
   //
   // }).then((resp)=>{
   //   console.log(resp)
   //
   //    if(resp.data.lectureHall){
   //
   //
   //   this.props.onStudentClick();
   //   this.setState({authenticated:true})
   //
   //
   //    }
   //
   // })


           }

     loadData =()=>{



    //  let socket = io.connect('http://localhost:3001/');

                //this.props.setSocket(socket);

                 // socket.on('unauthorized',function(error,callback){
                 //
                 //      if(error.data.type ==='UnauthorizedError'|| error.data.code==='invalid_token'){
                 //
                 //        this.history.push('student/starter');
                 //
                 //
                 //
                 //
                 //      }
                 //
                 //
                 // })



              //        this.props.setAdverts();
              //
              //
              //
              //      this.props.setTimetable(()=>{
              //
              //
              //  if(this.props.timetable.length<1){
              //    console.log('length')
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
              // let endTimes = getEndTimes(this.props.timetable);
              //
              //  endTimes.map((endTime)=>{
              //    this.props.innactiveScheduler(endTime);
              //  })
              //
              //      });







           }




render(){

  // if(this.state.authenticated){
  //
  //   return( <Redirect to='/student/timetable'/>)
//  }


 if(this.state.authenticated == true){
   return(<Redirect to = '/student/adverts'/>)
 }
 else if(this.state.staffPortal){
   return (<Redirect to ='/staff/home'/>)
 }


  return(

    <ParentDiv style={{background:`url(${Background})`}}>


     <img src ={logo} style={{gridArea:'logo'}}/>

    <Container style={{gridArea:'login'}}>

         <Dropdown

         placeholder='Room'
         fluid
         selection
         options={this.getDropDownOptions(this.props.rooms)}
          style={this.state.roomError?errorStyle:{}}

         onChange = {(e,{name,value})=>{

           this.setState({roomError:false})

        this.props.setRoomField(value)


      }}/>

     <TextField style={{marginTop:'20px'}} type='password' error={this.state.pinError} id="input-with-icon-grid" label="pin" onChange =
     {(e)=>{

  this.setState({pinError:false})
   this.props.setPinField(e)

     }



     } />


<Button  style={{alignSelf:'center',margin:'4px',marginTop:"50px"}} onClick = {()=>{

this.onGoClick(()=>{

   if(this.props.room==""){
     this.setState({roomError:true})
   }


  if(this.state.roomError || this.state.pinError) {



     return
  }



    this.props.history.push('/student/adverts')

})


}}
  variant="contained" color="primary" className={this.props.classes.button} >
   Go
 </Button>



  </Container>

  </ParentDiv>



  )
}



}
// <label for="building" class="building">Building</label>
// <input onChange = {this.onBuildingChange} id="building" type="text" />
//
// <label for="Room" class="Room">Room</label>
// <input onChange= {this.onlectureHallChange} id="Room" type="text" />
// <button onClick = {this.onGoClick}> Go </button>
const mapStateToProps = (state)=>{
  return{
timetable:state.socketIO.timetable,
socket: state.socketIO.socket,
room:state.inputFields.roomField,
pin:state.inputFields.pinField,
rooms:state.socketIO.rooms

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {

    setRoomField: (value) => dispatch(setRoomField(value)),
    setPinField:(e)=> dispatch(setPinField(e.target.value)),
    configAuth:(callback)=> dispatch(configAuth(callback)),

    setSocket: socket => dispatch(setSocket(socket)),
    setTimetable: (callback) => dispatch(setTimetable(callback)),
    setAdverts: () => dispatch(setAdverts()),
    modifyTimetable:()=> dispatch(modifyTimetable()),
    activeScheduler: (timetable)=> dispatch(activeScheduler(timetable)),
    innactiveScheduler:(endTime)=> dispatch(innactiveScheduler(endTime))


  }
}
//<TextField  type='text'  id="input-with-icon-grid" label="room"  onChange = {this.props.setRoomField}/>
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Starter)))
