import tokenService from "./tokenService.js";

const BASE_URL = "http://127.0.0.1:8000/"; // Note: Once deployed this should be updated.

function signup(user) {
  return fetch(BASE_URL + "signup/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Email already taken!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

function getUser() {
  console.log(tokenService.getUserFromToken());
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login/", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

const exports = {
  signup,
  getUser,
  logout,
  login,
};

export default exports;
