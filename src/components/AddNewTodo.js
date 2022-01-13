import { addTodo } from './functions';
import { TextField } from '@mui/material';
const AddNewTodo = ({ setTodo }) => (
  <div>
    <form id="input-todo" onSubmit={(e) => addTodo(e, setTodo)}>
      <TextField
        id="standard-basic"
        label="Add New todo"
        variant="standard"
        name="newToDo"
      />
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddNewTodo;
