import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListApi from '../apis/TodoListApi';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        TodoListApi.getTodoList().then((response) => {
            let apiData = response.data;
            let size = response.data.length;
            this.setState({
                todoList: apiData
            })
            console.log(this.state.todoList);
        });

    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    render() {
        let TodoItemList = this.state.todoList;
        return (
            <div>
                {TodoItemList.map((todo) => (
                    <TodoItem key={todo.id} content = {todo.content} status = {todo.status}/>
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;