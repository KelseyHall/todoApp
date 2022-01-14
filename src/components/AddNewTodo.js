import { addTodo } from './functions';
import { TextField, Button } from '@mui/material';
const AddNewTodo = ({ setTodo }) => (
  <div>
    <form id="input-todo" onSubmit={(e) => addTodo(e, setTodo)}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Add New todo"
        variant="filled"
        name="newToDo"
        color="primary"
        margin="normal"
      />
      <Button
        fullWidth
        size="small"
        variant="contained"
        color="primary"
        type="submit"
      >
        Add
      </Button>
    </form>
  </div>
);

export default AddNewTodo;
