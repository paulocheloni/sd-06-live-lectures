const connection = require('./connection');

// const validateEmail = (email) => {
//   const emailRegex = /\S+@\S+\.\S+/;
//   return emailRegex.test(email);
// };

// const validatePassword = (password) => {
//   const passwordRegex = /^\d+$/;
//   return passwordRegex.test(password);
// };

const create = async (username, email, password, role) => {
  await connection.execute(
    'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
    [username, email, password, role]
  );
};
  

module.exports = {
  create,
};