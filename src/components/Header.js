import React,{Component} from 'react';
import '../style/bootstrap.css';
import '../style/style.css';
import '../style/rtl.css';
import '../style/main.css';

import Navbar from "./Navbar";

export  default class Header extends Component
{
    render() {
        return(
            <header className="de_header_2">


                <div className="info">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <ul className="info-list">
                                    <li><i className="fa fa-phone"></i>
                                        تماس رایگان: <strong>1800.899.900</strong></li>
                                    <li><i className="fa fa-envelope-o"></i>
                                        ایمیل:
                                        <strong>contact@yoursite.com</strong></li>
                                    <li><i className="fa fa-clock-o"></i>
                                        ساعت کاری: <strong>08:00-17:00</strong></li>
                                </ul>
                            </div>

                            <div className="col-md-3">

                                <ul className="social-list">

                                    <li><a target="_blank" href="https://www.facebook.com/"><i
                                        className="fa fa-facebook"></i></a></li>


                                    <li><a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                                    </li>


                                    <li><a target="_blank" href="https://plus.google.com"><i
                                        className="fa fa-google-plus"></i></a></li>
                                    <li><a target="_blank" href="#"><i className="fa fa-dribbble"></i></a></li>


                                    <li><a target="_blank" href="#"><i className="fa fa-rss"></i></a></li>



                                </ul>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="logo">
                                <a href="http://demo.mihanwp.com/archi/">
                                    <img className="logo-static"
                                         src="http://demo.archiwp.com/wp-content/themes/archi/images/logo.png"
                                         alt="آرکی"/>
                                        <img className="logo-scroll"
                                             src="http://demo.archiwp.com/wp-content/themes/archi/images/logo.png"
                                             alt="آرکی" />
                                </a>
                            </div>
                            <span id="menu-btn"></span>

                            <Navbar/>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}