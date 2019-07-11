import React,{Component} from 'react';
import  '../style/body.css';



export default class Body extends Component{

    render() {

        return (

            <div className="movies">

                {this.props.children}
            </div>

        );
    }

}