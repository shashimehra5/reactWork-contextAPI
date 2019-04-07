import React, { Component } from "react";
import { Consumer } from "../../context";
import lozad from "lozad";

class GridListView extends Component {
    componentDidMount(){
        const observer = lozad();
            observer.observe();
        document.addEventListener('DOMContentLoaded', function(){
            const observer = lozad();
            observer.observe();
        })
    }
    componentDidUpdate(){
        const observer = lozad();
            observer.observe();
    }
    handleImageLoad (e) {
        e.target.classList.add('loaded');
    }
    render () {
        return (
            <Consumer>
                {
                    value => {
                        const { filterResults } = value;
                        return (
                            <div className="row wrap">
                                {
                                    filterResults.map(res => {
                                        return(
                                            <div key={res.workId} className="col-sm-6 tile">
                                                <a href="/">
                                                    <figure>
                                                        <img className="lozad" data-src={res.url} onLoad={this.handleImageLoad.bind(this)} alt={res.title}/>
                                                        <figcaption>
                                                            <div>
                                                                <h3>{res.title}</h3>
                                                                <p>{res.desc}</p>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="description">
                                                        <span className="note">{res.author}</span>
                                                        <div className="heading">{res.desc}</div>
                                                        <div className="link"><i className="fas fa-caret-right"></i> View Work </div>
                                                    </div>
                                                </a>
                                            </div>
                                        )}
                                    )
                                }
                                {
                                    filterResults.length === 0 && <div className="col-sm-12 mt-2 text-center"><h1>OOPS!! NO RESULT FOUND</h1></div>
                                }
                            </div>
                        );
                    }
                }
            </Consumer>
            
        );
    }
}

export default GridListView;

export class ListView extends Component {
    componentDidMount(){
        const observer = lozad();
            observer.observe();
        document.addEventListener('DOMContentLoaded', function(){
            const observer = lozad();
            observer.observe();
        })
    }
    componentDidUpdate(){
        const observer = lozad();
            observer.observe();
    }
    handleImageLoad (e) {
        e.target.classList.add('loaded');
    }
    render(){
        return (
            <Consumer>
                {
                    value => {
                        const { filterResults } = value;
                        return (
                            <React.Fragment>
                                {
                                    filterResults.map(res => {
                                        return(
                                            <div key={res.workId} className="row list-view">
                                                <div className="imageCont col-12 col-sm-3">
                                                    <figure>
                                                        <img className="lozad" data-src={res.url} onLoad={this.handleImageLoad.bind(this)} alt={res.title}/>
                                                    </figure>
                                                </div>
                                                <div className="desc col-sm-6">
                                                    <h3>{res.title}</h3>
                                                    <div>{res.desc}</div>
                                                    <p className="note">{res.author}</p>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="link"><a href="/">View Work <i className="fas fa-caret-right"></i></a></div>
                                                </div>
                                            </div>
                                        )}
                                    )
                                }
                                {
                                    filterResults.length === 0 && <div className="text-center mt-2 mb-3"><h1>OOPS!! NO RESULT FOUND</h1></div>
                                }
                            </React.Fragment>
                        );
                    }
                }
            </Consumer>
            
        );
    }
}