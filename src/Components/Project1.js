import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';
class Project1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          color : 'red',
          fontsize : 15
        }
    }
    setColor = (param) =>{
     this.setState({
       color:param
     });
    }
    changeSize =(param)=>{
      // this.setState({
      //   fontsize : param
      // });
        this.setState ({
          fontsize :(this.state.fontsize + param < 36 && this.state.fontsize + param > 8)? this.state.fontsize + param : this.state.fontsize
      });
      console.log(param);
    }
    onReset = (size,color) =>{
      this.setState ({
        fontSize: size,
        color :color
      });
    }
    render() {
        return (
            <div>
                <div className="container mt-50">  
                    <div className="row">
                        <ColorPicker color = {this.state.color} onReceiveColor = {this.setColor}></ColorPicker>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting fontSize={this.state.fontsize} onChangeSize={(param)=>this.changeSize(param)}></SizeSetting>
                            <Reset onReset = {(size,color) =>this.onReset(size,color)}></Reset>
                        </div>
                        <Result color= {this.state.color} fontSize = {this.state.fontsize}></Result>
              </div>
        </div>
            </div>
        );
    }
}

export default Project1;