import React,{Component} from 'react';
import  '../style/Magnific.css';
import image from "../image/wide1.jpg";
import Slider from "./Slider";


export default class Magnific extends Component{
    render() {
        return (
            <div className="magnific"  >

                <div className="container box-magnific text-right">

                        <span className="glyphicon glyphicon-remove close-btn"> </span>


                    <div className="row " >

                        <div className="col-lg-8 col-md-8">
                            <Slider/>
                            <img src={image} alt="Work" className="img"/>
                            <img src={image} alt="Work" className="img"/>
                            <img src={image} alt="Work" className="img"/>
                            <img src={image} alt="Work" className="img"/>
                            <img src={image} alt="Work" className="img"/>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="detail">
                                <p>در تاریخ امروز</p>
                                <p>در تاریخ امروز</p>
                                <p>در  امروز</p>
                            </div>
                             داستان یییییسرییییییییییییییییییییییییی
                            یییییییییییییییییییییییییییییییییی
                            ییییییییییییییییییییییییی
                            یییییییییییییییییییییییی
                            ییییییییییییییییییییییییییی
                        </div>
                    </div>

                </div>

            </div>
        );
    }

}