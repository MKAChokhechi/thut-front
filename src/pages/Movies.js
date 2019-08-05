import React from 'react';
import axios from "axios";
import List from "../components/List";
import DefaultPage from "../components/DefaultPage";
import Config from "../components/Config";


export  default class Movies extends DefaultPage
{
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
    render() {
        const {posts,active} = this.state;
        return(
            [
                super.render(),
                <Config/>,
                <List open={this.openMagnific.bind(this)}
                      posts={posts.filter(obj=>obj.type===active)}/>,


            ]



        );
    }
}