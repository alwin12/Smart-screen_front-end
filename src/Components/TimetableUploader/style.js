

import styled from 'styled-components'



export const ParentDiv = styled.div`

background-repeat:no-repeat;
background-size:100% 100%;

display: grid;
 grid-template-columns: 100px 1fr 100px;
 grid-template-rows: 150px 1fr 1fr 50px;
 grid-template-areas: ". nav ." ". upload ." ". progress ." ". . .";








`


export const UploadDiv = styled.div`


      display:flex;
      flex-direction:column;
      margin:30px;
      text-align:center;
      align-items:center;
      grid-area:upload;


`





export const Prog = styled.div`


display:flex;
flex-direction:column;

justify-content:space-around;

height: 300px;
grid-area:progress;



`






















// .form{
//
//   display:grid;
//   grid-template-columns: 200px 300px;
//   grid-row-gap: 20px;
//   margin:20px;
//   background: #f9f9f9;
//   border: 1px solid #c1c1c1;
//   width:600px;
//   padding:1em;
//   border-radius: 5px;
// }
//
// label{
//   grid-column: 1/2
// }
// input,button {
//
//   grid-column: 2/3;
//   border-radius:2px;
// }
//
// input {
//   border: 2px solid #f9f9
// }
//
//
//
// input:focus{
//   outline: 3px solid #39e600;
// }
// button{
//   color:white;
//   background-color:black
// }
