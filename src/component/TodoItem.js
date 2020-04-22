import React, { Component } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

class TodoItem extends Component {

    render() {
        return (
            <div>
                <Text delete={this.props.status}>{this.props.content}</Text>
            </div>
        );
    }
}

TodoItem.propTypes = {

};

export default TodoItem;