import styled from 'styled-components'


export const Container = styled.div`


display:grid;

grid-template-rows: 400px auto;

grid-template-columns: 150px 1fr 150px ;

grid-template-areas:

"icons previewImage previewImage"
". images .";

grid-row-gap:30px;

`

export const Icons = styled.div`

  grid-area:icons;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
     align-items:center;
     margin-top:10px

`


export const Images = styled.div`


 margin:10px;
grid-area:images;
justify-self:center;
align-self: center;
border:2px solid black;
display:flex;
flex-direction:row;
flex-wrap:wrap;
overflow:scroll;
height:700px;
flex-gap:10px;
justify-content:space-between;
align-content:space-between;

::-webkit-scrollbar-track{

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
}


`



export const Img = styled.img`

 src: ${props=> props.src};
 




`
