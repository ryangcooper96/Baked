const BASE_URL = "http://127.0.0.1:8000/api/v1/companies/";

// CREATE
function create(ownerId) {
  let company = {};
  company.owner = ownerId;
  return fetch(BASE_URL, {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(company),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: .");
  });
}

// READ
// Need to access company based on user
function get() {
  return fetch(BASE_URL + "1/", {
    method: "GET",
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Error: Company not found");
  });
}

// UPDATE

// DELETE

const exports = {
  create,
  get,
};

export default exports;
