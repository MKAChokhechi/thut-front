import React,{Component} from 'react';
import imageg from "../image/p16542466_v_h10_aa.jpg";
import  '../style/List.css';

export  default class List extends Component
{
    render() {
        const {posts,open}=this.props;
        return(
            <section className="list_holder">
                {posts.map((obj,index)=>
                    <div className="col-md-4 col-sm-12 col-xs-12 list_item" key={index}>
                        <img className="column_img" src={"http://thut.ir/"+obj.image}/>
                        <h3 className="post_titre"> {obj.title}</h3>
                        <ul className="term">
                            <li><span className="term_value">۵.۴/۱۰</span><span
                                className="glyphicon glyphicon-star-empty point_title"/></li>
                            <li><span className="term_value">Pollyanna McIntosh </span><span
                                className="glyphicon glyphicon-bullhorn term_title"/></li>
                            <li><span className="term_value">WEB-DL </span><span
                                className="glyphicon glyphicon-play term_title"/></li>
                            <li><span className="term_value"> امریکا  </span><span
                                className="glyphicon glyphicon-globe term_title"/></li>
                            <li><span className="term_value">عاشقانه </span><span
                                className="glyphicon glyphicon-facetime-video term_title"/></li>
                            <li><span className="term_value">1993</span><span
                                className="glyphicon glyphicon-pushpin term_title"/></li>
                            <li><span
                                className="term_user">Cooper Andrews, Nora-Jane Noone, Pollyanna McIntosh</span><span
                                className="glyphicon glyphicon-user term_icon"/></li>
                        </ul>
                        <p className="short_text">
                            {obj.content.substring(0,280)+"..."}
                        </p>
                    </div>
                )}

            </section>
        );
    }
}