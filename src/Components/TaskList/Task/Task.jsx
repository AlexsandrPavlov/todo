import React, {Component} from 'react';
import {formatDistanceToNow} from 'date-fns';

export default class Task extends Component {
  state = {
    edit: false,
    label: this.props.discription,
  };

  render() {
    const {id, discription, onDeleted, onTaskDone, done, onTaskEdit, createTime} = this.props;
    const {edit, label} = this.state;

    const onEdit = () => {
      this.setState({
        edit: true,
      });
    };

    const onLabelChange = (e) => {
      this.setState({label: e.target.value});
    };
    const onSubmit = (e) => {
      e.preventDefault();
      const trimmedLabel = label.trim();

      if (trimmedLabel) {
        onTaskEdit(trimmedLabel, id);
        this.setState({
          edit: false,
        });
      }
    };

    let classNames = '';
    let check = false;

    if (done) {
      classNames += 'completed';
      check = true;
    }
    if (edit) {
      classNames += 'editing';
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={check} onChange={onTaskDone} />
          <label onClick={onTaskDone}>
            <span className="description">{discription}</span>
            <span className="created">{formatDistanceToNow(createTime)}</span>
          </label>
          <button onClick={onEdit} className="icon icon-edit" />
          <button onClick={onDeleted} className="icon icon-destroy" />
        </div>
        {edit && (
          <form onSubmit={onSubmit}>
            <input type="text" className="edit" onChange={onLabelChange} value={label} />
          </form>
        )}
      </li>
    );
  }
}
