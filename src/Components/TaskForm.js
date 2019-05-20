import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            status : false
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value  = target.value;
        if(name==='status') {
            value = target.value === 'true' ? true: false;
        }
        this.setState({
            [name] : value 
        });
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        //console.log(this.state);
    }
    onCLear = () => {
        this.setState({
                name:'',
                status:false
        });
    }
    render() {
        return (
                 <div className="panel panel-warning">
                                   <div className="panel-heading">
                                         <h4 className="panel-title">
                                            Thêm Công Việc
                                            <span
                                                className="fa fa-times-circle text-right"
                                                onClick = {this.onCloseForm}
                                            ></span>
                                         </h4>
                                   </div>
                                   <div className="panel-body">
                                         <form onSubmit={this.onSubmit}>
                                             <div className="form-group">
                                                 <label>Tên</label>
                                                 <input 
                                                 type="text" 
                                                 name = "name" 
                                                 value = {this.state.name}
                                                 onChange= {this.onChange}
                                                 className="form-control" 
                                                 id="" placeholder="Input field"/>
                                                 <label>Trạng Thái</label>
                                                 <select
                                                 value = {this.state.status}
                                                 onChange= {this.onChange}
                                                 className="form-control"
                                                 name="status">
                                                    <option value={true}>Kích hoạt</option>
                                                    <option value={false}>Ẩn</option>
                                                 </select>
                                                 
                                             </div>
                                             <button type="submit" className="btn btn-primary">Lưu Lại</button>
                                             <button type="button" onClick = {this.onCLear} className="btn btn-primary">Hủy Bỏ</button>
                                         </form>
                                         
                                   </div>
                             </div>
           
        );
    }
}

export default TaskForm;