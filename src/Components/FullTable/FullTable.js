import React,{Component} from 'react';
import ReactTable from "react-table";

 import TimeTableCard from '../TimeTableCard/TimeTableCard'
 import  './FullTable.css'
 import "react-table/react-table.css"



class FullTable extends Component {


render(){

  const columns=[

{
 Header: "Course Name",
 accessor: "lecture"


},
{
  Header: "Start",
  accessor: "startTime"


},
{
  Header:"End",
  accessor: "endTime"

},
{
  id: "status",
  Header: "status",
accessor: props => props.status.text,
maxWidth:100
}

  ]


  console.log(this.props.timeTable);


  let timeTableCards = this.props.timeTable.map((timeTable)=>{


  return (<TimeTableCard timeTable={timeTable} key={timeTable._id}/>)

  })

   if(this.props.timeTable.length == 0)  {
     return (<h2>loading...</h2>)
   }else

     {
    return (

      <div>

   <ReactTable data = {this.props.timeTable} columns = {columns}  className='-striped highlight'/>


    </div>)
  }
    //{timeTableCards}
}

}


export default FullTable
