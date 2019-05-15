
import {* as types} from './constants.js'


export const socketAuth = () =>(dispatch,getState)=>{

  dispatch({type:types.SOCKET_AUTH_PENDING})


 getState().socketIO.socket.on('adverts',(data)=>{

       console.log('data', data.adverts.resources)

  //  dispatch({type:types.SOCKET_AUTH_SUCCESS,payload:data.adverts.resources})



 },(err)=>{

if(err){

  dispatch({type:types.RECIEVE_ADVERTS_FAILED,payload:err})

}


 })


}
