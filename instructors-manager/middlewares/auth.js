module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    return res.status(500).json({ error: "Você não tem acesso a essa rota"});
  }
}