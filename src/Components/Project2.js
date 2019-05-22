import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskTable from './TaskTable';

class Project2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm:false,
            taskEditting:null,
            filter: {
                name :'',
                status : -1
            },
            keyword: '',
            sortBy : '',
            sortValue: 1
        }
    }
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
        // localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onDelete = (id) => {
        var {tasks} = this.state;
        var index = this.findIndex(tasks,id);
        if (index !== -1) {
            tasks.splice(index,1);
            this.setState({
                tasks: tasks
            });
        }
       localStorage.setItem('tasks',JSON.stringify(tasks));
       this.onCloseForm();
    }
    onUpdateStatus = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(tasks,id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
        }
       localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpdate = (task) => {
        console.log(task);
        var {tasks} = this.state;
        var index = this.findIndex(tasks,task.id);
        var taskEditting = tasks[index];
        this.setState({
                taskEditting: taskEditting
            });
        this.onShowForm();
    }
    onFilter = (filterName,filterStatus) => {
        console.log(filterName +'-'+ filterStatus);
        filterStatus = parseInt(filterStatus,10);
        this.setState ({
            filter : {
                name : filterName.toLowerCase(),
                status : filterStatus
            }
        });
    }
    onSort = (sortBy, sortValue) => {
        // console.log(sortBy + '--' + sortValue);
        this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        });
        console.log(this.state);
    }
    findIndex(tasks,id) { 
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task,index) => {
            if(task.id === id) {
                result =index;
            }
        });
       return result;
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      // return 1111;
    }
    generateId (){
        return this.s4() + this.s4() + '-'+ this.s4();
    }
    onToggleFrom = () =>{
        if (this.state.isDisplayForm && this.state.taskEditting !== null) {
            this.setState ({
                isDisplayForm : true,
                taskEditting:null
            });
        }else {
            this.setState ({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditting:null
            });
        }
        
    }
    onCloseForm = () => {
        this.setState ({
            isDisplayForm : false,

        });
    }
    onShowForm = () =>{
        this.setState ({
            isDisplayForm : true
        });
    }
    onSubmit =(data)=>{
        var{tasks} = this.state;
        if (data.id === '') {
            data.id = this.generateId();
            tasks.push(data);
        } else {
            var index = this.findIndex(data,data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks : tasks,
            taskEditting : null
        });

        localStorage.setItem('tasks',JSON.stringify(tasks));
        this.onCloseForm();
    }
    onSearch = (keyword) =>{
        console.log(keyword);
        this.setState({
            keyword : keyword
        })
    }
    render() {
        var { tasks,isDisplayForm,taskEditting,filter,keyword, sortBy, sortValue} = this.state;
        if (filter) {
            if (filter.name) {
               tasks = tasks.filter ((task) =>{
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });   
            }
            tasks = tasks.filter((task) =>{
                if (filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            });
            if(sortBy === 'name') {
                tasks.sort((a,b) =>{
                    if (a.name > b.name) return sortValue;
                    else if (a.name < b.name) return -sortValue;
                    else return 0;
                });
          
            }
            if(sortBy ==='status') {
                tasks.sort((a,b)=>{
                    if (a.status > b.status) return sortValue;
                    else if (a.status < b.status) return -sortValue;
                    else return 0;
                })
            }
    }
        
        if (keyword) {
                tasks = tasks.filter ((task) =>{
                     return task.name.toLowerCase().indexOf(keyword) !== -1;
                 });     
        }
        var elmTaskForm = isDisplayForm ? <TaskForm 
        onSubmit={this.onSubmit} 
        onCloseForm = {this.onCloseForm} 
        taskEditting = {taskEditting}
        /> : '';
        return (
            <div>
                <div className="container">
                    <h1>Quản lý công việc</h1>
                     <div className="row">
                        <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                            {/* form */}
                            {elmTaskForm}
                         </div>
                        <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                            <button type="button" className="btn btn-primary" onClick={this.onToggleFrom}>
                            <span className="fa fa-plus mr-5"></span> Thêm Công Việc
                            </button>
                            {/* <button type="button" className="btn btn-danger " onClick={this.generateData}>
                                Generate Data
                            </button> */}
                            <div className="row">
                            {/* Search */}
                                <Control onSearch = {this.onSearch}
                                onSort = {this.onSort}/>
                            </div>
                            <TaskTable 
                            onUpdate = {this.onUpdate}
                            onDelete = {this.onDelete}
                            onUpdateStatus = {this.onUpdateStatus} 
                            onFilter = {this.onFilter}
                            tasks = {tasks}/> 
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default Project2;