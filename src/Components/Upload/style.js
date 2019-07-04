import styled from 'styled-components'



export const ParentDiv=styled.div`





display:grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 600px 100px 1fr 50px;
  grid-template-areas: ". nav ." ". upload ." ". progress ." ". images ." ". . .";
    background-color:white
`

export const UploadDiv = styled.div`


display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 80% 1fr;
  grid-template-areas: ". . ." ". segment ." ". . .";
    grid-area:upload;




`



export const Icons = styled.div`

   grid-area:button;
    display:flex;
    flex-direction:column;
  justify-content:center;
     align-items:center;



`


export const Images = styled.div`


 margin:10px;
grid-area:images;
justify-self:center;
align-self: center;

display:flex;
flex-direction:column;
height:400px;
width:800px;
flex-gap:10px;
justify-content:space-between;
align-content:space-between;

/*::-webkit-scrollbar-track{

  background-color:black;
}
::-webkit-scrollbar
{
	width: 7px;
	background-color: red;
  border-radius:20px;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: blue;
  border-radius:30px;
}*/


`



export const Img= styled.img`

 src: ${props=> props.src};
 opacity:1;


 height:auto;
 transition: .5s ease;
 backface-visibility:hidden;





`



export const Middle = styled.div`


transition: .5s ease;
opacity:0;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);

display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;


`

export const Middle2 = styled(Middle)`

top:10%;
left:90%;


`

export const ImageWrapper = styled.div`


position: relative;

:hover ${Middle}{
  opacity:1;
}

:hover ${Img} {
opacity:0.3;


}

height:'300px'


`
export const Button = styled.button`


padding:10px;
background-color:orange;
border-radius:10px;
color:white;



`
