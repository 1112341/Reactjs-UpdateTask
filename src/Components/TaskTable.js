import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskTable extends Component {

    render() {
        var { tasks } = this.props;
        var elmTask = tasks.map ((task,index) => {
            return <TaskItem 
            key = {task.id} 
            index = {index} 
            task = {task}
            onUpdateStatus = {this.props.onUpdateStatus}></TaskItem>
        });
        console.log(elmTask);
        return (
            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    
                                    <table className="table table-bodered table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">STT</th>
                                                <th className="text-center">Tên</th>
                                                <th className="text-center">Trạng Thái</th>
                                                <th className="text-center">Hành Động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                
                                                <td>
                                                    <input
                                                    type="text"
                                                    className="form-control"
                                                    name="filterName">
                                                    </input>
                                                </td>
                                                <td>
                                                    <select className="form-control" name="filterStatus">
                                                        <option value={-1}>Tất Cả</option>
                                                        <option value={0}>Ẩn</option>
                                                        <option value={1}>Kích hoạt</option>
                                                    </select>
                                                </td>
                                                
                                            </tr>
                                            {elmTask}
                                        </tbody>
                                    </table>
                                    
                                </div>
                            </div>
        );
    }
}

export default TaskTable;