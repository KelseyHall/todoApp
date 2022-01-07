import { v4 as uuidv4 } from 'uuid';
export const removeToDo = (id, toDo, setTodo) => {
  setTodo(toDo.filter((each) => each.id !== id));
};
export const searchTodo = (setResults, toDo, text) =>
  setResults(toDo.filter((each) => each.task.includes(text)));

export const changeStatus = (id, toDo, setTodo) => {
  setTodo(
    toDo.map((each) => {
      if (each.id === id) {
        return { ...each, completed: !each.completed };
      }
      return each;
    })
  );
};

export const addTodo = (e, setTodo) => {
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

  e.target.elements.newToDo.value = '';
};
