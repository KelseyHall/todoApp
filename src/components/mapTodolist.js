import React from 'react';
import { IconButton, Checkbox, ListItem, List, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeToDo, changeStatus, searchTodo } from './functions';

const MapTodolist = ({ toDo, setTodo }) => {
  return (
    <List>
      {toDo.map(({ id, task, completed }) => (
        <Card variant="outlined" key={id}>
          <ListItem
            key={id}
            secondaryAction={
              <IconButton
                aria-label="delete"
                key={id}
                color="primary"
                value={id}
                onClick={() => removeToDo(id, setTodo)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <p>
              <span style={{ fontWeight: 'bold' }}>
                {
                  <Checkbox
                    name={task}
                    checked={completed}
                    onChange={() => changeStatus(id, setTodo)}
                    inputProps={{
                      'aria-label': { task },
                    }}
                    color="secondary"
                  />
                }
              </span>
              <span id="taskItem">{task} </span>
              {/*<button onClick={() => editTaskName(id, task)}>
        <EditIcon />
      </button>*/}
            </p>
          </ListItem>
        </Card>
      ))}
    </List>
  );
};

export default MapTodolist;
