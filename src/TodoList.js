import React, {Component} from 'react';
import {deleteTodo} from './action/action';

import Todo from './Todo';

export default class TodoList extends Component {



    render() { 
        return (
            <ul className="collection">
                {this.props.todos.map(todo=>
                    <Todo key={todo.id}  onDeleteTodoClick={this.deleteTodo}
                              {...todo}   />
                )}
            </ul>

        )
    }

}