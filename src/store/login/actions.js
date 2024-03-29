export default {
  registration: (name, password, login) => {
    return { type: "registration", payload: { name, password, login } };
  },
  update: (name, password, login, photo = null) => {
    return { type: "registration", payload: { name, password, login, photo } };
  },
};
