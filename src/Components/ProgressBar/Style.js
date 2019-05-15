import styled from 'styled-components'

export const Progress = styled.div`

  position:relative;
  width: 500px;
  height:20px;
  border-radius:20px;
  background:#E9ECEF;






`

export const Fill = styled.div`


background:#007AFF;
height:100%;
width: ${props=> props.perc}%;
border-radius:inherit;
transition: width .2s ease-in;
text-align:center;


`
export const Text = styled.div`

  color:white;
  font-size:13px;





`
