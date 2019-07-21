import React,{Component} from 'react';
import Magnific from "../components/Magnific";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import  '../style/Magnific.css';


export  default class DefaultPage extends Component
{
    state={posts:[],post:0,active:1};


    openMagnific(id)
    {
        document.getElementsByTagName("html")[0].style="margin-right: 15px; overflow: hidden";
        this.setState({post:id});
    }
    closeMagnific()
    {
        this.setState({post:0});
        document.getElementsByTagName("html")[0].style="";
    }
    getActive(index)
    {
        this.setState({active:index})
    }
    render() {
        const {posts,post,active} = this.state;
        return(
            [
                post === 0 ? "" :
                    <Magnific close={this.closeMagnific.bind(this)} post={post}/>

                ,

                    posts.length===0?"":
                        <Carousel autoPlay={true}
                                  showStatus={false}
                                  showIndicators={false}
                                  showThumbs={false}
                                  infiniteLoop={true}
                                  emulateTouch={true}>
                            {posts.filter(obj => obj.slider === true).map((obj, index) => (
                                <div key={index}>
                                    <img
                                        src={'http://thut.ir/' + (obj.meta.find(ob => ob.key === "main-slider-photo").link.image)}
                                        className="mainCarousel"/>
                                    <div className="description">اسلاید اول</div>
                                </div>
                            ))}

                        </Carousel>

            ]


        );
    }
}