import './App.css';
import React, {Component} from 'react';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/HeaderApp';
import TaskList from './Components/TaskList/TaskList';

export default class App extends Component {
  state = {
    todoData: [],
    filter: 'all',
  };
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const newArr = todoData.filter((el) => el.id !== id);
      return {todoData: newArr};
    });
  };
  onTaskDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};

      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArr,
      };
    });
  };
  onTaskEdit = (id, value) => {
    const {todoData} = this.state;
    const newData = todoData.map((item) => {
      if (item.id === id) {
        return {
          discription: value,
          done: false,
          id: item.id,
          createTime: item.createTime,
        };
      }
      return item;
    });

    return this.setState({todoData: newData});
  };
  clearDone = () => {
    this.setState(({todoData}) => {
      const newArr = todoData.filter((el) => !el.done);
      return {todoData: newArr};
    });
  };
  onFilterChange = (filter) => {
    this.setState({filter});
  };
  addItem = (value) => {
    const {todoData} = this.state;
    const time = new Date();
    const newTodo = [
      {
        discription: value,
        id: todoData.length + 1,
        done: false,
        createTime: time,
      },
    ];
    this.setState(({todoData}) => {
      const newTodoData = todoData.concat(newTodo);
      return {todoData: newTodoData};
    });
  };
  filterTodo = (todoData, filter) => {
    if (filter === 'all') {
      return todoData;
    }
    if (filter === 'active') {
      return todoData.filter((item) => !item.done);
    }
    if (filter === 'done') {
      return todoData.filter((item) => item.done);
    }
  };

  render() {
    const {todoData, filter} = this.state;
    const visibaleTodo = this.filterTodo(todoData, filter);
    return (
      <div className="todoapp">
        <Header onItemAdd={this.addItem} />
        <TaskList
          todos={visibaleTodo}
          onDeleted={this.deleteItem}
          onTaskDone={this.onTaskDone}
          onTaskEdit={this.onTaskEdit}
        />
        <Footer todos={todoData} clearDone={this.clearDone} filter={filter} onFilterChange={this.onFilterChange} />
      </div>
    );
  }
}
