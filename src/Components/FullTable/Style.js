

import styled from 'styled-components'


export const HeaderWithIcon = styled.div`

display:flex;
flex-direction:row;
color:black;
height:60px;
margin:0;
padding:10px;
font-size:28px;
text-align:center;

`




export const Status = styled.div`


  color: ${props=>props.active? '#00FF00':"#edd9c0"};
 font-family:fantazy;
 font-size:23px;
font-family: 'Fredoka One', cursive;

`

export const Coursename = styled.div`

color: ${props=>props.active? '#00FF00':"#B22222"};
font-weight:200;
font-size:30px;
height:40px;
font-family: 'Fredoka One', cursive;



`


export const End = styled.div`

color: ${props=>props.active? '#00FF00':"#B22222"};
font-family:iceland;
font-size:25px;
font-weight:400;
font-family: 'Fredoka One', cursive;
text-align:center;


`
export const Start = styled(End)`

color: ${props=>props.active? '#00FF00':"#B22222"};
border-radius:0px;
height:50px;
font-family: 'Fredoka One', cursive;

`
export const Lecturer = styled.div`


  color: ${props=>props.active? '#00FF00':"#B22222"};
  font-size:18px;
  font-family:italics;
  text-align:center;

font-family: 'Fredoka One', cursive;




`



//
//
//  @media screen and (min-width:40em){  /*large screen sizes*/
// .grid {
//
//     display: grid;
//     grid-template-rows: 100px 100px;
//     grid-template-columns: 100px 100px 100px 100px 100px 100px;
//
//     grid-gap:10px;
//
//
//
// }
//
//
//
//  #status {
//   color:red
// }
//
//
// }
//
//
//
//
// .header{
//   color: white;
//   background-color: GREEN;
//   font-size:20px;
// /*rgb(1, 58, 150)*/
// }
//
// .rows{
//   font-size: 20px;
//   font-weight: 200
// }
// .active {color:green}
// .innactive {color: red}
