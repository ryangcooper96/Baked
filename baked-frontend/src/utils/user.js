// import tokenService from "../utils/tokenService.js";
// const BASE_URL = "http://127.0.0.1:8000/users/";

// function update(ownerId, user) {
//   return fetch(`${BASE_URL}/ret/${ownerId}`, {
//     method: "PATCH",
//     headers: new Headers({
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${tokenService.getToken()}`,
//     }),
//     body: JSON.stringify(user),
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error("Error: .");
//   });
// }

// const exports = {
//   update,
// };

// export default exports;
