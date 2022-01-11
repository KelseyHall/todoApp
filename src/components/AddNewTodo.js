import { addTodo } from './functions';
import { TextField } from '@mui/material';
const AddNewTodo = ({ setTodo, toDo }) => (
  <div>
    <form id="input-todo" onSubmit={(e) => addTodo(e, setTodo, toDo)}>
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
