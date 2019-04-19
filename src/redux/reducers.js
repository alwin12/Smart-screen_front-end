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
  adverts:[]
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
  errorMessage:''




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




let modifiedTimetable =   action.payload.map((timetable)=>{




return  ({...timetable,status:{
 active:false,
 previous:false,
 next:false}})

})

//sort
let sortedTimetable = sort(modifiedTimetable)
//register scheduler





return {...state,timetable:sortedTimetable,timetablePending:false}

case RECIEVE_TIMETABLE_FAILED:

return {...state,advertsError:action.payload}






case RECIEVE_TIMETABLE_PENDING:

return {...state,pending:true}


case RECIEVE_ADVERTS_PENDING:

return {...state,advertsPending:true}

case RECIEVE_ADVERTS_SUCCESS:





return {...state,adverts:action.payload}

case RECIEVE_ADVERTS_FAILED:


return {...state,advertsError:action.payload}


case "SCHEDULE_JOB_PENDING":

return {...state}

case "SET_TO_ACTIVE":


let timetable = state.timetable.map((timetable)=>{


     if(timetable._id==action.payload._id){
     return {...timetable,status:{active:true,innactive:false}}

}
return timetable


})

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

console.log('prviewq image',action.payload)
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

   return {...state,uploadPending:true}

   case UPLOAD_SUCCESS:

   return {...state,uploadPending:false}

   case UPLOAD_FAILED:

   return {...state,uploadPending:false,errorMessage:action.payload.toString()}


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
