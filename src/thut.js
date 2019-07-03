import Header from './components/Header';
import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Slider from "./components/Slider";
import Footer from "./components/Footer";
export  default class Thut extends Component
{
    render() {
        return(
            <div id="wrapper">
            <Header/>
            <Slider />
            <Footer/>
            </div>
        );
    }
}