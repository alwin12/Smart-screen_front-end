import React,{Component} from 'react'
import Background from './background.jpeg'

import {connect} from 'react-redux'
import "./TimetableQuickView.css"
import {withRouter} from 'react-router-dom'
import spacer from './spacer.jpeg'
import requireConfigAuth from '../../HOCs/requireConfigAuth'
import loadData from '../../loadData.js'
import {ParentDiv,TopSection,Now,Next,NoTbText,NoTbDiv} from './style.js'
import { Card, Icon,Container } from 'semantic-ui-react'


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






   let now = {}
   let next = {}

   this.props.timetable.map((timetable)=>{


     if(timetable.status.now ===true){

       now = timetable;
     }
     if(timetable.status.next ===true){

       next = timetable;
     }



   })


    return(

    <ParentDiv style={{backgroundImage: `url(${Background})`}}>

   <TopSection>
    <div className='roomno'>room</div>
      <div className="currenttime">{this.state.time} {this.state.amPm}</div>
    </TopSection>


  {now.startTime? (

    <Now >
<div className="now margin">Now</div>
    <div className="time">{now.startTime}-{now.endTime}</div>
    <div className="code">{now.code}</div>
    <div className="name">{now.name}</div>
    <div className="staff">{now.staffs}</div>

  </Now>


): <NoTbDiv now={true}>
  <div className="now margin">Now</div>
  <NoTbText>No Scheduled timetable</NoTbText>
  </NoTbDiv>



}






    {next.startTime?
      ( <Next>
<div className="now margin">Next</div>
      <div className="time">{next.startTime}-{next.endTime}</div>
      <div className="code">{next.code}</div>
      <div className="name">{next.name}</div>
      <div className="staff">{next.staffs}</div>
      </Next>)

    : <NoTbDiv now={false}>
    <div className="now margin">Next</div>
    <NoTbText>No Scheduled timetable</NoTbText>
    </NoTbDiv>

  }





    </ParentDiv>

         // <div className = 'main' >
      		// <div class="container" >
      		// <img  class="spacer"/>
      		// <div class="roomno"><p>Y016</p></div>
      		// <div class="currenttime"><p>{this.state.time}</p></div>
      		// <div  class="one">
      		// <div class="status"><p>Now</p></div>
         //
         //
         //  {now.startTime? (
         //    <div>
         //    <div class="subjectcode"><p>{now.code}</p></div>
        	// 	<div class="subjectname"><p>{now.name } </p></div>
        	// 	<div class="lecturername"><p>{now.staffs || 'none'}</p></div>
        	// 	<div class="timeheld"><p>{now.startTime||'00:00'}- {now.endTime  ||'00:00'}</p></div>
         //    </div>
         //  ):<div>no timetable</div> }
         //
         //
         //
      		// </div>
      		// <div class="two">
      		// 	<div class="status"> <p>Next</p></div>
         //
         //    {next.startTime?(
         //      <div>
         //      <div class="subjectcode"><p>{next.code}</p></div>
        	// 		<div class="subjectname"><p>{next.name || 'none'}</p></div>
        	// 		<div class="lecturername"><p>{next.staffs || 'none'}</p></div>
        	// 		<div class="timeheld"><p>{next.startTime||'00:00'}- {next.endTime  ||'00:00'}</p></div>
         //      </div>
         //
         //
         //    ):<div>no timetable</div>}
         //
         //
         //      </div>
      		// </div>
         //
         //  </div>



    )


  }

}

const mapStateToProps = (state)=>{

  return {

   timetable:state.socketIO.timetable


  }
}
export default connect(mapStateToProps,null)(requireConfigAuth(withRouter(TimetableQuickView)))
