import React, { Component } from "react";

class Footer extends Component {
    state= {
        footerLinks: [
            {
                title: 'Cases', url: '/'
            },{
                title: 'Over', url: '/'
            },{
                title: 'Stories', url: '/'
            },{
                title: 'Deinsten', url: '/'
            },{
                title: 'Vacatures', url: '/'
            },{
                title: 'Contact', url: '/'
            }
        ]
    }
    handleScrollTop = () => {
        let options = {top: 0, left: 0, behavior: 'smooth'};
        window.scroll(options)
    }
    render(){
        return(
            <footer className="row">
                <div className="scroll-top" onClick={this.handleScrollTop.bind(this)}>
                    <a href="javascript:void(0)">
                        <span><i className="fas fa-long-arrow-alt-up"></i></span>
                        <div>TOP</div>
                    </a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 d-none d-md-block">
                            <h2>DEPT</h2>
                        </div>
                        <div className="col-9 col-md-7">
                            <ul>
                                {
                                    this.state.footerLinks.map((link,index) => <li key={index}>
                                        <a href={link.url}>{link.title}</a>
                                    </li>)
                                }
                            </ul>
                        </div>
                        <div className="col-3 social-links">
                            <ul>
                                <li><i className="fab fa-facebook-f" aria-hidden="true"></i></li>
                                <li><i className="fab fa-twitter" aria-hidden="true"></i></li>
                                <li><i className="fab fa-instagram" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row bottomLinks">
                        <div className="col-sm-2 d-none d-md-block">
                             &nbsp;
                        </div>
                        <div className="col-sm-8 col-md-7">
                            <ul>
                                <li><a href="/">Chamber of Commerce: 63464101</a></li>
                                <li><a href="/">VAT: NL 8552.47.502.B01</a></li>
                                <li><a href="/">Terms and conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 text-right">
                                <a href="/">© 2018 Dept Agency</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;