import React,{Component} from 'react'
import background from './background.jpeg'
import {connect} from 'react-redux'
import "./TimetableQuickView.css"
import {withRouter} from 'react-router-dom'
import spacer from './spacer.jpeg'
import requireConfigAuth from '../../HOCs/requireConfigAuth'
import loadData from '../../loadData.js'




class TimetableQuickView extends Component {






     state = {

     time: '00:00:00',
     amPm :'am'


     }


     componentDidMount(){

console.log(this.props.timetable)

       this.loadInterval = setInterval(this.getTime,1000)

       const t =   setTimeout(()=>{

           //this.props.history.push('/student/adverts')

         },20000)
       }



  getTime = ()=>{

  const takeTwelve = n=>n >12? n-12:n;
  const addZero = n=> n < 10? "0"+n:n


  setInterval(()=>{

 let d,h,m,s,t,amPm;

 d = new Date()
 h = addZero(takeTwelve(d.getHours()))
 m =addZero(d.getMinutes())
 s = addZero(d.getSeconds())

t =`${h}:${m}:${s}`
amPm = d.getHours()>= 12? 'pm':'am'

this.setState({time:t,amPm:amPm})


},1000)


 }

 render(){
   let now = {

   }
   let next  = {}

   this.props.timetable.map((timetable)=>{


     if(timetable.status.active ===true){

       now = timetable;
     }
     if(timetable.status.next ===true){

       next = timetable;
     }



   })


    return(



         <div className = 'main' >
      		<div class="container" >
      		<img src={spacer} class="spacer"/>
      		<div class="roomno"><p>Y016</p></div>
      		<div class="currenttime"><p>{this.state.time}</p></div>
      		<div  class="one">
      		<div class="status"><p>Now</p></div>
      		<div class="subjectcode"><p>ITECH3142</p></div>
      		<div class="subjectname"><p>{now.lecture || 'none'} </p></div>
      		<div class="lecturername"><p>{now.lecturerName || 'none'}</p></div>
      		<div class="timeheld"><p>{now.startTime||'00:00'}- {now.endTime  ||'00:00'}</p></div>

      		</div>
      		<div class="two">
      			<div class="status"> <p>Next</p></div>
      			<div class="subjectcode"><p>ITECH2004</p></div>
      			<div class="subjectname"><p>{next.lecture || 'none'}</p></div>
      			<div class="lecturername"><p>{next.lecturerName || 'none'}</p></div>
      			<div class="timeheld"><p>{next.startTime||'00:00'}- {next.endTime  ||'00:00'}</p></div>
              </div>
      		</div>

          </div>

    )


  }

}

const mapStateToProps = (state)=>{

  return {

   timetable:state.socketIO.timetable


  }
}
export default connect(mapStateToProps,null)(requireConfigAuth(withRouter(TimetableQuickView)))
