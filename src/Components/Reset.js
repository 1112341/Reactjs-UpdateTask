import React, { Component } from 'react';

class Reset extends Component {
 onReset = (size,color)=>{
    this.props.onReset(size,color)
 }
    render() {
        return (
            <div>
                 <button type="button" className="btn btn-primary" onClick={(size,color)=>this.onReset(15,'red')}>Reset</button>
            </div>
        );
    }
}

export default Reset;