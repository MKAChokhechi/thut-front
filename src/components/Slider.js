import React,{Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image from '../image/wide1.jpg';
export  default class Slider extends Component
{
    render() {
        return(
            <Carousel >
                <div>
                    <img src={image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}