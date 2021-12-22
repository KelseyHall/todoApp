import React from 'react';

import todoList from './tempDatabase';
import { TextField, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
function App() {
  // const [checked, setChecked] = React.useState(true);
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <div>
        <form>
          <TextField
            id="standard-basic"
            label="Add New todo"
            variant="standard"
          />
          <button>Add</button>
        </form>
      </div>
      <ul>
        {todoList.map(({ task, completed }) => (
          <li key={task}>
            <p>
              {task}{' '}
              <span style={{ fontWeight: 'bold' }}>
                status:
                {
                  <Checkbox
                    name={task}
                    checked={completed}
                    onChange={() => console.log('click')}
                    inputProps={{ 'aria-label': { task } }}
                  />
                }
                {completed ? 'complete' : 'incomplete'}
              </span>
              <button>
                <EditIcon />{' '}
              </button>
              <button key={task} onClick={() => console.log(task)}>
                X
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
