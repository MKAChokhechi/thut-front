    import React,{Component} from 'react';
    import  '../style/More.css';
    import axios from 'axios';
    import Comment from "./Comment";
    export default class More extends Component{
        state = {post:""};
        componentDidMount() {
            const {params} = this.props.match;
            axios.get("http://api.thut.ir/posts/"+params.id)
                .then(response=>{
                    const post = response.data;
                    this.setState({post});

            })
            .catch(error=>{
                console.log(error);
            });
    }

    render() {

        const {post} = this.state;

        return (
            <div className="container container__back" >
                <div className="row rouws">
                    <div className="col-lg-4 col-md-4 col-md-push-8">
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
                                <div className="smalll_border " > </div>
                                <div className="line_post">
                                    <a href="#" className="link_post">zxzxx</a>
                                </div>
                            </div>
                            <div className="recent_post border_widget">
                                <h4> درباره ما </h4>
                                <div className="smalll_border " > </div>
                                <p>
                                  sadasds
                                </p>
                            </div>
                            <div className="tag_post border_widget">
                                <h4>  برچسب ها </h4>
                                <div className="smalll_border " > </div>
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
                                        <li className="tagload_li">
                                            <a href="#" className="tagload_item">dscsd</a>
                                        </li>
                                        <li className="tagload_li">
                                            <a href="#" className="tagload_item">dscsd</a>
                                        </li>
                                        <li className="tagload_li">
                                            <a href="#" className="tagload_item">dscsd</a>
                                        </li>
                                        <li className="tagload_li">
                                            <a href="#" className="tagload_item">dscsd</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-8 col-md-8 col-md-pull-4">
                        <div className="post__content text-right">
                            <div className="post__image">
                                < img className="img__content" src={"http://thut.ir/"+post.image}/>
                            </div>
                            <div className="post__text">
                                <h3>
                                    <a href="#">
                                        {post.title}
                                    </a>
                                </h3>
                                <p>
                                    {post.content}
                                </p>
                            </div>
                            <div className="post_info row">
                                <div className="post_info_share col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <span>اشتراک گذاری : </span>
                                    <div className="info_share_links">
                                        <a href="#" className="fa fa-facebook "> </a>
                                        <a href="#" className="fa fa-instagram "> </a>
                                        <a href="#" className="fa fa-twitter"> </a>
                                        <a href="#" className="fa fa-google-plus "> </a>
                                        <a href="#" className="fa fa-linkedin"> </a>
                                    </div>
                                </div>

                                <div className="post_info_span col-lg-6 col-md-6 col-sm-12 col-xs-12 ">

                                    <div>
                                        <i className="fa fa-user">  <a href="#"  title="پست توسط مدیر">مدیر</a> </i>
                                    </div>
                                    <div>
                                        <i className="fa fa-folder"><a href="#"  >ویدیو</a> </i>
                                    </div>
                                    <div>
                                        <i className="fa fa-comment"> <a href="#"  > نظرات 0</a> </i>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="post_nav row">
                            <div className="post_links ">
                                <div className="post_next ">
                                    <a href="#">  پست بعدی </a><br/>
                                    <a href="#">  پسسسسسسسسسسسسسست بعدی </a>
                                </div>
                                <div className="post_previous ">
                                    <a href="#">  پست قبلی </a><br/>
                                    <a href="#">  پست قسسسسسسسسسسسسسسسسسسسسسبلی </a>
                                </div>

                            </div>

                        </div>
                        <div className="comment_div">
                            <h3> 0 نظر</h3>
                            <p>درج نظر</p>
                            <div className="comment_leave text-right">
                                <textarea placeholder="درج نظر *"> </textarea>
                                <input placeholder="نام *"/>
                                <input placeholder="ایمیل*"/>
                                <button>ارسال پیام </button>
                            </div>
                            <Comment/>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

