import React,{Component} from 'react';
import Dropdown from "./Dropdown";
export  default class Navbar extends Component
{
    render() {
        return(
            <nav>

                <ul id="mainmenu">
                    <Dropdown/>
                    <Dropdown/>
                    <Dropdown/>
                    <Dropdown/>
                </ul>
            </nav>
        );
    }
}