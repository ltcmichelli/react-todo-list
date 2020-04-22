import React, { Component } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemContent: this.props.content,
            itemStatus:  this.props.status
        }
    }

    render() {
        return (
            <div>
                <Text delete={this.state.itemStatus}>{this.state.itemContent}</Text>
            </div>
        );
    }
}

TodoItem.propTypes = {

};

export default TodoItem;