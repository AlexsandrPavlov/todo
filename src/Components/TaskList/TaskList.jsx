import Task from './Task/Task';

export default function TaskList({todos, onDeleted, onTaskDone, onTaskEdit}) {
  const elements = todos.map((items) => {
    const {id, ...itemsProps} = items;

    return (
      <div key={id}>
        <Task
          {...itemsProps}
          onDeleted={() => onDeleted(id)}
          onTaskDone={() => onTaskDone(id)}
          onTaskEdit={(label) => onTaskEdit(id, label)}
        />
        ;
      </div>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}
