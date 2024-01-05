export default {
  getTask: (id, tasks) => {
    const task = tasks.find((i) => i.id === id);
    return { type: "task/get", payload: { task } };
  },
};
