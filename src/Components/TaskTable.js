import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskTable extends Component {
 constructor(props){
     super(props);
     this.state = {
         filterName :'',
         filterStatus: -1
     }
 }
 onChange = (event)=> {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name] : value
    });
    console.log('this is use for test: Name = '+name + '- Value: '+ value);
    console.log('this is use for test: filterName = '+this.state.filterName + '-filterStatus : '+ this.state.filterStatus);
    this.props.onFilter(name === 'filterName' ? value : this.state.filterName,
    name === 'filterStatus' ? value : this.state.filterStatus);
    console.log('this is use for test: filterName = '+this.state.filterName + '-filterStatus : '+ this.state.filterStatus);

 }
    render() {
        var { tasks } = this.props;
        var {filterName,filterStatus} = this.state;
        var elmTask = tasks.map ((task,index) => {
            return <TaskItem 
            key = {task.id} 
            index = {index} 
            task = {task}
            onUpdateStatus = {this.props.onUpdateStatus}
            onDelete = {this.props.onDelete}
            onUpdate = {this.props.onUpdate}
            ></TaskItem>
        });
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
                                                    name="filterName"
                                                    value = {filterName}
                                                    onChange = {this.onChange}>
                                                    </input>
                                                </td>
                                                <td>
                                                    <select 
                                                    className="form-control"
                                                     name="filterStatus" 
                                                     value = {filterStatus}
                                                     onChange = {this.onChange}
                                                    >
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