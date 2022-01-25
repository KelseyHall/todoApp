import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';
import SearchFiltering from './SearchFilter';

const DisplayTodoList = () => {
  const [value, setValue] = useState('');
  const [toDo, setTodo] = useState(() => {
    const getSavedTodos = localStorage.getItem('todoList');
    if (getSavedTodos) {
      return JSON.parse(getSavedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(toDo));
  }, [toDo]);

  const completedAmount = toDo.filter((todo) => todo.completed).length;

  const filterTodo = () => {
    const findTodo = toDo.filter((todo) => todo.task.includes(value));
    if (value.trim().length === 0) {
      return toDo;
    } else {
      return findTodo;
    }
  };

  const taskStatement = () => {
    if (toDo.length === 0) {
      return 'no';
    } else {
      return completedAmount === toDo.length
        ? 'All'
        : `${completedAmount} out of ${toDo.length}`;
    }
  };

  return (
    <div>
      <AddNewTodo setTodo={setTodo} />
      <Typography variant="subtitle1" align="center" sx={{ margin: '15px 0' }}>
        You have completed{' '}
        <span style={{ fontWeight: 'bold' }}>{taskStatement()}</span> todo's
      </Typography>

      <Container
        disableGutters
        sx={[
          {
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          },
          (theme) => ({
            [theme.breakpoints.only('xs')]: {
              flexDirection: 'Column',
              alignItems: 'stretch',
            },
          }),
        ]}
      >
        <SearchFiltering value={value} setValue={setValue} />

        <Typography
          variant="body2"
          sx={[
            { marginBottom: 'none' },
            (theme) => ({
              [theme.breakpoints.only('xs')]: {
                marginTop: '20px',
              },
            }),
          ]}
        >
          Check completed:
        </Typography>
      </Container>
      <MapTodolist toDo={filterTodo()} setTodo={setTodo} />
    </div>
  );
};

export default DisplayTodoList;
