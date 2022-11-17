function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

function getToken() {
  let token = localStorage.getItem("token");
  if (token) {
    // Check if expired, remove if it is
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now()) {
      localStorage.removeItem("token");
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).sub : null;
}

function removeToken() {
  localStorage.removeItem("token");
}

const exports = {
  setToken,
  getToken,
  removeToken,
  getUserFromToken,
};

export default exports;
