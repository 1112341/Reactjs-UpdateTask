import React, { Component } from 'react';

class TaskItem extends Component {
    onUpdateStatus = () =>{
        //console.log(this.props.task.id);
        this.props.onUpdateStatus(this.props.task.id);
    }
    render() {
        var {task, index} = this.props;
        console.log(task);
        return (
            
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td className="text-center">
                        <span 
                        onClick = {this.onUpdateStatus}
                        className={task.status ? 'label label-danger' : 'label label-success'} >{task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-warning">
                            <span 
                            onClick={this.onUpdate}
                            className="fa fa-pencil mr-5"
                            ></span>Sửa
                        </button>
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5"></span>Xóa
                        </button>
                    </td>
                </tr>
            
        );
    }
}

export default TaskItem;