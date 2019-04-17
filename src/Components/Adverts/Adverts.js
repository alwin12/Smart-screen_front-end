import React,{Component} from 'react'
import Swiper from 'react-id-swiper';
import {connect} from 'react-redux'
import './Adverts.css'



const mapStateToProps = (state)=>{


 return {
  adverts:state.socketIO.adverts
}

}

class Adverts extends Component {

  componentDidMount(){

this.props.enableDisplayTableButton();

       }

  render() {

const adverts = this.props.adverts.map((advert)=>{

  return <div><img alt='img' src = {advert.secure_url} height='700' width='1400'/></div>
})
const params = {

          pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    loop:false,
    effect:'fade',
    autoplay: {
      delay:2500,
      disableOnInteraction: false,
    },
       centeredSlides:true

      }



  return(


   <div className ='swiper'>


      <Swiper {...params} shouldSwiperUpdate>

      {adverts}

     </Swiper>

  </div>

  )
}

}


export default connect(mapStateToProps,null)(Adverts)
