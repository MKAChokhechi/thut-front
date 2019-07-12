import Header from './components/Header';
import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./components/Footer";
import axios from "axios";
import {Route} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Body from "./components/Body";
import News from "./pages/News";
import Contact from "./pages/Contact";
// import "bootstrap/dist/css/bootstrap.min.css"
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
                this.setState({header:data});

            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() {
        const {header} = this.state;
        return(
            <div id="wrapper">
            <Header buttons={header.filter(el=>(el.type==="navButton"))}/>
            <Body>
            <Route path="/" exact={true}  component={Home}/>
            <Route path="/فیلم" component={Movies} />
            <Route path="/اخبار-سینمایی" component={News} />
            <Route path="/تماس-باما" component={Contact} />
            </Body>
            <Footer/>
            </div>
        );
    }
}