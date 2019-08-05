import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../style/carousel.css";
import image from '../image/wide1.jpg';
export  default class Slider extends Component
{
    constructor($props)
    {
        super($props);
        this.state = {height:window.screen.availHeight-75};
    }
    render() {
        return(
            <Carousel autoPlay={true}
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                      infiniteLoop={true}
                      emulateTouch={true} >
                <div  >
                    <img src={image} style={{height:this.state.height}}/>
                    <div className="description">اسلاید اول</div>
                </div>
                <div>
                    <img src={image} style={{height:this.state.height}} />
                    <p className="description">اسلاید دوم</p>
                </div>
                <div>
                    <img src={image} style={{height:this.state.height}} />
                    <div className="description">اسلاید سوم</div>
                </div>
            </Carousel>
        );
    }
}