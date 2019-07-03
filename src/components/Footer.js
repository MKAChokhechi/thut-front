import React,{Component} from 'react';


export  default class Footer extends Component
{
    render() {
        return(
            <footer>

                <div className="main-footer">
                    <div className="container">
                        <div className="row">


                            <div className="col-md-4 col-sm-4">
                                <div id="custom_html-1" className="widget_text widget widget_custom_html">
                                    <div className="textwidget custom-html-widget"><img
                                        src="http://demo.archiwp.com/wp-content/themes/archi/images/logo.png"
                                        alt="" /><br/><br/>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                                        کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 col-sm-4">
                                <div id="recent-posts-4" className="widget widget_recent_entries"><h3>جدیدترین
                                    اخبار</h3>
                                    <ul>
                                        <li>
                                            <a href="http://demo.mihanwp.com/archi/?p=32">پنج راز در طراحی ساده فضای کسب
                                                و کار</a>
                                        </li>
                                        <li>
                                            <a href="http://demo.mihanwp.com/archi/?p=28">راه های مختلف برای بهبود فضای
                                                سالن خانه</a>
                                        </li>
                                        <li>
                                            <a href="http://demo.mihanwp.com/archi/?p=24">آسایش مردم با بهبود فضا بهتر
                                                شده</a>
                                        </li>
                                        <li>
                                            <a href="http://demo.mihanwp.com/archi/?p=40">طراحی زیبای خانه ما برای کسب
                                                آرامش</a>
                                        </li>
                                        <li>
                                            <a href="http://demo.mihanwp.com/archi/?p=37">استفاده از تکنولوژی در طراحی
                                                فضای زندگی</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="col-md-4 col-sm-4">
                                <div id="custom_html-2" className="widget_text widget widget_custom_html"><h3>تماس با
                                    ما</h3>
                                    <div className="textwidget custom-html-widget">
                                        <address>
                                            <span>شیراز خ اردیبهشت خ زیانی</span>
                                            <span><strong>تلفن:</strong>(208) 333 9296</span>
                                            <span><strong>فکس:</strong>(208) 333 9298</span>
                                            <span><strong>ایمیل:</strong><a
                                                href="mailto:support@yoursite.com">support@yoursite.com</a></span>
                                            <span><strong>وبسایت:</strong><a target="_blank" href="https://mihanwp.com"
                                                                             rel="noopener noreferrer">https://mihanwp.com</a></span>
                                        </address>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <div className="subfooter ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                © تمامی حقوق مادی و معنوی برای این سایت محفوظ است.
                            </div>

                            <div className="col-md-6 text-right">
                                <div className="social-icons">
                                    <ul>

                                        <li><a target="_blank" href="https://www.facebook.com/"><i
                                            className="fa fa-facebook"></i></a></li>


                                        <li><a target="_blank" href="https://twitter.com/"><i
                                            className="fa fa-twitter"></i></a></li>


                                        <li><a target="_blank" href="https://plus.google.com"><i
                                            className="fa fa-google-plus"></i></a></li>
                                        <li><a target="_blank" href="#"><i className="fa fa-dribbble"></i></a></li>


                                        <li><a target="_blank" href="#"><i className="fa fa-rss"></i></a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <a id="back-to-top" href="#" className="show"></a>
            </footer>
        );
    }
}