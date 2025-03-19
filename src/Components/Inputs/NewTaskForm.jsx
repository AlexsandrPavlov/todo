import React, {Component} from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };
  onLabelchange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const trimmedLabel = this.state.label.trim();
    if (trimmedLabel) {
      this.props.onItemAdd(trimmedLabel);
      this.setState({
        label: '',
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onLabelchange}
          value={this.state.label}
        />
      </form>
    );
  }
}
