import React,{Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'
import {logout} from '../../redux/actions.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const mapStateToProps =(state)=> {

  return {

    token: state.loginAPI.token
  }

}
const mapDispatchToProps =(dispatch)=>{



  return {

    logout: ()=>dispatch(logout())
  }
}

class HeaderStaff extends Component{



  render(){

  const { classes } = this.props;
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            Staff Portal
          </Typography>




          <Button color="inherit">time table</Button>
          <Button color="inherit">adverts</Button>

          { this.props.token && this.props.token.length>1 && <Button color="inherit" onClick = {()=>{

                this.props.logout();
                this.props.history.push('/')

          }}>Log out</Button>}

            <Button color="inherit" >student</Button>

        </Toolbar>

      </AppBar>
    </div>
  );

}
}



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withStyles(styles)(HeaderStaff)))
