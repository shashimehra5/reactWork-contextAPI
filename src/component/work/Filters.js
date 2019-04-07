import React, { Component } from "react";
import { Consumer, urlParams } from "../../context";
import LoadFilter from "./LoadFilter";

class Filters extends Component {
    changeHandler (type,dispatch,value) {
        let filterApplied = {type: type, value: value}
        dispatch({ type: "UPDATE_RESULT", payload:  filterApplied});
    }
    handleClickView = (val, dispatch) => {
        if(val === 'LIST') {
            document.getElementById('gridView').classList.remove('active');
            document.getElementById('listView').classList.add('active');
        }else{
            document.getElementById('gridView').classList.add('active');
            document.getElementById('listView').classList.remove('active');
        }
        
        dispatch({ type: "UPDATE_VIEW", payload:  val});
    }
    render () {
        return (
            <Consumer>
                {
                    value => {
                        const { category, industry, dispatch } = value;
                        return (
                            <div className="row">
                                <div className="col-sm-4 view">
                                    <span id="gridView" className="grid-icon active" onClick={this.handleClickView.bind(this,'GRID', dispatch)}><i className="fas fa-th"></i></span>
                                    <span id="listView" className="list-icon" onClick={this.handleClickView.bind(this,'LIST', dispatch)}><i className="fas fa-th-list"></i></span>
                                </div>
                                <div className="col-sm-8 filterCont">
                                   <LoadFilter filterType={category} filterTitle="Show me" onChange={this.changeHandler.bind(this, 'category', dispatch)} filterVal={urlParams.category}></LoadFilter>
                                   <LoadFilter filterType={industry} filterTitle="in" onChange={this.changeHandler.bind(this, 'industry', dispatch)} filterVal={urlParams.industry}></LoadFilter>
                                </div>
                            </div>
                        );
                    }
                }
            </Consumer>  
        );
    }
}

export default Filters;