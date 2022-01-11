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
      onChange={(e) => searchTodo(toDo, e.target.value, setResults)}
    />
  );
};

export const FilteredResults = ({ toDo, setTodo }) => (
  <MapTodolist toDo={toDo} setTodo={setTodo} />
);

export default SearchFiltering;
