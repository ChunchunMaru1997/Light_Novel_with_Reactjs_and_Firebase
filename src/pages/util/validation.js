export const validateUserName = (username) => {
  return username.trim != "" && username;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validatePasswordConfirm = (password, passwordconfirm) => {
  return password == passwordconfirm;
};

export const validateCategory = (category) => {
  return category.length >= 1;
};

export const validateBook = (e) => {
  return e.length >= 1;
};
