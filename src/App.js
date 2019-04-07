import React, { Component } from 'react';
import './App.scss';
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import View from "./component/work/View";
import Filters from "./component/work/Filters";
import Contact from "./component/work/Contact";
import Clients from "./component/work/Clients";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container-fluid">
          <Header branding="Dept"></Header>
          <div className="mainBanner"><span className="workHeading">WORK</span> <button type="button" className="btn btn-dark d-none d-sm-block">View Work</button> </div>
          <button type="button" className="btn btn-dark btn-block view-work-btn d-block d-sm-none">View Work</button>
          <div className="container">
            <Filters/>
            <View/>
          </div>
          <Clients/>
          <div className="container contactUs">
            <Contact/>
          </div>
          <Footer/>
        </div>
      </Provider>
      
    );
  }
}

export default App;

