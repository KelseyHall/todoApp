import React from 'react';
import { Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeToDo, changeStatus, searchTodo } from './functions';

const MapTodolist = ({ toDo, setTodo }) => {
  return (
    <ul>
      {toDo.map(({ id, task, completed }) => (
        <li key={id}>
          <p>
            <span id="taskItem">{task} </span>
            <span style={{ fontWeight: 'bold' }}>
              status:
              {
                <Checkbox
                  name={task}
                  checked={completed}
                  onChange={() => changeStatus(id, setTodo)}
                  inputProps={{ 'aria-label': { task } }}
                />
              }
              {completed ? 'complete' : 'incomplete'}
            </span>
            {/*<button onClick={() => editTaskName(id, task)}>
        <EditIcon />
    </button>*/}
            <button key={id} value={id} onClick={() => removeToDo(id, setTodo)}>
              <DeleteIcon />
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MapTodolist;
