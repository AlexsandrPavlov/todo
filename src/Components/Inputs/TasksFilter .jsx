import {Component} from 'react';

export default class TasksFilter extends Component {
  render() {
    const {filter, onFilterChange} = this.props;

    return (
      <ul className="filters">
        <li>
          <button className={`${filter === 'all' ? 'selected' : null}`} onClick={() => onFilterChange('all')}>
            All
          </button>
        </li>
        <li>
          <button className={`${filter === 'active' ? 'selected' : null}`} onClick={() => onFilterChange('active')}>
            Active
          </button>
        </li>
        <li>
          <button className={`${filter === 'done' ? 'selected' : null}`} onClick={() => onFilterChange('done')}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
