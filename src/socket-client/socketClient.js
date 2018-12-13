

export const socketConnection = ()=>{



const io = require('socket.io-client');
let socket = io.connect('http://localhost:3002/');



return socket;

}

export const eventEmiters= (socket)=>{


   socket.emit('hello',{
     text:"hello"
   })




}
