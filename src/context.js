import React, { Component } from "react";
import util from "./component/util/util";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_RESULT":
        urlParams[action.payload.type]= action.payload.value;
        util.pushNewUrl(urlParams);
        return {
            ...state,
            filterResults: state.results.filter(res => {
                if(urlParams.category && urlParams.industry) {
                    return (res.category.indexOf(urlParams.category) > -1) && (res.industry.indexOf(urlParams.industry) > -1)
                }else{
                return res[action.payload.type].indexOf(action.payload.value) > -1
                }
            })
      };
    case "UPDATE_VIEW": 
         let payload = action.payload;
         return {
            ...state,
            View: payload
         }
    default:
      return state;
  }
};
export const urlParams = {
    category: '',
    industry: ''
}

export class Provider extends Component {
    state = {
        View: 'GRID',
        category: [
            {id:1, name:"all", value: "all work"},{id:2, name:"technology",value:"technology"},{id:3, name:"design", value:"design"},{id:4, name:"advertising", value:"advertising"},
            {id:5, name:"branding", value: "branding"},{id:6, name:"content",  value: "content"},{id:7, name:"commerce", value: "commerce"},{id:8, name:"media", value: "media"}, {id:9, name:"strategy",value: "strategy"}
        ],
        industry: [
            {id:1, name:"all", value:"all industries"},{id:2, name:"utilities", value:"utilities"},{id:3, name:"b2b", value:"b2b"},{id:4, name:"travel", value:"travel"},
            {id:5, name:"education", value:"education"},{id:6, name:"media", value:"media"},{id:7, name:"health", value:"health"},{id:8, name:"recruitment", value:"recruitment"}
        ],
        results: [{
            workId: 1,
            author: 'author',
            url: require('./images/result1.png'),
            category: 'technology,all',
            industry: 'b2b,all',
            title: 'dummy Title 1',
            desc: 'Hello this is a dummy description'
        },{
            workId: 2,
            author: 'author text',
            url: require('./images/result2.png'),
            category: 'design,all',
            industry: 'travel,all',
            title: 'dummy Title 2',
            desc: 'Hello this is a dummy description'
        },{
            workId: 3,
            author: 'author text',
            url: require('./images/result3.png'),
            category: 'design,all',
            industry: 'education,all',
            title: 'dummy Title 3',
            desc: 'Hello this is a dummy description'
        },{
            workId: 4,
            author: 'author text',
            url: require('./images/result4.png'),
            category: 'design,all',
            industry: 'education,all',
            title: 'dummy Title 4',
            desc: 'Hello this is a dummy description'
        },{
            workId: 5,
            url: require('./images/result5.png'),
            category: 'content,all',
            title: 'dummy Title 5',
            industry: 'media,all',
            desc: 'Hello this is a dummy description'
        },{
            workId: 6,
            author: 'author text',
            url: require('./images/result6.png'),
            category: 'media,all',
            industry: 'media,all',
            title: 'dummy Title 6',
            desc: 'Hello this is a dummy description'
        },{
            workId: 7,
            author: 'author text',
            url: require('./images/result7.png'),
            category: 'strategy,all',
            industry: 'media,all',
            title: 'dummy Title 7',
            desc: 'Hello this is a dummy description'
        },{
            workId: 8,
            author: 'author text',
            url: require('./images/result8.png'),
            category: 'strategy,all',
            industry: 'utilities,all',
            title: 'dummy Title 8',
            desc: 'Hello this is a dummy description'
        },{
            workId: 9,
            author: 'author text',
            url: require('./images/result9.png'),
            category: 'strategy,all',
            industry: 'recruitment,all',
            title: 'dummy Title 9',
            desc: 'Hello this is a dummy description'
        },{
            workId: 10,
            author: 'author text',
            url: require('./images/result10.png'),
            category: 'technology,all',
            industry: 'education,all',
            title: 'dummy Title 10',
            desc: 'Hello this is a dummy description'
        }],
        filterResults: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

   componentDidMount() {
    var tempParams = '';
    var urlObj = util.urlToObj(window.location.href, false);
    tempParams = urlObj.param;

    if (typeof tempParams.category != 'undefined' && tempParams.category) {
        urlParams.category = tempParams.category;
    }
    if (typeof tempParams.industry != 'undefined' && tempParams.industry) {
        urlParams.industry = tempParams.industry;
    }
    if(urlParams.category || urlParams.industry) {
            var res = this.state.results.filter(res => {
                if(urlParams.category && urlParams.industry) {
                    return (res.category.indexOf(urlParams.category) > -1) && (res.industry.indexOf(urlParams.industry) > -1)
                }else{
                   if(urlParams.category) {
                       return res['category'].indexOf(urlParams.category) > -1;
                   }else if(urlParams.industry){ 
                        return res['industry'].indexOf(urlParams.industry) > -1;
                   }
                }
        })
        this.setState({
            filterResults: res
        })
    }else{
        this.setState({
            filterResults: this.state.results
          });
    }
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
