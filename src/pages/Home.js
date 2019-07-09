import React,{Component} from 'react';
import Magnific from "../components/Magnific";
import Gallery from "../components/Gallery";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Config from "../components/Config";
import  '../style/Magnific.css';

export  default class Home extends Component
{
    constructor($props)
    {
        super($props);
        this.state={posts:[],post:0}
    }
    componentDidMount()
    {
        axios.get("http://api.thut.ir/posts/")
            .then(response=>{
                let  data = response.data;
                this.setState({posts:data});

            })
            .catch(error=>{
                console.log(error);
            })
    }

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
    render() {
        const {posts,post} = this.state;
        return(
           <div>
               {post === 0?<div />:
                   <Magnific close={this.closeMagnific.bind(this)} post={post}/>
               }
               {posts.length===0?<div/>:
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
               }

               <Config/>
               <Gallery open={this.openMagnific.bind(this)} posts={posts} />


           </div>
        );
    }
}