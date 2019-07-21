import React   from 'react';
import '../style/NewsChild.css';
import DefaultPage from "./DefaultPage";
import moment from 'moment-jalaali';
import axios from "axios";
import {persian} from './Body';

export default class NewsChild extends DefaultPage {


    componentDidMount () {
        axios.get("http://api.thut.ir/posts/")
            .then(response=>{
                let  data = response.data;
                this.setState({posts:data});

            })
            .catch(error=>{
                console.log(error);
            })
    }
    getTime(data)
    {
        let today = new Date();
        let before = new Date(data);
        let totime = today.getTime(),betime = before.getTime();
        if(totime > betime+86400000)
            return moment(before.getFullYear()+"/"+before.getMonth()+"/"+before.getDate(),"YYYY/MM/DD")
                .format("jYYYY/jMM/jDD");
        if(totime > betime+3600000)
            return before.getHours()+" hour";
        if(totime > betime+60000)
            return before.getMinutes()+ " min";
        return before.getSeconds() +" sec"


    }

    render () {
        const { posts , post } = this.state;
        return (
            [
                super.render(),
            <div className=" movies">
                <div className="container ">
                    <div className="row rownews">
                        {
                            posts.map ( ( obj , index ) =>
                        <div className="col-md-4" key={index}>

                                            <div className=" mb-4 box-shadow card_row" >

                                                <img className=" " alt="Thumbnail [100%x225]"
                                                     style={ { height : 225 , width : "100%" , display : 'block' } }
                                                     src={ "http://thut.ir/" + obj.image }/>
                                                <div className="card-body card_body">
                                                    <h5>
                                                        { obj.title }
                                                    </h5>
                                                    <p className="card-text">
                                                        { obj.content.substr(0,100)+' ...' }
                                                    </p>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center card_body_item">

                                                        <button onClick={event => this.openMagnific(obj.id)}> ادامه </button>

                                                        <small className="text-muted">{persian.convert(this.getTime(obj.modified))}</small>
                                                    </div>
                                                </div>
                                            </div>
                        </div>



                                )
                            }


                    </div>
                </div>
            </div>
                ]
        );
    }

}