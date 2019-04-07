import React, { Component } from "react";
import { Consumer } from "../../context";
import GridListView, { ListView } from "./GridListView";

class View extends Component {
    render(){
        return (
            <Consumer>
                {
                    value => {
                        const { View } = value;
                        return(
                            <React.Fragment>
                                {
                                    View === 'GRID' ? <GridListView/> : <ListView/>
                                }
                            </React.Fragment>
                        );
                    }
                }
            </Consumer>
        );
    }
}

export default View;