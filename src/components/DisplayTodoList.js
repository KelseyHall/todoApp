import React, { useState, useEffect } from 'react';

// import EditIcon from '@mui/icons-material/Edit';
import todoList from '../tempDatabase';
import MapTodolist from './mapTodolist';
import AddNewTodo from './AddNewTodo';
import SearchFiltering, { FilteredResults } from './SearchFilter';
// import { searchTodo } from './functions';

// import { TextField } from '@mui/material';

const DisplayTodoList = () => {
  const [toDo, setTodo] = useState(todoList);
  const [searchResults, setResults] = useState(toDo);
  const completedTodo = toDo.filter((each) => each.completed === true);

  const UpdateSearch = ({ toDo, searchResults, setResults }) => {
    console.log(searchResults);
    useEffect(() => {
      console.log('use effect');
      setResults(searchResults);
    }, [toDo]);
    return <FilteredResults setTodo={setTodo} toDo={searchResults} />;
  };
  // console.log(toDo);
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
      {/*<TextField
        id="standard-basic"
        label="Search To do's"
        variant="standard"
        name="searchTodo"
        onChange={(e) => {
          searchTodo(toDo, e.target.value, setResults);
        }}
      />*/}
      <SearchFiltering toDo={toDo} setResults={setResults} />
      <AddNewTodo setTodo={setTodo} toDo={toDo} setResults={setResults} />
      <MapTodolist toDo={toDo} setTodo={setTodo} />
      <p>search</p>
      <UpdateSearch
        toDo={toDo}
        searchResults={searchResults}
        setResults={setResults}
      />
    </div>
  );
};

export default DisplayTodoList;
