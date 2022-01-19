import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import todoList from '../tempDatabase';
import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';
import SearchFiltering from './SearchFilter';

const DisplayTodoList = () => {
  const [toDo, setTodo] = useState(todoList);
  const [value, setValue] = useState('');

  const completedAmount = toDo.filter((todo) => todo.completed).length;
  const filterTodo = () => {
    if (value.trim().length === 0) {
      return toDo;
    } else {
      return toDo.filter((todo) => todo.task.includes(value));
    }
  };

  return (
    <div>
      <AddNewTodo setTodo={setTodo} />
      <Typography variant="subtitle1" align="center" sx={{ margin: '15px 0' }}>
        You have completed{' '}
        <span style={{ fontWeight: 'bold' }}>
          {completedAmount === toDo.length
            ? 'All'
            : `${completedAmount} out of ${toDo.length}`}
        </span>{' '}
        todo's
      </Typography>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: 'none' }}>
          Check completed:
        </Typography>
        <SearchFiltering value={value} setValue={setValue} />
      </Container>
      <MapTodolist toDo={filterTodo()} setTodo={setTodo} />
    </div>
  );
};

export default DisplayTodoList;
