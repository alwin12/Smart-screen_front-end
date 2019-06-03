import styled from 'styled-components'



export const ParentDiv = styled.div`

background-repeat:no-repeat;
background-size:100% 100%;
  height:100vh;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 130px 500px;
  grid-template-areas: "topSection ."
                        "now next";




`

export const TopSection = styled.div`



  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:20px;

  grid-area:topSection;






`
export const Now = styled.div`

box-shadow: 6px 6px 18px 5px rgba(0,0,0,0.61);


grid-area:now;
margin:0px;
  margin-top:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

export const Next = styled.div`

border-left:5px solid #1599db;

 grid-area:next;
 margin-right:70px;
  margin-top:20px;

 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center;
box-shadow: 6px 6px 18px 5px rgba(0,0,0,0.61);
`

export const NoTbDiv = styled.div`
grid-area: ${(props)=> props.now? "now":"next"};
margin-top:20px;
display:flex;
flex-direction:column;
 justify-content:center;
align-items:center;
box-shadow: 6px 6px 18px 5px rgba(0,0,0,0.61);

`
export const NoTbText = styled.h1`


  color:purple;



`
