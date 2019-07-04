import styled from 'styled-components'




export const ParentDiv = styled.div`

background-repeat:no-repeat;
background-size:100% 100%;
  height:100vh;

  display: grid;
  grid-template-columns: 50px 1fr 190px;
  grid-template-rows: 200px 1fr 170px;
  grid-template-areas: ". topSection ." ". contentSection .";



`

export const TopSection = styled.div`


grid-area:topSection;

display:flex;



`
export const ContentDiv = styled.div`

display: grid;
grid-template-columns: ;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-template-areas: "past" "now" "next" "later";

grid-area:contentSection;




`

 export const Flex =styled.div`


  display:flex;
  justify-content:space-between;
  border-bottom: 2px solid #567EBC
  align-items:center;






 `
export const Notb = styled.div`

  display:flex;
align-items:center;
justify-content:center;
border-bottom: 2px solid #567EBC




`
