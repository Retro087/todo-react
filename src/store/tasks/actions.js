export default {
  delete: (id) => {
    return { type: "tasks/delete", payload: { id } };
  },

  addTask: (task) => {
    return { type: "tasks/add-task", payload: { task } };
  },
};
