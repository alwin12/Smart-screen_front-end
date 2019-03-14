import App from '../App.js'



export const socketConnection = ()=>{



const io = require('socket.io-client');
 let socket = io.connect('http://localhost:3002/');




return socket;

}

export const socketAuth = (socket,building,lectureHall) =>{

 let res = false;
  return new Promise((resolve,reject)=>{


 socket.on('connect',()=>{



   socket.emit('authentication',{building:building,lectureHall:lectureHall,client:'student'})

    socket.on('unauthorized',()=>{

         reject('not authorised');


    })

    socket.on('authenticated',(auth)=>{
      resolve();
    })


}

 )



})



}




export const daysTimetableListener = (socket) =>{

  return new Promise((resolve,reject)=>{

     socket.on('timetables',(timetable)=>{

       if(timetable){
         resolve(timetable)
       }else {
         reject();
       }


     })

  })

}

export const advertsListener = (socket) =>{

     return new Promise((resolve,reject)=>{

        socket.on('adverts',(adverts)=>{

   if(adverts){
     resolve(adverts);
   }else{
     reject()
   }

        })

     })
}

export const timeTableEmitter = (socket,timetable) =>{


socket.emit('addTimetable',{timetable:timetable})


}


export const socketJwt = (socket) =>{





socket.on('timetables',(timetables)=>{
  console.log(timetables)
})



}
