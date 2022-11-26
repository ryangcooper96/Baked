import tokenService from "../utils/tokenService.js";
const BASE_URL = "http://127.0.0.1:8000/api/v1/companies/";

// CREATE
function create(ownerId, company) {
  company.user = ownerId;
  company.address_billing = "a";
  company.address_collection = "a";
  company.address_delivery = "a";

  // Populate FormData object
  const formData = new FormData();
  for (const name in company) {
    formData.append(name, company[name]);
  }

  // Reach out to API
  return fetch(`${BASE_URL}add/`, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
    body: formData,
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: Couldn't CREATE new Company.");
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
  company.user = ownerId;
  company.address_billing = "a";
  company.address_collection = "a";
  company.address_delivery = "a";
  company.contact_phone = 123456;

  const formData = new FormData();

  for (const name in company) {
    formData.append(name, company[name]);
  }

  return fetch(`${BASE_URL}${ownerId}/`, {
    method: "PATCH",
    headers: new Headers({
      // "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
    body: formData,
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: .");
  });
}

// DELETE
function remove(ownerId, company) {
  return fetch(`${BASE_URL}${ownerId}/`, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${tokenService.getToken()}`,
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: .");
  });
}

const exports = {
  create,
  get,
  update,
  remove,
};

export default exports;
