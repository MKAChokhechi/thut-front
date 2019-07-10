import React,{Component} from 'react';
import  '../style/NewsChild.css';
import imageg from "../assets/loding.gif";



export default class NewsChild extends Component{

    render() {

        return (
            <div className=" movies">
                <div className="container ">
                    <div className="row rownews">
                        <div className="col-md-4">
                            <div className=" mb-4 box-shadow card_row">
                                <img className=" " alt="Thumbnail [100%x225]" style={{height: 225, width: "100%", display: 'block'}} src={imageg}/>
                                    <div className="card-body card_body">
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div className="d-flex justify-content-between align-items-center card_body_item">

                                                <button> نمایش </button>

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" mb-4 box-shadow card_row">
                                <img className=" " alt="Thumbnail [100%x225]" style={{height: 225, width: "100%", display: 'block'}} src={imageg}/>
                                    <div className="card-body card_body">
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div className="d-flex justify-content-between align-items-center card_body_item">

                                                <button> نمایش </button>

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className=" mb-4 box-shadow card_row">
                                <img className=" " alt="Thumbnail [100%x225]" style={{height: 225, width: "100%", display: 'block'}} src={imageg}/>
                                    <div className="card-body card_body">
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</p>
                                        <div className="d-flex justify-content-between align-items-center card_body_item">

                                                <button> نمایش </button>

                                            <small className="text-muted">9 mins</small>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}