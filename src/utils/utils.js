

  export const splitHrAndMin=(time)=>{

    let timeArray = time.split(":");

     const hrAndMin ={
       hr: timeArray[0],
       min:timeArray[1]

     }
     return hrAndMin

   }

   export const sort =(timetable)=>{

         let sortedTable = timetable.sort((timetable1,timetable2)=>{

       if (timetable1.startTime>timetable2.startTime)

          { return 1}
          else return -1;
         })



 return sortedTable

   }

 export const getEndTimes = (Timetable)=>{

let endTimesArray = [];

 for(let i=0;i<Timetable.length-1;i++){

   //for (let j=i+1;j<Timetable.length;j++){

     if(Timetable[i].endTime.localeCompare(Timetable[i+1].startTime)!=0){

         //console.log(Timetable[i].lecture,Timetable[j].lecture )
         endTimesArray.push(Timetable[i].endTime)

     } 

 }

endTimesArray.push(Timetable[Timetable.length-1].endTime)
return endTimesArray;


 }
