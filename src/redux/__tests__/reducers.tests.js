
import {socketIO} from '../reducers.js'
import {RECIEVE_TIMETABLE_SUCCESS} from '../constants'


it('handles action of type RECIEVE_TIMETABLE',()=>{


let action = {
  type: RECIEVE_TIMETABLE_SUCCESS,
  payload: [{name:'timetable1'},{name:'timetable2'},{name:'timetable3'},{name:'timetable4'}]
}


let state = socketIO({},action)


expect(state).toEqual( {"timetable":
 [{"name": "timetable1", "status": {"active": false, "next": false, "previous": false}}, {"name": "timetable2", "status": {"active": false, "next": false, "previous": false}}, {"name": "timetable3", "status": {"active": false, "next": false, "previous": false}}, {"name": "timetable4", "status": {"active": false, "next": false, "previous": false}}], 
"timetablePending": false});



})
