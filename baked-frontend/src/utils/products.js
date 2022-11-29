import tokenService from "./tokenService.js";
const BASE_URL = "http://127.0.0.1:8000/api/v1/products/";

// // CREATE
// function create(ownerId, company) {
//   company.user = ownerId;

//   // Populate FormData object
//   const formData = new FormData();
//   for (const name in company) {
//     formData.append(name, company[name]);
//   }

//   // Reach out to API
//   return fetch(`${BASE_URL}add/`, {
//     method: "POST",
//     headers: new Headers({
//       Authorization: `Bearer ${tokenService.getToken()}`,
//     }),
//     body: formData,
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error("Error: Couldn't CREATE new Company.");
//   });
// }

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
    throw new Error("Error: Products not found");
  });
}

// // UPDATE
// function update(ownerId, company) {
//   company.user = ownerId;

//   const formData = new FormData();

//   for (const name in company) {
//     formData.append(name, company[name]);
//   }

//   return fetch(`${BASE_URL}${ownerId}/`, {
//     method: "PATCH",
//     headers: new Headers({
//       // "Content-Type": "application/json",
//       Authorization: `Bearer ${tokenService.getToken()}`,
//     }),
//     body: formData,
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error("Error: .");
//   });
// }

const exports = {
  get,
};

export default exports;
