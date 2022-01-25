import { v4 as uuidv4 } from 'uuid';

export const removeToDo = (id, setTodo) => {
  setTodo((toDo) => toDo.filter((each) => each.id !== id));
};

export const changeStatus = (id, setTodo) => {
  setTodo((toDo) =>
    toDo.map((each) => {
      if (each.id === id) {
        return { ...each, completed: !each.completed };
      }
      return each;
    })
  );
};

export const addTodo = (e, setTodo, setError) => {
  let task = e.target.elements.newToDo.value.trim();
  e.preventDefault();

  if (task.length > 0) {
    setTodo((todoList) => [
      ...todoList,
      {
        id: uuidv4(),
        task,
        completed: false,
      },
    ]);
    setError({ error: false, message: '' });
    e.target.elements.newToDo.value = '';
  } else {
    setError({
      error: true,
      message: '*make sure to add value before hitting add',
    });
  }
};
