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

        const {active,index,open} = this.props;
        return (


                <div className={"col-md-4 col-sm-4 col-xs-12 "+(active===index?" row_column_item-active":"row_column_item")} >
                    <div className="holder">
                        <div>
                            <h3 className="column_titre"> فیلم</h3>
                            <img className="column_img" src={imageg}/>
                            <h3 className="post_titre"> The Wandering Earth 2019</h3>
                            <p className="short_text">
                                خورشید در حال مرگ است. تمام مردم جهان متحد با یکدیگر ماشین های عظیمی ساختند تا کره زمین را از مدار خودش خارج و وارد سیستم ستاره ای جدیدی کنند. این جابجایی ۲۵۰۰ سال طول خواهد کشید، و با خطرات زیادی مواجه است و برای حفظ جان بشر، گروهی از دانشمندان دست به کار میشوند...
                            </p>


                        </div>
                        <div>
                            <img className="column_img" src={imageg}/>
                            <h3 className="post_titre"> The Wandering Earth 2019</h3>
                            <p className="short_text">
                                خورشید در حال مرگ است. تمام مردم جهان متحد با یکدیگر ماشین های عظیمی ساختند تا کره زمین را از مدار خودش خارج و وارد سیستم ستاره ای جدیدی کنند. این جابجایی ۲۵۰۰ سال طول خواهد کشید، و با خطرات زیادی مواجه است و برای حفظ جان بشر، گروهی از دانشمندان دست به کار میشوند...
                            </p>


                        </div>
                        <div>
                            <img className="column_img" src={imageg} onClick={event=>open(10)}/>
                            <h3 className="post_titre"> The Wandering Earth 2019</h3>
                            <p className="short_text">
                                خورشید در حال مرگ است. تمام مردم جهان متحد با یکدیگر ماشین های عظیمی ساختند تا کره زمین را از مدار خودش خارج و وارد سیستم ستاره ای جدیدی کنند. این جابجایی ۲۵۰۰ سال طول خواهد کشید، و با خطرات زیادی مواجه است و برای حفظ جان بشر، گروهی از دانشمندان دست به کار میشوند...
                            </p>


                        </div>
                        <div>
                            <img className="column_img" src={imageg}/>
                            <h3 className="post_titre"> The Wandering Earth 2019</h3>
                            <p className="short_text">
                                خورشید در حال مرگ است. تمام مردم جهان متحد با یکدیگر ماشین های عظیمی ساختند تا کره زمین را از مدار خودش خارج و وارد سیستم ستاره ای جدیدی کنند. این جابجایی ۲۵۰۰ سال طول خواهد کشید، و با خطرات زیادی مواجه است و برای حفظ جان بشر، گروهی از دانشمندان دست به کار میشوند...
                            </p>


                        </div>
                        <div>

                            <img className="column_img" src={imageg}/>
                            <h3 className="post_titre"> فیلم</h3>
                            <p className="short_text">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
                            </p>

                            <button  className="more_post" style={active===index?{backgroundColor:"#FAB702"}:{}} onClick={(event)=>{this.props.getActive(index)}} >ادامه فیلم ها </button>
                        </div>

                    </div>
                </div>

        );
    }

}