import React, { Component } from 'react';

class SizeSetting extends Component {
    changeSize = (param)=>{
        //var size = this.props.fontSize + param;
        console.log(param);
        this.props.onChangeSize(param);
    }
    render() {
        return (    
            <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Size : {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                 <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>Dec</button>&nbsp;
                 <button type="button" className="btn btn-success" onClick={()=>this.changeSize(2)}>Ins</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;