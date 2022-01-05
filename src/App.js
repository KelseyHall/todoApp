import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import todoList from './tempDatabase';
import { TextField, Checkbox } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [toDo, setTodo] = useState(todoList);

  const removeToDo = (id) => {
    setTodo(toDo.filter((each) => each.id !== id));
  };
  const changeStatus = (id) => {
    setTodo(
      toDo.map((each) => {
        if (each.id === id) {
          return { ...each, completed: !each.completed };
        }
        return each;
      })
    );
  };

  const searchTodo = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <div>
        <form
          id="input-todo"
          onSubmit={(e) => {
            let task = e.target.elements.newToDo.value.trim();
            e.preventDefault();

            setTodo((todoList) => [
              ...todoList,
              {
                id: uuidv4(),
                task,
                completed: false,
              },
            ]);
          }}
        >
          <TextField
            id="standard-basic"
            label="Add New todo"
            variant="standard"
            name="newToDo"
          />
          <button type="submit">Add</button>
        </form>
      </div>
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
                    onChange={() => changeStatus(id)}
                    inputProps={{ 'aria-label': { task } }}
                  />
                }
                {completed ? 'complete' : 'incomplete'}
              </span>
              {/*<button onClick={() => editTaskName(id, task)}>
                <EditIcon />
              </button>*/}
              <button key={id} value={id} onClick={() => removeToDo(id)}>
                <DeleteIcon />
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
// const editTaskName = (id, task) => (
//   <div>
//     <form
//       id="edit-todo"
//       onSubmit={(e) => {
//         e.preventDefault();
//         setTodo(
//           toDo.map((each) => {
//             if (each.id === id) {
//               return {
//                 ...each,
//                 task: e.target.elements.editTodo.value.trim(),
//               };
//             }
//             return each;
//           })
//         );
//       }}
//     >
//       <TextField
//         id="standard-basic"
//         label="Edit Task"
//         variant="standard"
//         name="editTodo"
//         defaultValue={task}
//       />

//       <button type="submit">update</button>
//     </form>
//   </div>
// );

export default App;
