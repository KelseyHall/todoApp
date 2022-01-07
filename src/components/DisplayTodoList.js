import React, { useState } from 'react';

// import EditIcon from '@mui/icons-material/Edit';
import todoList from '../tempDatabase';
import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';
import SearchFiltering, { FilteredResults } from './SearchFilter';

const DisplayTodoList = () => {
  const [toDo, setTodo] = useState(todoList);
  const [searchResults, setResults] = useState(toDo);
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
      <SearchFiltering toDo={toDo} setResults={setResults} />
      <AddNewTodo setTodo={setTodo} />
      <MapTodolist toDo={toDo} setTodo={setTodo} />
      <p>search</p>
      <FilteredResults setTodo={setTodo} searchResults={searchResults} />
    </div>
  );
};

export default DisplayTodoList;
