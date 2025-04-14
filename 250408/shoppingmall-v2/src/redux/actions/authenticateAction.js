const login = (id, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, password },
    });
  };
};

const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };
};

export const authenticateAction = { login, logout };
