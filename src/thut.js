import Header from './components/Header';
import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import  Body from "./components/body";
import axios from "axios";
import Magnific from "./components/Magnific";
export  default class Thut extends Component
{
    constructor($props)
    {
        super($props);
        this.state = {header:[],posts:[],post:0}
    }
    componentDidMount()
    {
        axios.get("http://api.thut.ir/main/")
            .then(response=>{
                let  data = response.data;
                this.setState({header:data.term,posts:data.posts});

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
        const {posts,post,header} = this.state;
        return(
            <div id="wrapper">
            <Magnific close={this.closeMagnific.bind(this)} post={post} />
            <Header buttons={header.filter(el=>(el.type==="navButton"))}/>
            <Slider />
            <Body open={this.openMagnific.bind(this)} posts={posts}/>
            <Footer/>
            </div>
        );
    }
}