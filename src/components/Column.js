import React,{Component} from 'react';
import  '../style/Column.css';
import imageg from "../image/p16542466_v_h10_aa.jpg";


export default class Column extends Component{

    constructor($props)
    {
        super($props);
        this.state={active:$props.active};
    }


    render() {

        const {active,index,open,posts} = this.props;
        return (


                <div className={"col-md-4 col-sm-4 col-xs-12 "+(active===index?" row_column_item-active":"row_column_item")} >
                    <div className="holder">
                        <h3 className="column_titre">فیلم</h3>
                        {
                            posts.map((obj, index) =>
                                <div key={index}>

                                    <img className="column_img" src={"http://thut.ir/"+obj.image} onClick={event=>open(obj.id)}/>
                                    <h3 className="post_titre" onClick={event =>open(obj.id)}> {obj.title}</h3>
                                    <ul className="term">
                                        <li><span className="term_value">۵.۴/۱۰</span><span className="glyphicon glyphicon-star-empty point_title"/></li>
                                        <li><span className="term_value">Pollyanna McIntosh </span><span className="glyphicon glyphicon-bullhorn term_title"/></li>
                                        <li><span className="term_value">WEB-DL </span><span className="glyphicon glyphicon-play term_title"/></li>
                                        <li><span className="term_value"> امریکا  </span><span className="glyphicon glyphicon-globe term_title"/></li>
                                        <li><span className="term_value">عاشقانه </span><span className="glyphicon glyphicon-facetime-video term_title"/></li>
                                        <li><span className="term_value">1993</span><span className="glyphicon glyphicon-pushpin term_title"/></li>
                                        <li><span className="term_user">Cooper Andrews, Nora-Jane Noone, Pollyanna McIntosh</span><span className="glyphicon glyphicon-user term_icon"/></li>
                                    </ul>

                                    <p className="short_text">


                                        {obj.content.substring(0,250)+"..."}
                                    </p>
                                </div>

                            )
                        }

                        <button  className="more_post" style={active===index?{backgroundColor:"#FAB702"}:{}} onClick={event=>{this.props.getActive(index)}} >ادامه فیلم ها </button>
                    </div>
                </div>

        );
    }

}