export default {
  delete: (id) => {
    return { type: "tasks/delete", payload: { id } };
  },

  addTask: (task) => {
    return { type: "tasks/add-task", payload: { task } };
  },
  doneTask: (id) => {
    return { type: "tasks/done-task", payload: { id } };
  },
  deleteDone: (id) => {
    return { type: "tasks/delete-done", payload: { id } };
  },
};
