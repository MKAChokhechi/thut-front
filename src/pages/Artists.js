import React from 'react';
import axios from "axios";
import Gallery from "../components/Gallery";
import DefaultPage from "../components/DefaultPage";


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
        const {posts} = this.state;
        return(
           <div>
                <Gallery posts={posts} open={this.openMagnific}/>
           </div>
        );
    }
}