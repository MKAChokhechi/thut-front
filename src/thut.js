import Header from './components/Header';
import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import axios from "axios";
export  default class Thut extends Component
{
    constructor($props)
    {
        super($props);
        this.state = {header:[]}
    }
    componentDidMount()
    {
        axios.get("http://api.thut.ir/main/")
            .then(response=>{
                let  data = response.data;
                this.setState({header:data.term})
            })
            .catch(error=>{
                console.log(error);
            })
    }
    render() {

        return(
            <div id="wrapper">
            <Header buttons={this.state.header.filter(el=>(el.type==="navButton"))}/>
            <Slider />
            <Footer/>
            </div>
        );
    }
}