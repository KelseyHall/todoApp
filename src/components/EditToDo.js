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
