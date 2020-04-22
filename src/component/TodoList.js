import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListApi from '../apis/TodoListApi';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            listContent: 0,
            listSize:0
        }
    }

    componentDidMount() {
        TodoListApi.getTodoList().then((response) => {
            console.log(response.data);
            let size = response.data.size;
            this.setState({
                listSize: size
            })
        })
    }

    render() {
        return (
            <div>
                {/* <input type = "text" value = {this.state.listContent}></input>
                {this.state.listContent} */}
            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;