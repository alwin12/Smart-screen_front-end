import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import {link} from 'react-router-dom'

import requireAuth from '../../utils/requireAuth'

import {setImageField,uploadAdvert,setAdverts} from '../../redux/actions.js'
import './Upload.css'



const mapStateToProps = (state) =>{

return {

   adverts:state.socketIO.adverts
}

}

const mapDispatchToProps = (dispatch)=>{


 return {

   setImageField: (e)=> dispatch(setImageField(e.target.files[0])),
   uploadAdvert :()=>dispatch(uploadAdvert()),
     setAdverts: () => dispatch(setAdverts()),




 }




}

class Adverts extends Component {


state = {
  uploading:false,
  image: {},
  imagesArray: []

}
componentDidMount(){



axios.post('http://localhost:3002/staff/images',{
  token: sessionStorage.getItem('token')
}).then(images=>this.setState({imagesArray:images.data.resources}))

}
onChange = (e)=>{
  const file  = e.target.files[0]

  this.setState({image:file})


}
componentDidMount(){


  //this.props.setAdverts();
}
onClick = () =>{
//   console.log('onclick')
//   const formData = new FormData();
//   formData.append('image',this.state.image)
//   formData.append('token',sessionStorage.getItem('token'))
//   const config = {
//     headers: {
//       'content-type': 'multipart/form-data',
//       'x-auth': sessionStorage.getItem('token')
//     }
//   }
//   axios.post('http://localhost:3002/staff/upload',formData,config).then((images)=>{
//
//
//   console.log(images.data.resources)
//   this.setState({imagesArray:images.data.resources})
//
// }).catch (e=>{
//   console.log('error',e)
// })







}

  render(){

   const images = this.props.adverts.map((image)=>{return (<img src ={image.secure_url} height='300' width ='500'/> )})
    return(

      <div>

      <div  className  = 'button'>

  <label htmlFor ='single'>

    <FontAwesomeIcon icon = {faImage} color='black' size='5x' />
    </label>
   <input type ='file' id ='single' onChange = {this.props.setImageField}/>
  <FontAwesomeIcon icon = {faUpload} onClick = {()=>{


      this.props.uploadAdvert();


  }





} color='black' size='2x' />
    </div>

 <div>{images}</div>

      </div>

    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(requireAuth(Adverts))
