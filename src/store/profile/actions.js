export default {
  registration: (name, password, login) => {
    return { type: "registration", payload: { name, password, login } };
  },
};
