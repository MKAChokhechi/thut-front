import React,{Component} from 'react';


export  default class Dropdown extends Component
{
    getchild(sub,index)
    {
        return(<li key={index} id={"menu-item-"+index+sub.id}
            className="menu-item menu-item-type-post_type menu-item-object-page"><a
            title={sub.term.name} href={"http://thut.ir/p/"+sub.slug}>{sub.term.name}</a>
            <ul role="menu" className=" dropdown-menu">
                {
                    sub.sub.map(this.getchild.bind(this))
                }
            </ul>
        </li>);
    }
    render() {
        const {button} = this.props;
        return(

            <li id={"menu-item-"+button.id}
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-141 current_page_item menu-item-has-children  active">
                <span></span><a title={button.term.name} href={"http://thut.ir/p/"+button.slug}>{button.term.name}</a>
                <ul role="menu" className=" dropdown-menu">
                {
                    button.sub.map(this.getchild.bind(this))
                }
                </ul>
            </li>
        );
    }
}