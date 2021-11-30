import jwtDecode from "jwt-decode";

// return the user data from the session storage
export const getUser = () => {
  const userStr = window.sessionStorage.getItem("token");
  if (userStr) {
    const tokenDecoded = jwtDecode(userStr);
    window.user = tokenDecoded.user[0];
    return tokenDecoded;
  } else {
    return null;
  }
};

// return the token from the session storage
export const getToken = () => {
  return window.sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  window.sessionStorage.removeItem("token");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  window.sessionStorage.setItem("token", token);
  window.sessionStorage.setItem("user", JSON.stringify(user));
};
