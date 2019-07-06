import React,{Component} from 'react';
import  '../style/body.css';
import Gallery from "./gallery";
import Config from "./config";

export default class Body extends Component{

    render() {
        const {posts,open} = this.props;
        return (
            <div>
            <Config/>
            <Gallery open={open} posts={posts} />
            </div>
        );
    }

}