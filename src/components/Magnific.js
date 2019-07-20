import React,{Component} from 'react';


import axios from "axios";
import imageg from "../assets/loding.gif";
import {Carousel} from "react-responsive-carousel";
import {persian} from "./Body";

export default class Magnific extends Component{
    constructor($props)
    {
        super($props);
        this.state={post:0}
    }
    componentDidMount() {
            axios.get("http://api.thut.ir/posts/"+this.props.post)
                .then(response=>{
                    this.setState({post:response.data});

                })
                .catch(error=>{
                    console.log(error);
                })
    }

    render()
    {
        const  {post}=this.state;
        let point ,quality,director,publish,genre,actress,country;

        if (post!==0) {
             point = post.meta.find(meta => meta.key === "point");
             quality = post.meta.find(meta => meta.key === "quality");
             director = post.term.find(term => term.type === "director");
             publish = post.meta.find(meta => meta.key === "publish");
             genre = post.term.filter(term => term.type === "genre");
             actress = post.term.filter(term => term.type === "actress");
             country = post.term.find(term => term.type === "country");
        }


        return(
            <div className="magnific"  >

                <div className="container box-magnific text-right" >

                    <span className="glyphicon glyphicon-remove close-btn" onClick={this.props.close} />
                    {   post===0?
                        <img className="mag-load" src={imageg}/>
                        :



                        < div className="row  rouw"  >




                        <div className="col-lg-8 col-md-8">

                            <Carousel autoPlay={true}
                                      showStatus={false}
                                      showIndicators={false}
                                      showThumbs={true}
                                      infiniteLoop={true}
                                      emulateTouch={true}>
                                {post.meta.filter(obj => obj.key === "extra-photo"||obj.key === "main-slider-photo").map((obj, index) => (
                                    <div key={index}>
                                        <img
                                            src={'http://thut.ir/' + (obj.link.image)}
                                            className="mainCarousel"/>
                                    </div>
                                ))}
                                <div >
                                    <img
                                        src={'http://thut.ir/' + (post.image)}
                                        className="mainCarousel"/>
                                </div>

                            </Carousel>


                        </div>
                        <div className="col-lg-4 col-md-4">
                        <h2>{post.title}</h2>
                        <div className="detail text-right" >
                        <strong>سال انتشار</strong>{publish === undefined || publish.value}<br/>
                        <strong>ساخت</strong>{country === undefined || country.name}<br/>
                        <strong>کیفیت </strong>{quality === undefined||quality.value}<br/>
                        <strong>ژانر </strong>{genre === undefined ||genre.map((item,index)=><span key={index}> <a href={item.slug} >{item.name}</a>{genre.length-1===index||' | '}</span>)}<br/>
                            <strong>کارگردان </strong>{director===undefined||<a href={director.slug.toString()}> <span className="term_value">{director===undefined||director.name} </span></a>}<br/>
                            <strong>ستارگان </strong>{actress ===undefined ||actress.map((item,index)=><span key={index}> <a href={item.slug} >{item.name}</a>{actress.length-1===index||' , '}</span>)}<br/>
                            <strong>امتیاز </strong>{point === undefined || persian.convert(point.value)}/۱۰<br/>
                        </div>



                        {post.content}
                        </div>
                        </div>
                    }

                </div>

            </div>);
    }

}