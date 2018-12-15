import React,{Component} from 'react';

 import TimeTableCard from '../TimeTableCard/TimeTableCard'




class FullTable extends Component {


render(){


  console.log(this.props.timeTable);


  let timeTableCards = this.props.timeTable.map((timeTable)=>{


  return (<TimeTableCard timeTable={timeTable} key={timeTable._id}/>)

  })

  return (<div>

  {timeTableCards}



    </div>)
}

}


export default FullTable
