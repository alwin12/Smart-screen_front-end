import React,{Component} from 'react';

 import TimeTableCard from '../TimeTableCard/TimeTableCard'
 import  './FullTable.css'




class FullTable extends Component {


render(){


  console.log(this.props.timeTable);


  let timeTableCards = this.props.timeTable.map((timeTable)=>{


  return (<TimeTableCard timeTable={timeTable} key={timeTable._id}/>)

  })

   if(this.props.timeTable.length == 0)  {
     return (<h2>loading...</h2>)
   }else

     {
    return (

      <div className = 'grid'>

   <div>course code</div> <div>course name</div> <div>start</div> <div>end</div>


    </div>)
  }
    //{timeTableCards}
}

}


export default FullTable
