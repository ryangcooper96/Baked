import tokenService from "../utils/tokenService.js";
const BASE_URL = "http://127.0.0.1:8000/api/v1/companies/";

// CREATE
function create(ownerId, company) {
  company.user = ownerId;
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
    body: JSON.stringify(company),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: .");
  });
}

// READ
// Need to access company based on user
function get(ownerId) {
  return fetch(`${BASE_URL}${ownerId}/`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: Company not found");
  });
}

// UPDATE
function update(ownerId, company) {
  company.owner = ownerId;
  return fetch(BASE_URL, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
    body: JSON.stringify(company),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: .");
  });
}

// DELETE

const exports = {
  create,
  get,
};

export default exports;
