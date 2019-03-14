import React,{Component} from 'react'
import axios from 'axios';

import {timeTableEmitter} from '../../socket-client/socketClient.js'


  let errorStyle = {outLine: '3px solid red',backgroundColor:'red'}


class AddTimetable extends Component{


   state ={

     day: {
       text:'',
       error:false,
       style: {}

     },
     building: {
       text:'',
       error:false,
       style:{}

     },
     lectureHall: {
       text:'',
       error:false,
       style:{}

     },

     lecture: {
       text:'',
       error:false,
       style:{}

     },
     lecturerName: {
       text:'',
       error:false,
       style:{}
     },

     startTime: {
       text:'',
       error:false,
       style:{}

     },
     endTime: {
       text:'',
       error:false,
       style:{}

     }


   }
onDayChange = (e) =>{
let day = this.state.day;
day.text=e.target.value;
day.style = {}
this.setState({day:day})

}
onBuildingChange = (e) =>{
  let building = this.state.building;
  building.text=e.target.value;
  building.style = {}
  this.setState({building:building})

}
onlectureHallChange = (e) =>{
  let lectureHall = this.state.lectureHall;
  lectureHall.text=e.target.value;
  lectureHall.style = {}
  this.setState({lectureHall:lectureHall})

}
onLectureChange = (e) =>{
  let lecture = this.state.lecture;
  lecture.text=e.target.value;
  lecture.style={}
  this.setState({lecture:lecture})

}
onlecturerNameChange = (e)=>{
  let lecturerName = this.state.lecturerName;
  lecturerName.text=e.target.value;
  lecturerName.style={}
  this.setState({lecturerName:lecturerName})

}
onstartTimeChange = (e) =>{
  let startTime = this.state.startTime;
  startTime.text=e.target.value;
  startTime.style = {}
  this.setState({startTime:startTime})

}
onEndTimeChange = (e) =>{
  let endTime = this.state.endTime;
  endTime.text=e.target.value;
  endTime.style ={}
  this.setState({endTime:endTime})

}
  onAdd = () =>{

  let valid =  this.validate();
  console.log(this.state.day)
  console.log(this.state.building)
  console.log(this.state.lectureHall)
  console.log(this.state.lecture)
  console.log(this.state.lecturerName)
  console.log(this.state.startTime)
  console.log(this.state.endTime)

  let config = {
    headers: {

      'x-auth': sessionStorage.getItem('token')
    }
  }

    if(valid) {

 timeTableEmitter(this.props.socket,{
    day:this.state.day.text,
    building:this.state.building.text,
    lectureHall:this.state.lectureHall.text,
    lecture:this.state.lecture.text,
    lecturerName:this.state.lecturerName.text,
    startTime:this.state.startTime.text,
    endTime:this.state.endTime.text
 });





    }




  }

validate = () =>{

  let regex = /^\d\d:\d\d$/g;

    let valid = true;


         if(this.state.day.text==""){
           let day = this.state.day
          day.error =true;
          day.style = errorStyle;
           this.setState({day:day})
           valid = false;

         }
         if(this.state.building.text===""){
             let building = this.state.building
           building.style = errorStyle
           this.setState({building:building})
           valid= false
         }

         if(this.state.lectureHall.text==""){
            let lectureHall = this.state.lectureHall
          lectureHall.style = errorStyle
          this.setState({lectureHall:lectureHall})
           valid= false
         }

         if (this.state.lecture.text==""){
              let lecture = this.state.lecture
           lecture.style = errorStyle;
           this.setState({lecture:lecture})
           valid = false;
         }
         if (this.state.lecturerName.text==""){
              let lecturerName = this.state.lecturerName
           lecturerName.style = errorStyle;
           this.setState({lecturerName:lecturerName})
           valid = false;
         }
         if (!this.state.startTime.text.match(regex)){

             let startTime = this.state.startTime

           startTime.style = errorStyle;
           this.setState({startTime:startTime})
           valid = false;
         }
         if (!this.state.endTime.text.match(regex)){

             let endTime = this.state.endTime
           endTime.style = errorStyle;
           this.setState({endTime:endTime})
            valid= false
         }

   return valid;
}

  render(){



    return(




<div className ='form'>


         <label for="day" class="day">Day</label>
           <input id="day" type="text" onChange={this.onDayChange} style= { this.state.day.style}/>

           <label for="building" class="building">Building</label>
           <input id="building" type="text" onChange={this.onBuildingChange} style= { this.state.building.style}/>

           <label for="lectureHall">lectureHall</label>
           <input id="lectureHall" type="text" onChange={this.onlectureHallChange} style= { this.state.lectureHall.style}/>

           <label for="lecture">Lecture</label>
           <input id="lecture" type="text" onChange={this.onLectureChange} style= { this.state.lecture.style}/>

           <label for="lecturerName">Lecturer name</label>
           <input id="lectureName" type="text" onChange={this.onlecturerNameChange} style= { this.state.lecturerName.style}/>

           <label for="startTime" >start Time</label>
           <input id="startTime" type="text" placeholder='10:30' onChange={this.onstartTimeChange} style= { this.state.startTime.style}/>

           <label for="endTime">end time</label>
           <input id="endTime" type="text" placeholder='12:30' onChange={this.onEndTimeChange} style= { this.state.endTime.style}/>

           <button onClick = {this.onAdd}>Add</button>

</div>


    )
  }
}

export default AddTimetable
