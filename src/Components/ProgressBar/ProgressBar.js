import React from 'react'
import {Progress,Fill,Text} from './Style.js'




const ProgressBar = ({perc,text})=>{


return (<Progress> <Filler perc = {perc} text = {text}/> </Progress>)



}




const Filler = ({perc,text})=>{

  return (

    <Fill perc = {perc} >

  <Text >{text}{' '}{perc}%</Text>


    </Fill>
  )
}


export default ProgressBar
