import React,{Component} from 'react'
import HeaderStaff from '../HeaderStaff/HeaderStaff'
import HeaderStudent from '../HeaderStudent/HeaderStudent';
import {Link,withRouter} from 'react-router-dom'
import './Header.css'


class Header extends Component{

  state = {
    redirectToReferrer: false

   }

render(){

  console.log(this.props.location.pathname)
 let str = this.props.location.pathname
 let sub = str.substr(0,7)

     if(sub=='/staff/')
     return (<HeaderStaff/>)
     else return (<HeaderStudent/>)


}

}

export default withRouter(Header)
