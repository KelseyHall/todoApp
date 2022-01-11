import React, { useState } from 'react';

// import EditIcon from '@mui/icons-material/Edit';
import todoList from '../tempDatabase';
import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';

const DisplayTodoList = () => {
  const [toDo, setTodo] = useState(todoList);

  const completedTodo = toDo.filter((each) => each.completed === true);

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

      <AddNewTodo setTodo={setTodo} toDo={toDo} />
      <MapTodolist toDo={toDo} setTodo={setTodo} />
      <p>search</p>
    </div>
  );
};

export default DisplayTodoList;
