import React,{Component} from 'react'
import "./TimeTableCard.css"


const TimeTableCard = (props) =>{


return (
  <div id ='card'>

  <div> <div>lecture:</div> <div>{props.timeTable.lecture}</div> </div>
 <div><div>lecturerName:</div><div>{props.timeTable.lecturerName}</div></div>
 <div><div>startTime:</div><div>{props.timeTable.startTime}</div></div>
 <div><div>endTime:</div><div>{props.timeTable.endTime}</div></div>




  </div>
)

}
export default TimeTableCard
