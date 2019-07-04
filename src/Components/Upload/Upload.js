import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button as Btn} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {history,Link} from 'react-router-dom'

import { Button as Btn2, Header, Icon, Segment, Label,LabelGroup,Container} from 'semantic-ui-react'
import requireAuth from '../../utils/requireAuth'

import {setImageField,uploadAdvert,setAdverts} from '../../redux/actions.js'
import './Upload.css'

import {UploadDiv,ParentDiv,Icons,Images,Img,ImageWrapper,Middle,Button,Middle2} from './style.js'
import ProgressBar from "../ProgressBar/ProgressBar"



const mapStateToProps = (state) =>{

return {

   adverts:state.socketIO.adverts,
   image:state.inputFields.image,
   previewImage:state.inputFields.previewImage,
   uploadFailed: state.uploadAPI.uploadFailed,
   uploadSuccess:state.uploadAPI.uploadSuccess,
   uploadPending:state.uploadAPI.uploadPending
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
    uploadPerc:0,
    uplaod: false
  }



componentDidMount(){



axios.post('http://localhost:3002/staff/images',{
  token: sessionStorage.getItem('token')
}).then(images=>this.setState({
  imagesArray:images.data.resources}

))

}
onChange = (e)=>{
  const file  = e.target.files[0]

  this.setState({image:file})


}
componentDidMount(){


  //this.props.setAdverts();
}


updatePerc = ()=>{




  setInterval(()=>{

       if(this.props.uploadSuccess)
   {
  this.setState({uploadPerc:0})
  return;
   }
  if(this.state.uploadPerc <90){


    this.setState({uploadPerc:this.state.uploadPerc+=5})
  }

},2000)


}

  render(){






   const images = this.props.adverts.map((image)=>{return (

     <Segment>
     <ImageWrapper>
     <Img src ={image.secure_url} height='300' width ='300'/>
     <Middle>


       <Btn2>view Image</Btn2>



     </Middle>
     <Middle2>
     <FontAwesomeIcon icon = {faTrash} color='red' size='2x' className='select'  />
     </Middle2>
     </ImageWrapper>
  </Segment>



   )})
    return(


     <ParentDiv >

     <div  style={{gridArea:"nav"}} >
   <AppBar >
       <Toolbar>
         <IconButton edge="start"  color="inherit" aria-label="Menu">
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" >

         </Typography>

         <Link to ="/staff/timetableUploader" className="nostyle"><Btn color="inherit"> Timetable</Btn></Link>
       <Link to ="/staff/upload" className="nostyle">  <Btn color="inherit" >Adverts</Btn></Link>
         <Link to="/staff/login" className="nostyle"><Btn color="inherit" >Logout</Btn></Link>

       </Toolbar>
     </AppBar>
     </div>

      <UploadDiv>


      <Segment style={{height:'100%',width:'100%',gridArea:'segment'}} placeholder>


  <Icons>

      <label htmlFor ='single'>
    <FontAwesomeIcon icon = {faImage} color='black' size='5x' className='select' />
    </label>

   <input type ='file' id ='single' onChange = {(e)=>{this.props.setImageField(e)}}/>

  <Btn primary style={{background:'#3F51B5'}} onClick = {()=>{
     this.updatePerc()

this.props.uploadAdvert();
}} >Upload</Btn>
</Icons >



  {this.props.previewImage?(

    <img style={{gridArea:"preview",margin:"20px", }}
    src={this.props.previewImage} height='300px' width='600px' />


  ):<div></div>




  }

</Segment>

  </UploadDiv>




  <div style={{gridArea:'progress'  ,textAlign:'center',margin: '0 auto'}}>


  {
  this.props.uploadPending &&(  <ProgressBar perc= {this.state.uploadPerc} text = {'uploading...'}/>)
  }


  {
  this.props.uploadSuccess &&(  <LabelGroup size='huge'><Label>Success! </Label></LabelGroup>)
  }


  </div>




 <Images >{images}</Images>


 </ParentDiv>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(requireAuth(Adverts))
