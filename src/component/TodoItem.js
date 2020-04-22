import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            itemContent: this.props.content,
            itemStatus: false
        }
    }

    render() {
        return (
            <div>
                {this.state.itemContent}
            </div>
        );
    }
}

TodoItem.propTypes = {

};

export default TodoItem;