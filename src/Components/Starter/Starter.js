import React,{Component} from 'react';
import {Redirect,withRouter} from 'react-router-dom';
import axios from 'axios';
import {socketAuth} from '../../socket-client/socketClient';
import {connect} from 'react-redux'

import {setRoomField,setPinField,configAuth} from '../../redux/configActions.js'

import {Container} from '../../Style.js'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  margin: {
    margin: '40px',
  },
});


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

    <Container>

    <div className = {this.props.classes.margin}>
    <Grid container spacing={8} alignItems="flex-end">
      <Grid item>

      </Grid>

      <Grid item>
        <TextField  type='text'  id="input-with-icon-grid" label="room"  onChange = {this.props.setRoomField}/>
      </Grid>

    </Grid>

    <div className={this.props.classes.margin}>
   <Grid container spacing={8} alignItems="flex-end">
   <Grid item>

   </Grid>
   <Grid item>
     <TextField  type='password'  id="input-with-icon-grid" label="pin" onChange = {this.props.setPinField} />
   </Grid>

   </Grid>
   </div>



</div>

<Button  style={{alignSelf:'center',margin:'4px'}} onClick = {()=>{

this.props.configAuth(()=>{

  this.props.history.push('/student/timetable')
})


}}
variant="contained" color="primary" className={this.props.classes.button} >
   Go
 </Button>



  </Container>






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

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {

    setRoomField: (e) => dispatch(setRoomField(e.target.value)),
    setPinField:(e)=> dispatch(setPinField(e.target.value)),
    configAuth:(callback)=> dispatch(configAuth(callback))

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Starter)))
