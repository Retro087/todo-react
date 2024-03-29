export const initialState = {
  tasks: [
    { title: "title 1", description: "smfsmefs,ef,sk,ef", id: "1" },
    { title: "title 2", description: "smfsmefs,ef,sk,ef", id: "2" },
    { title: "title 3", description: "smfsmefs,ef,sk,ef", id: "3" },
  ],
  done: [],
  waiting: false, // признак ожидания загрузки
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "tasks/delete":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };

    case "tasks/add-task":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload.task, id: `${state.tasks.length} + 1` },
        ],
      };
    case "tasks/done-task":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
        done: [
          ...state.done,
          ...state.tasks.filter((item) => item.id === action.payload.id),
        ],
      };
    case "tasks/delete-done":
      return {
        ...state,
        done: state.done.filter((item) => item.id !== action.payload.id),
      };
    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
