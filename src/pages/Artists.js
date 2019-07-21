import React,{Component} from 'react';
import Gallery from "../components/Gallery";
import DefaultPage from "../components/DefaultPage";
import axios from "axios";


export default  class Artists extends DefaultPage
{
    componentDidMount () {
        axios.get("http://api.thut.ir/posts/")
            .then(response=>{
                let  data = response.data;
                this.setState({posts:data});

            })
            .catch(error=>{
                console.log(error);
            })
    }
    render() {
        return(
           <div>

           </div>
        );
    }
}