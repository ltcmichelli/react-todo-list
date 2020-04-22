import React, { Component } from 'react';
import TodoListApi from '../apis/TodoListApi';
import TodoItem from './TodoItem';
import { Row, Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.onMarkComplete = this.onMarkComplete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);

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

    onAddItem(event) {
            let newList = this.state.todoList;
            let newId = parseInt(newList.slice(-1).map(item => item.id)[0]) + 1;
            const addItem = {
                id: newId.toString(),
                content: this.state.content,
                status: false
            }
            newList.push(addItem);
            this.setState({ todoList: newList });
        event.preventDefault();
    }

    onDeleteItem(event){
        let filteredList = this.state.todoList.filter(item => item.id !== event.target.id);
        this.setState({ todoList: filteredList });
    }

    render() {
        let TodoItemList = this.state.todoList;
        return (
            <div>
                <Input type="reset" placeholder="Input todo item" type="text" value={this.state.value} onChange={this.handleChange} />
                <Button type="submit" onClick={this.onAddItem}>Submit</Button>
                {TodoItemList.map((todo) => (
                    <div key={todo.id}>
                        <Row>
                            <Button onClick={this.onMarkComplete}>
                                <TodoItem key={todo.id} content={todo.content} status={todo.status} />
                            </Button>
                            <Button type="primary" icon={<CloseOutlined />} size="large" id = {todo.id} onClick={this.onDeleteItem}/>
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