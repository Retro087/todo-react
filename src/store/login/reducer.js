import store from "..";

export const initialState = {
  profile: [],
  isAuth: false,
  waiting: false, // признак ожидания загрузки
};

// Обработчик действий
function reducer(state = initialState, action) {
  switch (action.type) {
    case "registration":
      return {
        ...state,
        profile: { ...action.payload },
        isAuth: true,
      };

    default:
      // Нет изменений
      return state;
  }
}

export default reducer;
