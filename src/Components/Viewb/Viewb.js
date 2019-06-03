import React,{Component} from 'react'
import './Viewb.css'
import Background from './background.jpeg'
import {ParentDiv,ContentDiv,TopSection,Flex,Notb} from './style.js'
import {connect} from 'react-redux'

class Viewb extends Component {

  state = {

  time: '00:00:00',
  amPm :'am'


  }


  componentDidMount(){



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

    let past={}
    let now={}
    let next={}
    let later = {}



    this.props.timetable.map((timetable)=>{

      if(timetable.status.now ===true){

        now = timetable;
      }
      if(timetable.status.next ===true){

        next = timetable;
      }
      if(timetable.status.past ===true){

        past = timetable;
      }
      if(timetable.status.later ===true){

        later = timetable;
      }



    })

    return(


  <ParentDiv style={{backgroundImage: `url(${Background})`}} >

<TopSection>

  <div className="room">room</div><div className="time">{this.state.time} {this.state.amPm}</div>


</TopSection>
  <ContentDiv>

  {past.startTime? (
       <Flex>

    <div style ={{display:"flex",flexDirection:'column'}}>

    <div className='t'>{next.startTime}</div>
    <div className='t'>{next.startTime}</div>

    </div>

    <div className='past'>Past</div>
    <div className='code'>{past.code}</div>
    <div className='dash'>-</div>
    <div className='coursename'>{past.name}</div>
    <div className='name'>{past.staffs}</div>
     </Flex>): (<Notb><div className='past'></div><div className='name'>no past timetable</div></Notb>)}
     {now.startTime? (
          <Flex>

       <div style ={{display:"flex",flexDirection:'column'}}>

       <div className='t'>{now.startTime}</div>
       <div className='t'>{now.startTime}</div>

       </div>

       <div className='past'>Now</div>
       <div className='code'>{now.code}</div>
       <div className='dash'>-</div>
       <div className='coursename'>{now.name}</div>
       <div className='name'>{now.staffs}</div>
        </Flex>): (<Notb><div></div><div className='name'>no scheduled timetable</div></Notb>)}

       {next.startTime? (
            <Flex>

         <div style ={{display:"flex",flexDirection:'column'}}>

         <div className='t'>{next.startTime}</div>
         <div className='t'>{next.startTime}</div>

         </div>

         <div className='past'>Next</div>
         <div className='code'>{next.code}</div>
         <div className='dash'>-</div>
         <div className='coursename'>{next.name}</div>
         <div className='name'>{next.staffs}</div>
          </Flex>): (<Flex><div>Next></div><div className="name">no next timetable</div></Flex>)}

          {later.startTime? (
               <Flex>

            <div style ={{display:"flex",flexDirection:'column'}}>

            <div className='t'>{later.startTime}</div>
            <div className='t'>{later.startTime}</div>

            </div>

            <div className='past'>Later</div>
            <div className='code'>{later.code}</div>
            <div className='dash'>-</div>
            <div className='coursename'>{later.name}</div>
            <div className='name'>{later.staffs}</div>
             </Flex>): (<Notb><div></div><div className="name">no timetable</div></Notb>)}




  </ContentDiv>

  </ParentDiv>

    )



}
}





const mapStateToProps = (state)=>{

return {


   timetable:state.socketIO.timetable
}


}


export default connect(mapStateToProps,null)(Viewb)
