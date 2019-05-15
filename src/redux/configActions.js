import {CONFIG_AUTH_SUCCESS,CONFIG_AUTH_FAILED,CONFIG_AUTH_PENDING} from './constants.js'

import axios from 'axios'

import {SET_ROOM_FIELD,SET_PIN_FIELD} from './constants.js'


export const setRoomField = (text)=>({type:SET_ROOM_FIELD,payload:text})

export const setPinField = (text)=>({type:SET_PIN_FIELD,payload:text})

export const configAuth = (callback) => (dispatch,getState)=>{
dispatch({type:CONFIG_AUTH_PENDING})

  axios.post('http://localhost:3001/config',{

   room: getState().inputFields.roomField,
   pin:getState().inputFields.pinField


 }).then((resp)=>{
   localStorage.setItem('configToken',resp.data.token)
   dispatch({type:CONFIG_AUTH_SUCCESS,payload:resp.data.token})
    callback();
   console.log(resp)

 }).catch(e=>{
   dispatch({type:CONFIG_AUTH_FAILED})
 })
}
