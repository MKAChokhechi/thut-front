import React,{Component} from 'react';
import image from '../image/wide1.jpg';

export default class Gallery extends Component{
    render() {
        return (

            <section className="" >
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 person-photo">
                    <img src={image} alt="Work" className="img"/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 person-photo">
                    <img src={image} alt="Work" className="img"/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 person-photo">
                    <img src={image} alt="Work" className="img"/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 person-photo">
                    <img src={image} alt="Work" className="img"/>
                </div>
            </div>
            </section>
    );
    }

}