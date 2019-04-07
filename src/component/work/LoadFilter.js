import React, { Component } from "react";

class LoadFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    }
    render () {
        return (
            <div>
                     <label>{this.props.filterTitle}</label>
                     <div className="filter-select">
                         <span className="filter-placeholder">
                             {this.props.filterVal ? this.props.filterVal : this.props.filterType[0].value}
                             <span className="arrowDrop"><i className="fas fa-caret-down"></i></span>
                         </span>
                         <select onChange={this.handleChange}>
                         {
                             this.props.filterType.map(filter => 
                                 <option key={filter.id} value={filter.name}>{filter.value}</option>
                             )
                         }
                         </select>
                     </div>
             </div>
        );
    }
}

export default LoadFilter;