import React,{Component} from 'react';
import ReactTable from "react-table";
import {connect} from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import { socketConnection,eventEmiters,daysTimetableListener,advertsListener,socketAuth,socketJwt} from '../../socket-client/socketClient'
import {setSocket,setTimetable,modifyTimetable,setAdverts} from '../../redux/actions.js'
import {activeScheduler,innactiveScheduler} from "../../time-scheduler/timeScheduler"
import {sort,getEndTimes,authentication} from '../../utils/utils.js'

 import TimeTableCard from '../TimeTableCard/TimeTableCard'

 import "react-table/react-table.css"

import {HeaderWithIcon,Status,Coursename,End,Start,Lecturer} from './Style.js'

import './fulltable.css'

import io from 'socket.io-client'

 let socket = io.connect('http://localhost:3002/');

const mapDispatchToProps = (dispatch)=>{

 return {
  setSocket: socket => dispatch(setSocket(socket)),
  setTimetable: (callback) => dispatch(setTimetable(callback)),
  setAdverts: () => dispatch(setAdverts()),
  modifyTimetable:()=> dispatch(modifyTimetable()),
  activeScheduler: (timetable)=> dispatch(activeScheduler(timetable)),
  innactiveScheduler:(endTime)=> dispatch(innactiveScheduler(endTime))
}
}


const mapStateToProps = (state)=>{
  return {

    timetable:state.socketIO.timetable,

  }
}



class FullTable extends Component {

   state = {
     name: 'alwin',
     timetable:this.props.timetable
   }

 componentDidMount() {
   let socket = io.connect('http://localhost:3002/');

        this.props.setSocket(socket);
          this.props.setAdverts();
        this.props.setTimetable(()=>{

    if(this.props.timetable.length<1){
      console.log('lemngth')
     return

   }
      this.props.timetable.map((timetable)=>{

      console.log(this.props.timetable)
        this.props.activeScheduler(timetable)

      })




   let endTimes = getEndTimes(this.props.timetable);

    endTimes.map((endTime)=>{
      this.props.innactiveScheduler(endTime);
    })

        });




 }



render(){

const columns = [


{

  Header: <HeaderWithIcon><FontAwesomeIcon style={{marginRight:"10px",marginTop:'4px'}} icon = {faUniversity}  color='black' size='1x' /><div style={{fontFamily: "Fredoka One"}}>Lecture Hall: Y247</div> </HeaderWithIcon>,

  columns: [

    {
     Header: <HeaderWithIcon><div  className='header'>Course name</div><FontAwesomeIcon style={{marginLeft:"10px",marginTop:'4px'}} icon = {faBook}  color='black' size='1x' /> </HeaderWithIcon>,
     accessor: "lecture",
     headerClassName:"header",
     className:"rows",
     Cell: props => props.original.status.active? <Coursename active>{props.value}</Coursename>: <Coursename >{props.value}</Coursename>



    },
    {

      Header:<HeaderWithIcon><div  className='header'>Lecturer</div><FontAwesomeIcon style={{marginLeft:"10px",marginTop:'4px'}} icon = {faChalkboardTeacher}  color='black' size='1x' /> </HeaderWithIcon>,
      accessor: 'lecturerName',
      headerClassName:"header",
      maxWidth:300,
      Cell: (props)=> props.original.status.active? <Lecturer active ><i>{props.value}</i></Lecturer>: <Lecturer  ><i>{props.value}</i></Lecturer>

    },
    {
      Header: <HeaderWithIcon><div  className='header'>Start</div><FontAwesomeIcon style={{marginLeft:"10px",marginTop:'4px'}} icon = {faClock}  color='black' size='1x' /> </HeaderWithIcon>,
      accessor: "startTime",
       headerClassName:"header",
       Cell: (props) => props.original.status.active? <Start active>{props.value}</Start>: <Start>{props.value}</Start>,
       className:"rows",

        maxWidth:200,

    },

    {

      Header: <HeaderWithIcon><div  className='header'>End</div><FontAwesomeIcon style={{marginLeft:"10px",marginTop:'4px'}} icon = {faClock}  color='white' size='1x' /> </HeaderWithIcon>,
      accessor: "endTime" ,
      headerClassName:"header",
      className:"rows"  ,
      Cell: (props) =>  props.original.status.active? <End active>{props.value}</End>: <End >{props.value}</End>,
      maxWidth:200

    },
    {

      id:props =>  props.status.active?  "active" :  "innactive",
      Header: <HeaderWithIcon><div  className='header'>Status</div><FontAwesomeIcon style={{marginLeft:"10px",marginTop:'4px'}} icon = {faArrowCircleRight}  color='black' size='1x' /> </HeaderWithIcon>,
    accessor: props=>  props.status.active?  "active" :  "innactive",
    maxWidth:150,
    headerClassName:"header",
    //className: props=> props.status.active? 'active':'innactive',
    Cell: props=> props.value == "active"? <Status active >{props.value}</Status>: <Status>{props.value}</Status>

    },

  ]
}

]

   if(this.props.timetable.length==0)  {
     return (<h2>loading...</h2>)
   }

    else if(!this.props.timetable[0].status)  {

       return (<h2>loading 2...</h2>)
     }

   else

     {
    return (

      <div>

   <ReactTable data = {this.props.timetable} columns = {columns}
   className='-striped highlight' showPagination={false} showPageSizeOption = {false} defaultPageSize = {this.props.timetable.length} />

    </div>)
  }

}

}


export default connect(mapStateToProps,mapDispatchToProps)(FullTable)
