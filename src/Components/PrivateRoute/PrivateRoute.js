import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Header from '../Header/Header.js'
import {authentication} from '../../utils/utils'

//authentication.isAuthenticated = true;
 const PrivateRoute = ({render: Component,student, ...rest})=>{


 return (<Route {...rest} render = {(props)=>{

  if(authentication.isAuthenticated === true )

  return (

    <div>

  <Component {...props}/>
  </div>

)

  else {

return <Redirect to ='/staff/signin'/>

  }

}} />
)
}

export default PrivateRoute
