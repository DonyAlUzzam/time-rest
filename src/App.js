import React, {Component} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

export default class App extends Component{
  state= {
    images: []
  }

  async componentDidMount(){
    await axios.get("https://time-to-rest.herokuapp.com/oss")
    .then(response => this.setState({
      images: response.data.data
    }))

    console.log(this.state.images)
  }

  render(){

    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderData = this.state.images.map(image=>{
      return(
          <div><img src={image.url} alt="our team"/></div>
         
      )
    })


    return(
      <div className="container">
        <Slider {...settings}>
          {renderData}
        </Slider>
      </div>
    )
  }
}
