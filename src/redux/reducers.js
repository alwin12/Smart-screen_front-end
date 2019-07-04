import {SET_TIMETABLE,SET_ADVERTS,SET_SOCKET,
  RECIEVE_TIMETABLE_PENDING,RECIEVE_TIMETABLE_SUCCESS,RECIEVE_TIMETABLE_FAILED,MODIFY_TIMETABLE,
RECIEVE_ADVERTS_FAILED,RECIEVE_ADVERTS_PENDING,RECIEVE_ADVERTS_SUCCESS,SET_EMAIL_FIELD,SET_PASSWORD_FIELD,
LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_FAILED,UPLOAD_PENDING,UPLOAD_SUCCESS,UPLOAD_FAILED,SET_IMAGE_FIELD,
EMAIL_FIELD_ERROR,DISPLAY_TIMETABLE,HIDE_TIMETABLE,SET_AS_STAFF,SET_AS_STUDENT,LOGOUT,SET_PREVIEW_IMAGE,
REMOVE_PREVIEW_IMAGE,SET_PIN_FIELD,SET_ROOM_FIELD,
CONFIG_AUTH_SUCCESS,CONFIG_AUTH_FAILED,CONFIG_AUTH_PENDING} from './constants.js'

import {sort} from '../utils/utils.js'
import {modifyTimetable} from '../utils/modifyTimetable.js'

const initialAppState = {


  student:true,
  staff:false,
  displayTimetable:false



}

const initialConfigState = {

  roomField: '',
  pinField: ''

}

const initialsocketIOState = {
  socket:{},
  timetable:[],
  timetablePending:false,
  advertsPending:false,
  timetableError:'',
  advertsError:'',
  adverts:[],
  rooms: []
}

const initialInputFieldState = {


   emailField:'',
   passwordField:'',
   image:{},
   emailError:false,
   previewImage:''

}

const initialloginAPI ={

 token:'',
 loginPending:false,
 errorMessage:''

}

const initialuploadAPIState = {


  adverts:[],
  uploadPending: false,
  errorMessage:'',
  uploadFailed:false,
  uploadSuccess:false




}

export const app = (state=initialAppState,action={})=>{


switch(action.type){

  case DISPLAY_TIMETABLE:

   return {...state,displayTimetable:true}

   case HIDE_TIMETABLE:

   return {...state,displayTimetable:false}

   case SET_AS_STAFF:

   return {...state,student:false,staff:true}

   case SET_AS_STUDENT:

   return {...state,student:true,staff:false}

   default:return state



}

}

export const socketIO= (state=initialsocketIOState,action={}) =>{


   switch(action.type){

  case SET_SOCKET:

  return {...state,socket:action.payload}

case RECIEVE_TIMETABLE_SUCCESS:


   if(action.payload.length<1){
    return {...state,timetable:[],timetablePending:false}
   }

let modifiedTimetable =   action.payload.map((timetable)=>{




return  ({...timetable,status:{
past: false,
 now:false,
 next:false,
 previous:false

}})

})

//sort
let sortedTimetable = sort(modifiedTimetable)


  let date = new Date()


   //if(date.getHours() > sortedTimetable[0].startTime.substring(0,2)){

     //console.log("time",date.getHours())
     console.log('time2',sortedTimetable[0].startTime.substring(0,2))

       sortedTimetable[0].status.next = true
 //}





console.log("sorted",sortedTimetable)


return {...state,timetable:sortedTimetable,timetablePending:false}

case RECIEVE_TIMETABLE_FAILED:

return {...state,advertsError:action.payload}






case RECIEVE_TIMETABLE_PENDING:

return {...state,pending:true}


case RECIEVE_ADVERTS_PENDING:

return {...state,advertsPending:true}

case RECIEVE_ADVERTS_SUCCESS:




return {...state,adverts:action.payload}


case "ROOMS":

   return {...state,rooms:action.payload}


case RECIEVE_ADVERTS_FAILED:



return {...state,advertsError:action.payload}


case "SCHEDULE_JOB_PENDING":

return {...state}

case "SET_TO_ACTIVE":

let i= 0;

let timetable = state.timetable.map((timetable,index)=>{


     if(timetable._id==action.payload._id){

    i = index

     return {...timetable,status:{past:false,now:true,next:false,previous:false}}

          }
            return timetable


          })
      timetable[i].status = {past:false,now:true,next:false,previous:false}

      if(i ==timetable.length-1){



          timetable[i-1].status = {past:true,now:false,next:false,previous:false}


      }
      else if(i-1 === -1){

         timetable[i+1].status = {past:false,now:false,next:false,previous:false}

      }
      else {

          timetable[i-1].status = {past:true,now:false,next:false,previous:false}

          timetable[i+1].status = {past:false,now:false,next:false,previous:false}
         }

    console.log(timetable)

    return {...state,timetable:timetable}

    case "SET_TO_NEXT":

    let index = undefined;

    timetable = state.timetable.map((i,timetable)=>{


     if(timetable._id==action.payload._id){


     //return {...timetable,status:{active:false,innactive:false,next:false}}
     index = i+1

}
return timetable

})

timetable[index].status.next = true;

return {...state,timetable:timetable}

case "SET_ALL_INNACTIVE":

  timetable = state.timetable.map((timetable)=>{

 return {...timetable,status:{active:false,innactive:true}}


 })

 return {...state,timetable:timetable}

default: return state

   }


}



export const inputFields = (state=initialInputFieldState,action={}) =>{

  switch(action.type){

  case SET_EMAIL_FIELD:


  return {...state,emailField:action.payload,emailError:false}


  case SET_PASSWORD_FIELD:

return {...state,passwordField:action.payload}

case SET_IMAGE_FIELD:



 return {...state,image:action.payload}

 case SET_PREVIEW_IMAGE:


 return {...state,previewImage:action.payload}

 case REMOVE_PREVIEW_IMAGE:

 return {...state,previewImage:''}

case EMAIL_FIELD_ERROR:

return {...state,emailError:true}

case SET_ROOM_FIELD:

return {...state,roomField:action.payload}

case SET_PIN_FIELD:

return {...state,pinField:action.payload}

    default: return state
  }


}

export const loginAPI = (state=initialloginAPI,action={})=>{


  switch(action.type){

   case LOGIN_PENDING:

   return {...state,loginPending:true}

   case LOGIN_SUCCESS:

   return {...state,loginPending:false,token:action.payload}

   case LOGIN_FAILED:

   return {...state,loginPending:false,errorMessage:action.payload.toString()}

   case LOGOUT:

     localStorage.removeItem('token');
   return {...state,token:''}


default: return state

  }

}

export const uploadAPI = (state=initialuploadAPIState,action={})=>{

  switch(action.type){

   case UPLOAD_PENDING:

   return {...state,uploadPending:true,uploadSuccess:false,uploadFailed:false}

   case UPLOAD_SUCCESS:

   return {...state,uploadPending:false,uploadSuccess:true}

   case UPLOAD_FAILED:

   return {...state,uploadPending:false,errorMessage:action.payload.toString(),uploadFailed:true}


default: return state

  }

}

export const configAuth = (state={configToken:''},action = {})=>{

  switch(action.type){


case  CONFIG_AUTH_PENDING:

  return {...state}

case CONFIG_AUTH_SUCCESS:

return {...state,configToken:action.payload}


case CONFIG_AUTH_FAILED:

return {...state}


default: return {...state}


  }




}
