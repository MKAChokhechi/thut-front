import React,{Component} from 'react';
import Dropdown from "./Dropdown";
export  default class Navbar extends Component
{
    render() {
        const {buttons} = this.props;
        return(
            <nav>

                <ul id="mainmenu">
                    {buttons.map((data,index)=>(<Dropdown button={data} key={index}/>))}
                </ul>
            </nav>
        );
    }
}