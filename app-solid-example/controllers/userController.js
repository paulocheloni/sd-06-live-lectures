const validateEmail = (email) => {
  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    
  return emailRegex.test(email);
}

const validatePassword = (password, passwordRegex) => (passwordRegex.test(password));

const validateRole = (role, validRoles) => (validRoles.includes(role));


exports.createUser = (userModel) => {
  return async (req, res) => {
    const { username, email, password, role } = req.body;

    console.log(validateRole(role, ['admin', 'gerente', 'cliente']));

    if (!validateEmail(email) || !validatePassword(password, /^\d+$/) || !validateRole(role, ['admin', 'gerente', 'cliente'])) {
      return res.status(400).send({ message: 'Dados inválidos.'});
    } 

    await userModel.create(username, email, password, role);
    res.status(200).send({message: 'Usuário criado com sucesso!'});
  };
};

// exports.createUserToProfileManager = (userModel) => {
//   return async (req, res) => {
//     const { username, email, password, role } = req.body;

//     if (!validateEmail(email) && !validatePassword(password) && validateRole(role, ['gerente', 'cliente'])) {
//       return res.status(400).send({ message: 'Dados inválidos.'});
//     } 

//     await userModel.create(username, email, password, role);
//     res.status(200).send({message: 'Usuário criado com sucesso!'});
//   };
// };