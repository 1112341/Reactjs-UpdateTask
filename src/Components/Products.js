import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="thumbnail">
              <img alt = "true" src={this.props.img} />
              <div className="caption">
                <h3>Name : {this.props.name}</h3>
                <h3>Age : {this.props.age}</h3>
                <h3>Another Infomation</h3>
                <p>
                 ...
                </p>
                <p>
                  <a href="#a" className="btn btn-primary">Action</a>
                  <a href="#a" className="btn btn-default">Action</a>
                </p>
              </div>
            </div>
          </div>
        
            
        );
    }
}
export default Products;