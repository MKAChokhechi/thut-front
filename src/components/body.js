import React,{Component} from 'react';
import  '../style/body.css';
import Gallery from "./gallery";
import Config from "./config";

export default class Body extends Component{
    render() {
        return (
            <div>
            <Config/>
            <Gallery />
            </div>
        );
    }

}