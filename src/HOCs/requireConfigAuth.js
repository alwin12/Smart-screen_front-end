import React,{Component} from "react"
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export default ChildComponent =>{

     class ComposedComponent extends Component {

componentDidMount(){
      this.authorise();
  }


componentDidUpdate(){
  this.authorise();
}


 authorise = ()=>{

  console.log('called')
    if(this.props.configToken.length<3){

     this.props.history.push('/starter')

    }

    }


  render(){
    return (


   <ChildComponent {...this.props}/>

    )
  }








     }

const mapStateToProps =(state)=>{

  return {
    configToken: state.configAuth.configToken
  }
}


return connect(mapStateToProps,null)(withRouter(ComposedComponent))


}
