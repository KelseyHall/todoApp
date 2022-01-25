// import { searchTodo } from './functions';
import { TextField } from '@mui/material';
// import MapTodolist from './mapTodolist';

const SearchFiltering = ({ value, setValue }) => {
  return (
    <TextField
      id="standard-basic"
      label="Search To do's"
      variant="standard"
      name="searchTodo"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchFiltering;
