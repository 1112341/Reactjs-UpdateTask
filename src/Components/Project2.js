import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskTable from './TaskTable';

class Project2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm:false
        }
    }
    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    onUpdateStatus = (id) =>{
        console.log(id);
        var {tasks} = this.state;
        var index = this.findIndex(tasks,id);
        if (index != -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
        }
       localStorage.setItem('tasks',JSON.stringify(tasks));
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
    // generateData = () => {
    //     var tasks = [
    //         {
    //             id : this.generateId (),
    //             name : "Hoc Lap Trinh",
    //             status: true
    //         },
    //         {
    //             id : this.generateId (),
    //             name : "Di Choi",
    //             status: false
    //         },
    //         {
    //             id : this.generateId (),
    //             name : "Di học",
    //             status: true
    //         }
    //     ];
    //    // console.log(tasks);
    //     this.setState({
    //         task:tasks
    //     });
    //     localStorage.setItem('tasks',JSON.stringify(tasks));
    // }
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      // return 1111;
    }
    generateId (){
        return this.s4() + this.s4() + '-'+ this.s4();
    }
    onToggleFrom = () =>{
        this.setState ({
            isDisplayForm : !this.state.isDisplayForm
        });
    }
    onCloseForm = () => {
        //  isDisplayForm : !this.state.isDisplayForm
       // console.log('onCloseForm consolelog');
        this.setState ({
            isDisplayForm : !this.state.isDisplayForm
        });
    }
    onSubmit =(data)=>{
        data.id = this.generateId();
        console.log(data);
        var{tasks} = this.state;
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        console.log(this.state.tasks);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    render() {
        var { tasks,isDisplayForm  } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm = {this.onCloseForm} /> : '';
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
                                <Control/>
                            </div>
                            <TaskTable onUpdateStatus = {this.onUpdateStatus} 
                            tasks = {tasks}/> 
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default Project2;