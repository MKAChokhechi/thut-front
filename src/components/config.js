import React,{Component} from 'react';

export default class Config extends Component{
    render() {
        return (

            <section className="section__config">
                <ul className="config__showcase">
                    <li className="figure body-active">
                          همه موارد
                    </li>
                    <li className="figure">
                      ویدیو
                    </li >
                    <li className="figure">
                      تریلر
                    </li>
                    <li className="figure">
                       عکس
                    </li>
                </ul>
            </section>
        );
    }

}