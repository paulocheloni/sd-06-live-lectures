// const validateEmail = (email) => {
//   const emailRegex = /\S+@\S+\.\S+/;
//   return emailRegex.test(email);
// };

// const validatePassword = (password) => {
//   const passwordRegex = /^\d+$/;
//   return passwordRegex.test(password);
// };

// const create = async (connection, username, email, password, role) => {
  
// };

const factory = (connection) => {
  return {
    create: async function (username, email, password, role) {
      await connection.execute(
        'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
        [username, email, password, role]
      );
    }
  }
}
  

module.exports = {
  factory,
};