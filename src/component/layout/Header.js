import React , {Component} from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
class Header extends Component{
    state= {
        mainMenu: [{title: 'home'},{title: 'werk'},{title: 'over'},{title: 'Diensten'},{title: 'Partners'},{title: 'Stories'},{title: 'Vacatures'},{title: 'Events'},{title: 'Contacts'}],
        leftmenu: [{title: 'Global'},{title: 'NEDERLAND'},{title: 'united States'},{title: 'Ireland'},{title: 'United kingdom'},{title: 'DEUTSCHLAND'},{title: 'SCHWEIZ'}],
        sidemenu: [{id:1,title: 'facebook'},{id:2,title: 'twitter'},{id:3,title: 'instagram'},{id:4,title:'linkedin'}]
    }
    componentDidMount() {
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("header");
        function myFunction() {
            if (window.pageYOffset >= 100) {
            navbar.classList.add("sticky")
            } else {
            navbar.classList.remove("sticky");
            }
        }
    }
    menuClick (e) {
        var button = e.currentTarget;
        button.classList.toggle('menuOpen');
        document.getElementsByTagName('body')[0].classList.toggle('modal-open');
        document.getElementById('navbar').classList.toggle('menu-dark');
        document.getElementById('nav-modal').classList.toggle('nav-show')
    }
    render() {
      return (
          <header id="header">
              <div className="container">
              <nav id="navbar" className="navbar">
                    <h2>
                        {this.props.branding}
                    </h2>
                    <div className="menuItems">
                        <button onClick={this.menuClick.bind(this)} className="menuButton" type="button" aria-label="Open Menu" data-aria-label-close="Close Menu">
                            <span className="nav__button-label"> Menu </span>
                        </button>
                    </div>
                    <nav id="nav-modal" className="menu-modal">
                        <div className="nav-scroll">
                            <div className="container">
                                <ul id="main-menu" className="main-menu">
                                {
                                    this.state.mainMenu.map((link,i) => {
                                       return(
                                        <li key={i}>
                                            <a href="/">{link.title}</a>
                                        </li>) 
                                    })
                                }
                                </ul>
                                <div className="left-menu">
                                    <div className="title">Landen</div>
                                    <ul>
                                    {
                                        this.state.leftmenu.map((link,index) => {
                                        return(
                                            <li key={index}>
                                                <a href="/">{link.title}</a>
                                            </li>) 
                                        })
                                    }
                                    </ul>
                                </div>
                                <nav className="side-menu">
                                    <ul>
                                    {
                                        this.state.sidemenu.map(link => {
                                        return(
                                            <li key={link.id}>
                                                <a href="/">{link.title}</a>
                                            </li>) 
                                        })
                                    }
                                    </ul>
                                </nav>
                            </div>
                        <button type="button" className="u-sr-only" js-hook-button-modal-close="" aria-label="Close menu"> Sluit menu </button>
                        </div>
                    </nav>
                    
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 1</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 2</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Link 3</a>
                        </li>
                    </ul> */}
                </nav>
                </div>
          </header>
        
      );
    }
   
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
