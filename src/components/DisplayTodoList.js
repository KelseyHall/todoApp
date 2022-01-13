import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import todoList from '../tempDatabase';
import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';
import SearchFiltering from './SearchFilter';

const DisplayTodoList = () => {
  const [toDo, setTodo] = useState(todoList);
  const [value, setValue] = useState('');

  const completedTodo = toDo.filter((each) => each.completed === true);
  const filterTodo = () => {
    if (value.trim().length === 0) {
      return toDo;
    } else {
      return toDo.filter((todo) => todo.task.includes(value));
    }
  };

  return (
    <div>
      <p>
        You have <span style={{ fontWeight: 'bold' }}>{toDo.length}</span>{' '}
        todo's
      </p>
      <p>
        You have{' '}
        <span style={{ fontWeight: 'bold' }}>{completedTodo.length}</span>{' '}
        Completed
      </p>

      <AddNewTodo setTodo={setTodo} />
      <SearchFiltering value={value} setValue={setValue} />

      <MapTodolist toDo={filterTodo()} setTodo={setTodo} />
    </div>
  );
};

export default DisplayTodoList;
