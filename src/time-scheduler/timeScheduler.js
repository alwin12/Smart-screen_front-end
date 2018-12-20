
//let CronJob = require('cron').CronJob;
import {CronJob} from 'cron'
import update from 'react-addons-update'
import {splitHrAndMin} from "../utils/utils"


export const activeScheduler = (app,timetable)=>{

      let hrAndMin = splitHrAndMin(timetable.startTime);



  let job = new CronJob(`${hrAndMin.min} ${hrAndMin.hr} * * 1-6 `, ()=> {

     inactiveAll(app.state.Timetable)

     //app.setState({timeTable: update(app.state.timeTable,{index:{status:{active:{$set:true}}}})})
     timetable.status.active = true;
      app.forceUpdate();

 },  ()=> {
   },
   true
 );

return job;



}

export const innactiveScheduler = (app,endTime) =>{

   let hrAndMin = splitHrAndMin(endTime);
console.log(hrAndMin)

     let job = new CronJob(`${hrAndMin.min} ${hrAndMin.hr} * * 1-6 `, ()=>{

    inactiveAll(app.state.Timetable);

                app.forceUpdate();


     },()=>{},true)


}




 const inactiveAll = (timeTable)=>{


       timeTable.map((timetable)=>{

  if(timetable.status.active){
  timetable.status.active = false
}

       })


 }
