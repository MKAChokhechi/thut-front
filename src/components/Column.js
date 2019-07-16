import React,{Component} from 'react';
import  '../style/Column.css';
import  {persian} from "./Body";


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
                            posts.map((obj, index) =>{
                                let point = obj.meta.find(meta =>meta.key==="point");
                                let quality = obj.meta.find(meta=>meta.key==="quality");
                                let director = obj.term.find(term=>term.type==="director");
                                let publish = obj.meta.find(meta=>meta.key==="publish");
                                let genre = obj.term.filter(term=>term.type==="genre");
                                let actress = obj.term.filter(term=>term.type==="actress");
                                let country = obj.term.find(term=>term.type==="country");
                                return(
                                <div key={index}>

                                    <img className="column_img" src={"http://thut.ir/"+obj.image} onClick={event=>open(obj.id)}/>
                                    <h3 className="post_titre" onClick={event =>open(obj.id)}> {obj.title}</h3>
                                    <ul className="term">

                                        <li><span className="term_value">{point === undefined || persian.convert(point.value)}/۱۰</span><span className="glyphicon glyphicon-star-empty point_title"/></li>
                                        <li><span className="term_value">{publish === undefined || publish.value}</span><span className="glyphicon glyphicon-pushpin term_title"/></li>
                                        <li><span className="term_value">{quality === undefined||quality.value}</span><span className="glyphicon glyphicon-play term_title"/></li>
                                        <li><a href={country === undefined || country.term.slug}><span className="term_value"> {country === undefined || country.term.name}  </span></a><span className="glyphicon glyphicon-globe term_title"/></li>
                                        <li><span className="term_value">{genre === undefined ||genre.map((item,index)=><span key={index}> <a href={item.term.slug} >{item.term.name}</a>{genre.length-1===index||' | '}</span>)} </span><span className="glyphicon glyphicon-facetime-video term_title"/></li>
                                        <li><a href={director===undefined||director.term.slug.toString()}> <span className="term_value">{director===undefined||director.term.name} </span></a><span className="glyphicon glyphicon-bullhorn term_title"/></li>
                                        <li><span className="term_user">{actress ===undefined ||actress.map((item,index)=><span key={index}> <a href={item.term.slug} >{item.term.name}</a>{actress.length-1===index||' , '}</span>)}</span><span className="glyphicon glyphicon-user term_icon"/></li>
                                    </ul>

                                    <p className="short_text">


                                        {obj.content.substring(0,250)+"..."}
                                    </p>
                                </div>)}

                            )
                        }

                        <button  className="more_post" style={active===index?{backgroundColor:"#FAB702"}:{}} onClick={event=>{this.props.getActive(index)}} >ادامه فیلم ها </button>
                    </div>
                </div>

        );
    }

}