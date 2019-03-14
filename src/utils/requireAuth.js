
import React,{Component} from "react"
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'




  export default ChildComponent =>{

    const mapStateToProps = (state)=>{


  return {
      token: state.loginAPI.token
    }

    }

   class ComposedComponent extends Component{

  componentDidMount(){

    this.auth();
  }

componentDidUpdate(){

this.auth()


}

   auth = ()=> {


   if(this.props.token.length<1){

  this.props.history.push('/staff/login')

   }



 }



     render(){

     return (

    <ChildComponent  {...this.props}/>

     )



     }
   }


return connect(mapStateToProps,null)(withRouter(ComposedComponent))

  }
