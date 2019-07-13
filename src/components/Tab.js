import React,{Component} from 'react';
import "../style/Tab.css";


export  default class TAb extends Component
{
    constructor($props)
    {
        super($props);
        this.state={active:1}
    }
    render() {
        const list = ["فیلم","سریال","اخبار"];
        const {active} = this.state;
        return(
           <div className="col-xs-12 tab">
               <ul className="tab-list">
                   {
                       list.map((x,index)=>
                           <li key={index} className={"tab-item "+(active===index+1?"tab-active":"")}
                           onClick={()=>{this.props.Select(index+1);this.setState({active:index+1})}}>
                           {x}
                           </li>)
                   }
               </ul>
           </div>
        );
    }
}