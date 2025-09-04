const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "secret";

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido ou expirado." });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: "Token não fornecido." });
  }
}

module.exports = { authenticateJWT, SECRET };
