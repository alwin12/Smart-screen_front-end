import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClockComponent from '../ClockComponent/ClockComponent'
import {setDisplayTimetable,hideTimetable} from '../../redux/actions.js'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

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

const mapStateToProps = (state)=>{

  return {
    displayTimetable: state.app.displayTimetable
  }
}
const mapDispatchToProps = (dispatch)=>{

  return {

setDisplayTimetable:()=>dispatch(setDisplayTimetable())

  }
}

class HeaderStudent extends Component{



  render(){

    const {pathname} = this.props.location;
console.log( pathname==='/student/adverts')

  const { classes } = this.props;
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" className={classes.grow}>
          <div className = 'logo'><img src='https://federation.edu.au/__data/assets/image/0004/344533/FedUni_logo_reverse.png '/></div>


          </Typography>

         <ClockComponent/>


        {pathname==='/student/adverts' &&

        <Button onClick={()=>{


        this.props.setDisplayTimetable();

    this.props.history.push('/student/timetable')


        }}color="inherit">View timetable</Button>

      }


        </Toolbar>



      </AppBar>
    </div>
  );

}
}



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withStyles(styles)(HeaderStudent)))
