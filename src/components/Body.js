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
export class persian
{
    static dict ={'1':'۱','2':'۲','3':'۳','4':'۴','5':'۵','6':'۶','7':'۷','8':'۸','9':'۹','0':'۰','.':'.'};
    static convert(number)
    {
        let num = "";
        number.toString();
        for(let i = 0 ;i<number.length;i++)
            num+=this.dict[number[i]];
        return num;
    }
}