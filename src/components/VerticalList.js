import React,{Component} from 'react';
import  '../style/VerticalList.css';
import imageg from "../assets/loding.gif";
export default class VerticalList extends Component{
    render() {
        return (
            <div className="container container__back" >
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
                        <div className="side_right text-right">
                            <div className="vsearch border_widget" >
                                <div className="vsearchmaster">
                                <input className="vsearch_input" placeholder="پیدا کنید..."/>
                                <button className="	glyphicon glyphicon-search vsearch_button">
                                 </button>
                                </div>
                            </div>
                                <div className="recent_post border_widget">
                                    <h4> مطالب </h4>
                                    <div className="smalll_border " ></div>
                                    <div className="line_post">
                                        <a href="#" className="link_post">zxzxx</a>
                                    </div>
                                </div>
                            <div className="recent_post border_widget">
                                <h4> درباره ما </h4>
                                <div className="smalll_border " ></div>
                              <p>dcsccccccccccccccccccccccccccccc
                              sdccccccccccccccccccccccccccccccc
                              csddddddddddddddddddddddddddddddd
                              </p>
                            </div>
                            <div className="tag_post border_widget">
                                <h4>  برچسب ها </h4>
                                <div className="smalll_border " ></div>
                                <div className="tagload">
                                    <ul className="tagload_ul">
                                    <li className="tagload_li">
                                        <a href="#" className="tagload_item">dsxscsd</a>
                                    </li>
                                    <li className="tagload_li">
                                        <a href="#" className="tagload_item">dscxssd</a>
                                    </li>
                                    <li className="tagload_li">
                                        <a href="#" className="tagload_item">dscxssd</a>
                                    </li>
                                    <li className="tagload_li">
                                        <a href="#" className="tagload_item">dscsxsxd</a>
                                    </li>
                                    <li className="tagload_li">
                                        <a href="#" className="tagload_item">dscsd</a>
                                    </li>
                                    </ul>
                                </div>
                        </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}