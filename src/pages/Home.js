import React,{Component} from 'react';
import Magnific from "../components/Magnific";
 //import Gallery from "../components/Gallery";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Config from "../components/Config";
 import Column from "../components/Column";
import  '../style/Magnific.css';
import TAb from "../components/Tab";
import List from "../components/List";

export  default class Home extends Component
{
    constructor($props)
    {
        super($props);
        this.state={posts:[],post:0,active:1}
    }
    componentDidMount()
    {
        axios.get("http://api.thut.ir/posts/")
            .then(response=>{
                let  data = response.data;
                console.log(data);
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
    getActive(index)
    {
     this.setState({active:index})
    }
    render() {
        const {posts,post,active} = this.state;
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

               <TAb Select={this.getActive.bind(this)}/>
               <Column index={1}
                       active={active} getActive={this.getActive.bind(this)}
                       open={this.openMagnific.bind(this)}
                       posts={posts.filter(obj=>obj.type===1)}
               />
               <Column index={2}
                       active={active} getActive={this.getActive.bind(this)}
                       open={this.openMagnific.bind(this)}
                       posts={posts.filter(obj=>obj.type===2)}
               />
               <Column index={3}
                       active={active} getActive={this.getActive.bind(this)}
                       open={this.openMagnific.bind(this)}
                       posts={posts.filter(obj=>obj.type===3)}
               />
               <List open={this.openMagnific.bind(this)}
               posts={posts.filter(obj=>obj.type===active)}/>
               {/*<Config/>*/}
               {/*<Gallery open={this.openMagnific.bind(this)} posts={posts} />*/}

           </div>
        );
    }
}