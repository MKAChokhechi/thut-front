import React,{Component} from 'react';
import image from '../image/wide1.jpg';

export default class Gallery extends Component{
    render() {
        const {posts,open} = this.props;
        return (

            <section className="" >
            <div className="row">
                {

                    posts.map((obj, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 person-photo" onClick={()=>(open(obj.id))} key={index} >
                        <img src={"http://thut.ir/"+obj.image} alt="Work" className="img"/>
                        <div className="picframetex">
                            <span className="picframeitem">{obj.title}</span>
                        </div>
                    </div>))
                }
            </div>
            </section>
    );
    }

}