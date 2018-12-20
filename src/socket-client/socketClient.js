import App from '../App.js'

export const socketConnection = ()=>{



const io = require('socket.io-client');
let socket = io.connect('http://localhost:3002/');




return socket;

}

export const socketAuth = (socket) =>{

 socket.on('connect',()=>{

   socket.emit('authentication',{username:'302',password:'302302'})

  // socket.on('authenticated',()=>{
  //  })

 })

}


export const eventEmiters= (socket)=>{

  socket.emit('lecture',{

      course: 'wwe technology',
      startTime:'14:00',
      endTime:'16:00'
  })




}

export const eventListeners = (socket) =>{

  return new Promise((resolve,reject)=>{

     socket.on('timetable',(timetable)=>{

       if(timetable){
         resolve(timetable)
       }else {
         reject();
       }


     })



  })




}
