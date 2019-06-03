
//let CronJob = require('cron').CronJob;


import {CronJob} from 'cron'
import update from 'react-addons-update'
import {splitHrAndMin} from "../utils/utils"


export const activeScheduler = (timetable)=>(dispatch) => {



      dispatch({type:'SCHEDULE_JOB_PENDING'})

  let hrAndMin = splitHrAndMin(timetable.startTime);
  let job = new CronJob(`${hrAndMin.min} ${hrAndMin.hr} * * 1-6 `, ()=> {

     //inactiveAll(app.state.Timetable)

     //app.setState({timeTable: update(app.state.timeTable,{index:{status:{active:{$set:true}}}})})
     //timetable.status.active = true;
     dispatch({type:"SET_ALL_INNACTIVE"});

     dispatch({type:"SET_TO_ACTIVE",payload:timetable})



     //dispatch({type:"SET_TO_NEXT",payload:timetable})


 },  ()=> {
   },
   true
 );

return job;



}

   export const innactiveScheduler = (endTime) =>(dispatch) => {

     dispatch({type:"SCHEDULE_JOB_PENDING"})

      let hrAndMin = splitHrAndMin(endTime);
    

     let job = new CronJob(`${hrAndMin.min} ${hrAndMin.hr} * * 1-6 `, ()=>{



        dispatch({type:"SET_ALL_INNACTIVE"})




     },()=>{},true)


}
