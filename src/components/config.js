import React,{Component} from 'react';

export default class Config extends Component{
    render() {
        return (

            <section className="section__config">
                <ul className="config__showcase">
                    <li className="figure">
                        <a className="figure__item" href="#">  همه موارد</a>
                    </li>
                    <li className="figure">
                        <a className="figure__item" href="#">    ویدیو</a>
                    </li >
                    <li className="figure">
                        <a className="figure__item" href="#">     آهنگ</a>
                    </li>
                    <li className="figure">
                        <a className="figure__item" href="#">   عکس</a>
                    </li>
                </ul>
            </section>
        );
    }

}