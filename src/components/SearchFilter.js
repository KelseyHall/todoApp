import { searchTodo } from './functions';
import { TextField } from '@mui/material';
import MapTodolist from './mapTodolist';

const SearchFiltering = ({ toDo, setResults }) => {
  return (
    <TextField
      id="standard-basic"
      label="Search To do's"
      variant="standard"
      name="searchTodo"
      onChange={(e) => searchTodo(setResults, toDo, e.target.value)}
    />
  );
};

export const FilteredResults = ({ toDo, searchResults, setTodo }) => (
  <MapTodolist toDo={searchResults} setTodo={setTodo} />
);

export default SearchFiltering;
