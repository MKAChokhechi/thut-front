import React,{Component} from 'react';
import  '../style/Magnific.css';
import Slider from "./Slider";
import axios from "axios";
import imageg from "../assets/loading02.gif";

export default class Magnific extends Component{
    constructor($props)
    {
        super($props);
        this.state={post:{}}
    }
     componentWillReceiveProps(nextProps, nextContext)
      {
        if(nextProps.post === 0)
            return
        axios.get("http://api.thut.ir/posts/"+nextProps.post+"/")
            .then(response=>{
                let  data = response.data;
                console.log(data);
                this.setState({post:data});

            })
            .catch(error=>{
                console.log(error);
            })
    }
     isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    getMagnfic()
    {
        document.getElementsByTagName("html")[0].style="margin-right: 15px; overflow: hidden";
        const  {post}=this.state;
        return(
        <div className="magnific"  >

            <div className="container box-magnific text-right" >

                <span className="glyphicon glyphicon-remove close-btn" onClick={()=>{this.props.close();this.setState({post:{}})}} />
                <img className="mag-load" src={imageg} style={!this.isEmpty(post)?{display:'none'}:{}} />

                <div className="row  rouw" style={this.isEmpty(post)?{display:'none'}:{}} >

                    <div className="col-lg-8 col-md-8">
                        <Slider images={"http://thut.ir/"+post.image}/>

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

            </div>

        </div>);

    }

    render()
    {
        if(this.props.post===0)
            return(<div></div>);
        return (
            this.getMagnfic()
         );
    }

}