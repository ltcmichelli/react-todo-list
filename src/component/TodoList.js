import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListApi from '../apis/TodoListApi';
import TodoItem from './TodoItem';

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
            let size = response.data.length;
            this.setState({
                listSize: size
            })
        })
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    render() {
        let TodoItemList = this.initArray(this.state.listSize);
        return (
            <div>
                {TodoItemList.map((value) => (
                    <TodoItem key={value} />
                ))}
            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;