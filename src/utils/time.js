 const compareDate=({activityDate})=>{
  var arrDate=activityDate;
  console.log('act',activityDate)
  //arrDate=arrDate.substring(0,10);
  //  split = arrDate.split(' ')

    //let month = getMonth(arrDate[1])
  //  let day = arrDate[2]
    //let year = arrDate[3]



  //var currDate=new Date();
    // console.log(currDate.toString())

     let currDate = new Date().toString()

      let split1 = currDate.substring(0,15)
      let split2 = arrDate.substring(0,15)
     console.log('cur',split1)
      console.log('next',split2)
  var formatDate;
  // if(currDate.getMonth()>9){
  //
  // formatDate=currDate.getFullYear()+'-'+(currDate.getMonth()+1)+'-'+currDate.getDate();
  //
  //
  // }
  // else
  // {
  // formatDate=currDate.getFullYear()+'-'+'0'+(currDate.getMonth()+1)+'-'+currDate.getDate();
  // }

  //return formatDate.localeCompare(arrDate)==0;

  return split1.localeCompare(split2) === 0
}



 export const getTb = (timetables)=>{

var filterArr=timetables.filter(compareDate);


 let modifyTime = filterArr.map((tb)=>{



      let startTime = tb.startTime.split(' ')[4]
      let endTime = tb.endTime.split(" ")[4]
        tb.startTime =startTime
        tb.endTime = endTime


       return tb


 })

return modifyTime;




}
