import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Project1 from './Project1';
import Project2 from './Project2';
class RouteURL extends Component {
    render() {
        return (
            
                <Router>
                    <div>
                    <Route exact path="/" component={Project1} />
                    <Route path="/project2" component={Project2} />
                    </div>
                </Router>
                // <div>
                //     <Project1></Project1>
                // </div>
            
        );
    }
}

export default RouteURL;