import React, {Component} from 'react';

import TaskFilter from '../Inputs/TasksFilter ';

export default class Footer extends Component {
  render() {
    const {clearDone, filter, onFilterChange} = this.props;
    const todoCount = this.props.todos.filter((el) => !el.done).length;

    return (
      <footer className="footer">
        <span className="todo-count"> {todoCount} items left</span>
        <TaskFilter filter={filter} onFilterChange={onFilterChange} />
        <button onClick={clearDone} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}
