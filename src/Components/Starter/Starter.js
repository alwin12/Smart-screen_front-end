import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {socketAuth} from '../../socket-client/socketClient';




class Starter extends Component {

 state ={
   student:false,
   building:'',
   lectureHall:'',
   authenticated:false,
   staffPortal:false

 }

 onBuildingChange = (e) =>{
   this.setState({building:e.target.value})
 }
 onlectureHallChange=(e)=>{
   this.setState({lectureHall:e.target.value})
 }


 onGoClick = () =>{




   axios.post('http://localhost:3002/student/lecturehall',{

     building:this.state.building,
     lectureHall: this.state.lectureHall

   }).then((resp)=>{
     console.log(resp)

      if(resp.data.lectureHall){


     this.props.onStudentClick();
     this.setState({authenticated:true})


      }

   })


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

    <div>


  <button onClick = {()=>{

  this.setState({student:true})





  }}>student</button>

  <button onClick = {()=>{

     this.props.onStaffClick();
    this.setState({staffPortal:true})

  }}>staff</button>

{this.state.student && <div>

    <label for="building" class="building">Building</label>
    <input onChange = {this.onBuildingChange} id="building" type="text" />

    <label for="Room" class="Room">Room</label>
    <input onChange= {this.onlectureHallChange} id="Room" type="text" />
    <button onClick = {this.onGoClick}> Go </button>





  </div>}

    </div>




  )
}



}


export default Starter
