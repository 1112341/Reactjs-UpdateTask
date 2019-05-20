import React, { Component } from 'react';

class Result extends Component {
    setStyle (){
        console.log(this.props.color);
        var bd= 'solid 3px ' + this.props.color;
        return {
            color : this.props.color,
            border:   bd,
            fontSize : this.props.fontSize,
        };
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>Color : {this.props.color}  - FontSize: {this.props.fontSize}px</p>
                    <div id="content" style={this.setStyle()}>
                      Content setting
                    </div>
            </div>
        );
    }
}

export default Result;