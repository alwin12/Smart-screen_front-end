import React,{Component} from 'react'
import background from './background.jpeg'

import "./TimetableQuickView.css"
import spacer from './spacer.jpeg'

class TimetableQuickView extends Component {




     state = {

     time: '00:00:00',
     amPm :'am'


     }


     componentDidMount(){

       this.loadInterval = setInterval(this.getTime,1000)
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

    return(



         <div className = 'main' >
      		<div class="container" >
      		<img src={spacer} class="spacer"/>
      		<div class="roomno"><p>Y016</p></div>
      		<div class="currenttime"><p>{this.state.time}</p></div>
      		<div  class="one">
      		<div class="status"><p>Now</p></div>
      		<div class="subjectcode"><p>ITECH3142</p></div>
      		<div class="subjectname"><p>PROJECT 1</p></div>
      		<div class="lecturername"><p>Grant Meredith</p></div>
      		<div class="timeheld"><p>11:30AM-01:30PM</p></div>

      		</div>
      		<div class="two">
      			<div class="status"> <p>Next</p></div>
      			<div class="subjectcode"><p>ITECH2004</p></div>
      			<div class="subjectname"><p>Data Modelling</p></div>
      			<div class="lecturername"><p>Amy Meade</p></div>
      			<div class="timeheld"><p>01:30PM-03:30PM</p></div>
              </div>
      		</div>

          </div>



    )


  }
}
export default TimetableQuickView
