import React, {Component} from 'react';

export default class Todo extends Component {

    render() {
        return (
            <li className="collection-item left">{this.props.text}
                <button
                    className="btn-floating btn-large red right"
                    onClick={(e) => this.handleClickDelete(this.props.id)}>
                    Sil</button>
            </li>
        )

    }

    handleClickDelete(id) {
 
        console.log(id);
         this.props.onDeleteTodoClick(id)
    }
}