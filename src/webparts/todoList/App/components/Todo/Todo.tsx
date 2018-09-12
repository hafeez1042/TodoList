import * as React from 'react';
import { connect } from 'react-redux';
import { ITodoState } from './ITodoState';
import { addTodo } from '../../actions/todoActions';
import {
  ITodoStateProps,
  ITodoDispatchProps,
  ITodoProps
} from './ITodoProps';
import styles from './Todo.module.scss';

class Todo extends React.Component<
  ITodoStateProps & ITodoDispatchProps & ITodoProps,
  ITodoState
  > {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ""
    };

    this._onAddTodo = this._onAddTodo.bind(this);
  }

  public render() {
    return (
      <div className={`${styles.todo}`}>
        <form onSubmit={this._onAddTodo}>
          <input
            type="text"
            onChange={(e) => this.setState({ todoValue: e.target.value })}
            value={this.state.todoValue}
            />
            <ul>
              {this.props.todo.todos.map((todoItem, index) => <li key={index}>{todoItem}</li>)}
            </ul>
        </form>
      </div>
    );
  }

  private _onAddTodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.todoValue);
    this.setState({todoValue: ""});
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

export default connect<
  ITodoStateProps,
  ITodoDispatchProps,
  ITodoProps
  >(mapStateToProps, { addTodo })(Todo);
