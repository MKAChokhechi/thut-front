import React,{Component} from 'react';
import  '../style/Contacts.css';


export default class Contacts extends Component{

    name = React.createRef();
    email = React.createRef();
    number = React.createRef();
    textarea= React.createRef();
    state = {nameError: "",textareaError:"",emailError: "",numberError: ""};

    handleSubmit(event)  {
        event.preventDefault();
        let nameError = "";
        let emailError = "";
        let numberError = "";
        let textareaError = "";
        let  re = /\S+@\S+\.\S+/;

        if(this.name.current.value==="")
            nameError = "لطفا فیلد را پر کنید.";

        if (!re.test(this.email.current.value))

            emailError = "ایمیل اشتباه است.";

        if (this.email.current.value===""){
            emailError = "لطفا فیلد را پر کنید.";
        }

        let n = /\d/;
        if (!n.test(this.number.current.value)){
            numberError = "فیلد مشکل دارد" ;
        }
        if (this.number.current.value===""){
            numberError = "لطفا فیلد را پر کنید.";
        }
        if (this.textarea.current.value===""){
            textareaError = "لطفا فیلد را پر کنید.";
        }
        this.setState({nameError , emailError,numberError,textareaError});



    };
    render() {
        const {nameError , emailError,numberError,textareaError} = this.state;
        return (
            <div className="container movies">
                <div className="row row_contact">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="col-md-4 text_info col-md-push-1">
                        <h3> ارسال پیام به ما</h3>
                        <textarea placeholder="متن را وارد کنید ..." name="textarea"  ref={this.textarea} />
                        <span> {textareaError}</span>
                    </div>
                    <div className="col-md-2 send_info col-md-push-1">
                        <input placeholder="نام شما" name="name" ref={this.name}  />
                        <span> {nameError} </span>
                        <input placeholder="ایمیل شما" name="email" ref={this.email}  />
                        <span> {emailError}</span>
                        <input placeholder="شماره تماس " name="number" ref={this.number} />
                        <span > {numberError}</span><br/>
                        <button type="submit"> ارسال </button>
                    </div>
                    <h3>  اطلاعات ما </h3>

                    <div className="col-md-5  col-md-push-1 text_infous text-right ">
                       <div>
                        ایران ، مشهد
                       </div>
                      <div>
                        <strong>ایمیل :</strong>
                        Thut@yahoo.com
                       </div>
                       <div>
                        <strong>سایت :</strong>
                        Thut.ir
                       </div>
                       <div>
                        <strong>زمان کاری</strong>
                        همه روزه
                        </div>

                    </div>
                    </form>
                </div>

            </div>
        );
    }

}