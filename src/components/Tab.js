import React,{Component} from 'react';


export  default class TAb extends Component
{
    render() {
        return(
           <div className="col-xs-12 tab">
               <ul className="tab-list">
                   <li className="tab-item tab-active">فیلم</li>
                   <li className="tab-item">سریال</li>
                   <li className="tab-item">خبر</li>
               </ul>
           </div>
        );
    }
}