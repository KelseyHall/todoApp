import { v4 as uuidv4 } from 'uuid';

const todoList = [
  { id: uuidv4(), task: 'drink water', completed: false },
  {
    id: uuidv4(),
    task: 'walk zoey',
    completed: true,
  },
  {
    id: uuidv4(),
    task: 'do groceries',
    completed: false,
  },
  {
    id: uuidv4(),
    task: 'take nap',
    completed: true,
  },
];

export default todoList;
