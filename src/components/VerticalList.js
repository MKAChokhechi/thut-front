import React,{Component} from 'react';
import  '../style/VerticalList.css';
import imageg from "../assets/loding.gif";
export default class VerticalList extends Component{
    render() {
        return (
            <div className="container container__back">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="post__content text-right">
                            <div className="post__image">
                                < img className="img__content" src={imageg}/>
                            </div>
                            <div className="post__text">
                                <h3>
                                    <a href="#">
                                        tiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitle
                                    </a>
                                </h3>
                                <p>
                                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                                    sddssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                                    dssssssssssssssssssssssssssssssssssssssssssssssss.
                                </p>
                            </div>
                            < a href="#" className="btn__more"> بیشتر</a>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="side_right">
                            <div className="vsearch">
                                <input className="vsearch_input"/>
                                <button className="vsearch_button">

                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}