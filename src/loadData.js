
import {connect} from 'react-redux'

   const loadData = (props)=>{

   console.log('props',props)


   }



const mapStateToProps = (state)=>{
  return {

     timetable:state.socketIO.timetable


  }
}


   export default connect(mapStateToProps,null)(loadData)
