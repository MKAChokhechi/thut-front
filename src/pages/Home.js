import React,{Component} from 'react';
import Magnific from "../components/Magnific";
import Gallery from "../components/Gallery";
import Slider from "../components/Slider";
import axios from "axios";

import Config from "../components/Config";


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
               <Magnific close={this.closeMagnific.bind(this)} post={post} />
               <Slider />
               <Config/>
               <Gallery open={this.openMagnific.bind(this)} posts={posts} />


           </div>
        );
    }
}