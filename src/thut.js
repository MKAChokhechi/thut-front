import {Route} from "react-router-dom";
import React,{Component} from 'react';
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import News from "./pages/News";
import Artists from "./pages/Artists";
import Subtitle from "./pages/Subtitles";
import Trailers from "./pages/Trailers";
import Contact from "./pages/Contact";
import More from './components/More';

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
            <Route path="/فیلم" exact={true} component={Movies} />
            <Route path="/فیلم/:id"  component={More} />
            <Route path="/سریال" component={Series} />
            <Route path="/اخبار-سینمایی" component={News} />
            <Route path="/هنرمندان" component={Artists} />
            <Route path="/تریلر" component={Trailers} />
            <Route path="/زیرنویس" component={Subtitle} />
            <Route path="/تماس-باما" component={Contact} />
            </Body>
            <Footer/>
            </div>
        );
    }
}