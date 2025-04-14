let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
