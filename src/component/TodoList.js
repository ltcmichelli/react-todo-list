import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListApi from '../apis/TodoListApi';
import TodoItem from './TodoItem';
import { Row, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.onMarkComplete = this.onMarkComplete.bind(this);

        this.state = {
            todoList: []
        }
    }

    componentDidMount() {
        TodoListApi.getTodoList().then((response) => {
            let apiData = response.data;
            this.setState({
                todoList: apiData
            })
            console.log(apiData);
        });

    }

    onMarkComplete() {
    }


    render() {
        let TodoItemList = this.state.todoList;
        return (
            <div>
                {TodoItemList.map((todo) => (
                    <div>
                        <Row>
                            <Button onClick = {this.onMarkComplete}>
                                <TodoItem key={todo.id} content={todo.content} status={todo.status}/>
                            </Button>
                            <Button type="primary" icon={<CloseOutlined />} size="large" />
                        </Row>
                    </div>
                ))}

            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;