import React,{Component} from 'react';
import  '../style/body.css';
import image from '../image/wide1.jpg';

export default class Body extends Component{
    render() {
        return (
            <section className="section-person">
                <ul className="person-showcase">
                    <li>
                        <figure className="person-photo ">
                            <img src={image} alt="Work"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="North of iran"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="South of iran"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="Travel"/>
                        </figure>
                    </li>
                </ul>
                <ul className="person-showcase">
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="Persian Gulf"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="With Family"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo">
                            <img src={image} alt="South of iran , Persian Gulf"/>
                        </figure>
                    </li>
                    <li>
                        <figure className="person-photo ">
                            <img src={image} alt="Mazandaran"/>
                        </figure>
                    </li>
                </ul>
            </section>
        );
    }

}