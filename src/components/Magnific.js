import React,{Component} from 'react';

//import {Carousel} from "react-responsive-carousel";
import axios from "axios";
import imageg from "../assets/loding.gif";
import {Carousel} from "react-responsive-carousel";

export default class Magnific extends Component{
    constructor($props)
    {
        super($props);
        this.state={post:0}
    }
    componentDidMount() {
            axios.get("http://api.thut.ir/posts/"+this.props.post)
                .then(response=>{
                    this.setState({post:response.data});

                })
                .catch(error=>{
                    console.log(error);
                })
    }

    render()
    {
        const  {post}=this.state;
        return(
            <div className="magnific"  >

                <div className="container box-magnific text-right" >

                    <span className="glyphicon glyphicon-remove close-btn" onClick={this.props.close} />
                    {   post===0?
                        <img className="mag-load" src={imageg}/>
                        :
                        < div className="row  rouw"  >

                        <div className="col-lg-8 col-md-8">

                            <Carousel autoPlay={true}
                                      showStatus={false}
                                      showIndicators={false}
                                      showThumbs={false}
                                      infiniteLoop={true}
                                      emulateTouch={true}>
                                {post.meta.filter(obj => obj.key === "extra-photo"||obj.key === "main-slider-photo").map((obj, index) => (
                                    <div key={index}>
                                        <img
                                            src={'http://thut.ir/' + (obj.link.image)}
                                            className="mainCarousel"/>
                                    </div>
                                ))}
                                <div >
                                    <img
                                        src={'http://thut.ir/' + (post.image)}
                                        className="mainCarousel"/>
                                </div>

                            </Carousel>


                        </div>
                        <div className="col-lg-4 col-md-4">
                        <h2>{post.title}</h2>
                        <div className="detail">
                        <p>در تاریخ امروز</p>
                        <p>در تاریخ امروز</p>
                        <p>در  امروز</p>
                        </div>
                        {post.content}
                        </div>
                        </div>
                    }

                </div>

            </div>);
    }

}