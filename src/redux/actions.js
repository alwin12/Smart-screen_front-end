import {SET_TIMETABLE,SET_ADVERTS,SET_SOCKET,
  RECIEVE_TIMETABLE_PENDING,RECIEVE_TIMETABLE_SUCCESS,RECIEVE_TIMETABLE_FAILED,MODIFY_TIMETABLE,
RECIEVE_ADVERTS_FAILED,RECIEVE_ADVERTS_PENDING,RECIEVE_ADVERTS_SUCCESS,
SET_EMAIL_FIELD,SET_PASSWORD_FIELD,LOGIN_PENDING,LOGIN_SUCCESS,LOGIN_FAILED,
UPLOAD_PENDING,UPLOAD_SUCCESS,UPLOAD_FAILED,SET_IMAGE_FIELD,EMAIL_FIELD_ERROR,VALID_EMAIL,
VIEW_TIMETABLE,DISPLAY_TIMETABLE,HIDE_TIMETABLE,SET_AS_STAFF,SET_AS_STUDENT,LOGOUT,SET_PREVIEW_IMAGE,REMOVE_PREVIEW_IMAGE} from './constants.js'

import axios from 'axios'
import * as EmailValidator from 'email-validator';

export const setSocket = (socket)=> ({type:SET_SOCKET,payload:socket})
export const setEmailField = (text)=> {

if(!EmailValidator.validate(text)){

return {type:EMAIL_FIELD_ERROR}


}
else {

  return {type:SET_EMAIL_FIELD,payload:text}
}



  return {type:SET_EMAIL_FIELD,payload:text}


}
export const setPasswordField = (text)=>({type:SET_PASSWORD_FIELD,payload:text})

export const setImageField = (image)=>(dispatch)=>{

   let reader = new FileReader();


     reader.onload = ()=>{


       dispatch({type:SET_PREVIEW_IMAGE,payload:reader.result})
     }

     reader.readAsDataURL(image)

  dispatch({type:SET_IMAGE_FIELD,payload:image})




}



export const setDisplayTimetable= ()=>({type:DISPLAY_TIMETABLE})
export const hideTimetable = ()=>({type:HIDE_TIMETABLE})

export const modifyTimetable = ()=>({type:MODIFY_TIMETABLE})

export const setAdverts = () =>(dispatch,getState)=>{

  dispatch({type:RECIEVE_ADVERTS_PENDING})


 getState().socketIO.socket.on('adverts',(data)=>{

       console.log('data', data.adverts.resources)

    dispatch({type:RECIEVE_ADVERTS_SUCCESS,payload:data.adverts.resources})



 },(err)=>{

if(err){
  dispatch({type:RECIEVE_ADVERTS_FAILED,payload:err})
}


 })


}

export const setAsStaff = ({type:SET_AS_STAFF})

export const logout =() =>({type:LOGOUT})


export const setTimetable = (callback) =>(dispatch,getState)=>{



     dispatch({type:RECIEVE_TIMETABLE_PENDING})


    getState().socketIO.socket.on('timetable',(data)=>{


       dispatch({type:RECIEVE_TIMETABLE_SUCCESS,payload:data.timetable})
          callback();


    },(err)=>{

   if(err){
     dispatch({type:RECIEVE_TIMETABLE_FAILED,payload:err})
   }


    })

}

export const login = (callback) =>(dispatch,getState)=>{

   dispatch({type:LOGIN_PENDING})

   console.log(getState().inputFields.emailField)

    axios.post('http://localhost:3002/login',{

   email: getState().inputFields.emailField,
   password:getState().inputFields.passwordField

    }).then((staff)=>{


localStorage.setItem('token',staff.data.token)
dispatch({type:LOGIN_SUCCESS,payload:staff.data.token})
dispatch({type:SET_AS_STAFF})


callback();

}).catch(e=>{

  dispatch({type:LOGIN_FAILED,payload:e})
})

}

export const uploadAdvert = () => (dispatch,getState) => {

 dispatch({type:UPLOAD_PENDING})

 const formData = new FormData();
 console.log(getState().inputFields.image)
 formData.append('image',getState().inputFields.image)
 formData.append('token',getState().loginAPI.token)
 const config = {

   headers: {
     'content-type': 'multipart/form-data',
    'x-auth': getState().loginAPI.token
   }
 }

    axios.post('http://localhost:3002/staff/upload',formData,config).then((data)=>{

  console.log('upload data',data)

    dispatch({type:UPLOAD_SUCCESS})
    dispatch({type:REMOVE_PREVIEW_IMAGE})




    }).catch(e=>{


 dispatch({type:UPLOAD_FAILED,payload:e})

    })

}
