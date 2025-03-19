import React from 'react';

import NewTaskForm from '../Inputs/NewTaskForm';

export default function Header({onItemAdd}) {
  return (
    <header>
      <h1>Todos</h1>
      <NewTaskForm onItemAdd={onItemAdd} />
    </header>
  );
}
