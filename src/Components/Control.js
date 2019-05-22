import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    onSearch = (keyword)=>{
        console.log(keyword);
        this.props.onSearch(keyword);
    }
    render() {
        return (
            <div>
                <Search onSearch = {this.onSearch}/>
                <Sort onSort ={this.props.onSort}/>
            </div>
        );
    }
}

export default Control;