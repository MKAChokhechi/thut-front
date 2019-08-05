import React,{Component} from 'react';
import  '../style/More.css';
// import axios from 'axios';
export default class Comment extends Component {

    render() {
    return(
        <div className="comment_div">
            <h3> 0 نظر</h3>
            <p>درج نظر</p>
            <div className="comment_leave text-right">
                <textarea placeholder="درج نظر *"> </textarea>
                <input placeholder="نام *"/>
                <input placeholder="ایمیل*"/>
                <button>ارسال پیام</button>
            </div>
        </div>
    )
    }
}