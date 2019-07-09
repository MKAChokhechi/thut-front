import React,{Component} from 'react';
import VerticalList from "../components/VerticalList";
import More from "../components/More.js";


export  default class Movies extends Component
{
    render() {
        return(
            <div className="movies">
            <VerticalList/>
            <More/>
            </div>
        );
    }
}