import React,{Component} from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUpload,faFileAlt } from '@fortawesome/free-solid-svg-icons'
import excelToJson from 'convert-excel-to-json'
import { Button, Header, Icon, Segment, Label,LabelGroup} from 'semantic-ui-react'
import ProgressBar from "../ProgressBar/ProgressBar"
import {UploadDiv,Prog,ParentDiv} from './style.js'
import staffBack from '../staffBack.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button as Btn} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {history,Link} from 'react-router-dom'
import './style.css'
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));



class AddTimetable extends Component{

    state = {
      file: '',
      uploading:false,
      uploadSuccess:false,
      uploadingPerc:0,
      parsingPerc:0,
      dbPerc:0

    }


 updatePerc = ()=>{

   if(this.state.uploading){
   setInterval(()=>{
      if(this.state.uploadingPerc<100){

         this.setState({uploadingPerc:this.state.uploadingPerc+=10})
      }

      if(this.state.uploadingPerc===100){

        if(this.state.parsingPerc<100){

           this.setState({parsingPerc:this.state.parsingPerc+=5})
        }

      }

      if(this.state.uploadingPerc===100 && this.state.parsingPerc===100){

        if(this.state.dbPerc<100){

           this.setState({dbPerc:this.state.dbPerc+=5})
        }


      }




   },2000)



 }




}
handleUpload = (e)=>{
  console.log('dd')

   this.setState({file:e.target.files[0]})

}

   submitFile = ()=>{


  //
  //    const result =excelToJson({
  //      source: fs.readFileSync(e.target.files[0])
  //    })
  //
  //
  //  console.log('results',result);
  //
  //
  this.setState({uploading:true})
  const formData = new FormData()
  formData.append('timetableSheet',this.state.file)
  const config = {

    headers: {
      'content-type': 'multipart/form-data',
    }
  }
  axios.post('http://localhost:3001/staff/timetable/upload',formData,config).then((res)=>{

    //console.log("res",res.data.result["2019Activities&Locations 4-4-19"]);

      if(res.status ===200){

        console.log('success')
        this.setState({uploadSuccess:true,uploadingPerc:100,parsingPerc:100,dbPerc:100})
      }




  })

  }


   render(){

      this.updatePerc();

      //const classes = useStyles();

  const {uploadingPerc,parsingPerc,dbPerc} = this.state

     return(
  <ParentDiv style={{backgroundImage: `url(${staffBack})`}}>
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
    <UploadDiv style={{}}>
       <Segment placeholder>
           <Header icon style={{background:'none'}}>

            Click on the image below to select file
           </Header>
           <label htmlFor='single'>
          <FontAwesomeIcon icon = {faFileAlt} color='black' size='5x' className='select' />

           </label>
           { this.state.file.name &&
           <Label as='a' basic pointing>
         {this.state.file.name && this.state.file.name }
         </Label>
       }
           <input  type="file"
           id ='single'
           accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
           onChange={(e)=>{

            this.handleUpload(e)


          }}/>
          <Button primary onClick = {this.submitFile} >Upload</Button>

         </Segment>


  {this.state.uploading && ( <Prog >
        <ProgressBar perc= {uploadingPerc} text = {'uploading'}/>
          <ProgressBar perc= {parsingPerc} text = {'parsing the file to json'} />
            <ProgressBar perc= {dbPerc} text = {'populating the database'}/>
        </Prog>)}

     {this.state.uploadSuccess &&<LabelGroup size='huge'><Label>Success! </Label></LabelGroup> }

 </UploadDiv>

 </ParentDiv>

     )


     }

  }


export default (AddTimetable)

{/*<label htmlFor ='single'>
<FontAwesomeIcon icon = {faImage} color='black' size='5x' className='select' />
</label>

<input  type="file"
id ='single'
accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
onChange={(e)=>{

 this.handleUpload(e)




}}

/>
*/}
