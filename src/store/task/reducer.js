import store from "..";

export const initialState = {
  task: {},
  waiting: false, // признак ожидания загрузки
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "task/get":
      return {
        ...state,
        task: action.payload.task,
      };

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
