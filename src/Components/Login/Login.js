import React,{Component} from 'react'
import axios from 'axios'
import * as EmailValidator from 'email-validator';
import {Redirect,Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



import {Container} from './Style.js'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import {setEmailField,setPasswordField,login} from '../../redux/actions.js'

const styles = theme => ({
  margin: {
    margin: '40px',
  },
});

const mapStateToProps = (state)=>{

   return {


emailError:state.inputFields.emailError

   }



}

const mapDispatchToProps = (dispatch)=>{


     return {

      setEmailField: (e)=> dispatch(setEmailField(e.target.value)),
      setPasswordField:(e)=> dispatch(setPasswordField(e.target.value)),
      login: (callback)=> dispatch(login(callback)),




     }


}

class Login extends Component {


state = {

  showPassword:false
}


  handleClickShowPassword = () => {
      this.setState(state => ({ showPassword: !state.showPassword }));
    };


// onSubmit = (event)=>{
//
//   let validate = this.state.validate;
//    validate.validateEmail = true;
//    validate.validatePassword= true;
//    this.setState({validate:validate})
//
//       event.preventDefault();
//      this.validator().then(()=>{
//
//
//   axios.post('http://localhost:3002/staff/register',{
//
//   email: this.state.email,
//   password:this.state.password
//
// }).then((resp)=>{
//
//
// //  sessionStorage.setItem('token', resp.data.token);
//
//   if(resp.data.staff._id){
//
//  //authorise user using authorisation object
//
//    this.props.authentication.authenticate(resp.data.token)
//
//    this.setState({isSignedIn:true});
//
//
//   }
//
//
//
// })
//
//    }).catch(status=>{
//
//
//     console.log('rejected')
//     this.setState({validate:status})
//
//
//
//
// })
//
// }
//
//  validator = () =>{
//
//    const email = this.state.email;
//    const password = this.state.password;
//
//
// return  new Promise((resolve,reject)=>{
//
//
//  let validate = this.state.validate;
//
// if(email===''){
//
//    validate.validateEmail = false
//   console.log('email wrong')
//   reject(validate);
//
// }
// if(password ===''){
//   console.log('password wrong')
//   validate.validatePassword = false;
//   reject(validate);
// }
//
// if(!EmailValidator.validate(email)){
//
//   validate.validateEmail = false;
//   reject(validate);
// }
//
// resolve();
//
//
//
// })
//
//
//
//  }


render(){


  const {classes} = this.props

return (


<Container>

         <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField onChange = {this.props.setEmailField} type='email' error = {this.props.emailError} id="input-with-icon-grid" label="email" />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
     <Grid container spacing={8} alignItems="flex-end">
       <Grid item>

       </Grid>
       <Grid item>
       <Input
                   id="adornment-password"
                   type={this.state.showPassword ? 'text' : 'password'}
                   value={this.state.password}
                  placeholder="password"
                  onChange = {this.props.setPasswordField}
                   endAdornment={
                     <InputAdornment position="end">
                       <IconButton
                         aria-label="Toggle password visibility"
                         onClick={this.handleClickShowPassword}
                       >
                         {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                       </IconButton>
                     </InputAdornment>
                   }
                 />

       </Grid>
     </Grid>

   </div>


     <Button  style={{alignSelf:'center',margin:'4px'}} onClick = {()=>{


         this.props.login(()=>{

      this.props.history.push('/staff/upload')


         });



     }}
     variant="contained" color="primary" className={classes.button}>
        Login
      </Button>



</Container>


)




}

}
//<TextField onChange = {this.props.setPasswordField} id="input-with-icon-grid" label="password" />
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(withRouter(Login)))
