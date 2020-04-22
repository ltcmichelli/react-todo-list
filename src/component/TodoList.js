import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListApi from '../apis/TodoListApi';
import TodoItem from './TodoItem';
import { Row, Button, Input, Form } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.onMarkComplete = this.onMarkComplete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            todoList: [],
            content: ''
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

    handleChange(event) {
        this.setState({ content: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.content);
        event.preventDefault();
    }

    render() {
        let TodoItemList = this.state.todoList;
        return (
            <div>
                <div>
                        <Input placeholder="Input todo item" type="text" value={this.state.value} onChange={this.handleChange} />
                        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </div>
                {TodoItemList.map((todo) => (
                    <div>
                        <Row>
                            <Button onClick={this.onMarkComplete}>
                                <TodoItem key={todo.id} content={todo.content} status={todo.status} />
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